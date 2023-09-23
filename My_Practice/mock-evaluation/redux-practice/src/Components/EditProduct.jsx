import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';

const EditProduct = ({ isOpen , onClose , product , id }) => {
  const [editedProduct, setEditedProduct] = useState(product);
  
  const getEditProduct = async (id) => {
    try {
      // Fetch product from the JSON server
      await axios.get(`http://localhost:8080/products/${id}`).then((response) => {
        setEditedProduct(response.data);
        console.log(response)
      });
    } catch (error) {
      console.log(error);
    }
 }

  useEffect(() => {
    getEditProduct()
  }, [editedProduct]);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleUpdate = async (id) => {
    try {
        await axios.patch(`https://mock-04-b29-backendserver.onrender.com/product/${id}`,  editedProduct).then(()=> {
            setTimeout(() => {
                alert('Product updated successfully');
            })
            onClose();
        })
         
    } catch (error) {
         onClose();
         console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
          <Input
              name="Image"
              placeholder="Product Image URL"
              value={editedProduct.Image}
              onChange={handleInputChange}
            />
            <Input
              name="Product_Name"
              placeholder="Product_Name"
              value={editedProduct.Product_Name}
              onChange={handleInputChange}
            />
            <Textarea
              name="Product_Description"
              placeholder="Product Description"
              value={editedProduct.Product_Description}
              onChange={handleInputChange}
            />
            <Select
              name="Gender"
              placeholder="Select Gender"
              value={editedProduct.Gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            <Select
              name="Category"
              placeholder="Select Category"
              value={editedProduct.Category}
              onChange={handleInputChange}
            >
              {editedProduct.gender === 'Male' ? (
                <>
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Trousers">Trousers</option>
                  <option value="Suits">Suits</option>
                </>
              ) : (
                <>
                  <option value="Saree">Saree</option>
                  <option value="Kurti">Kurti</option>
                  <option value="Lehenga">Lehenga</option>
                  <option value="Jackets">Jackets</option>
                </>
              )}
            </Select>
            <Input
              name="Price"
              type="number"
              placeholder="Price"
              value={editedProduct.Price}
              onChange={handleInputChange}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={()=> handleUpdate(id)}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditProduct;
