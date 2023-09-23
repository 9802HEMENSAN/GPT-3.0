import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const AddProduct = ({ isOpen, onClose }) => {
  const [productData, setProductData] = useState({
    Image: '',
    Product_Name: '',
    Product_Description : '',
    Gender: '',
    Category: '',
    Price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Send the product data to your JSON server
      const response = await fetch('https://mock-04-b29-backendserver.onrender.com/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        console.log('Product added successfully');
        setProductData({
            Image: '',
            Product_Name: '',
            Product_Description : '',
            Gender: '',
            Category: '',
            Price: '',
        });
        onClose();
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Input
              name="Image"
              placeholder="Product Image URL"
              value={productData.Image}
              onChange={handleInputChange}
            />
            <Input
              name="Product Description"
              placeholder="Product_Name"
              value={productData.Product_Name}
              onChange={handleInputChange}
            />
            <Textarea
              name="Product_Description"
              placeholder="Product Description"
              value={productData.Product_Description}
              onChange={handleInputChange}
            />
            <Select
              name="Gender"
              placeholder="Select Gender"
              value={productData.Gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            <Select
              name="Category"
              placeholder="Select Category"
              value={productData.Category}
              onChange={handleInputChange}
            >
              {productData.gender === 'Male' ? (
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
              value={productData.Price}
              onChange={handleInputChange}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Add Product
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddProduct;
