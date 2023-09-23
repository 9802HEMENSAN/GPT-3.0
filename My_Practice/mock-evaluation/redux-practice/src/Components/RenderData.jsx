import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  IconButton,
  VStack,
  Select,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import EditProduct from './EditProduct';

const RenderData = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterGender, setFilterGender] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()

  const GetAPIData = async () => {
    try {
      // Fetch products from the JSON server
      await axios.get("https://mock-04-b29-backendserver.onrender.com/product").then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(()=> {
    GetAPIData()
  },[])
 
  useEffect(() => {
    // Filter products based on gender and category
    let filteredData = [...products];

    if (filterGender !== '') {
      filteredData = filteredData.filter((product) => product.Gender === filterGender);
    }

    if (filterCategory !== '') {
      filteredData = filteredData.filter((product) => product.Category === filterCategory);
    }

    // Sort products by price
    filteredData.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.Price - b.Price;
      } else {
        return b.Price - a.Price;
      }
    });

    // Search by product name
    if (searchTerm !== '') {
      filteredData = filteredData.filter((product) =>
        product.Product_Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filteredData);
    setCurrentPage(1);
  }, [filterGender, filterCategory, sortOrder, searchTerm, products]);

  

  const handleDelete = async (productId) => {
    try {
      // Delete product from the JSON server
      await axios.delete(`https://mock-04-b29-backendserver.onrender.com/product/${productId}`);
      // Remove the deleted product from the local state
      setProducts(products.filter((product) => product.id !== productId));
      setTimeout(() => {
        alert('Product deleted successfully');
      },1000)
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <VStack spacing={4}>
      <Select
        placeholder="Filter by Gender"
        value={filterGender}
        onChange={(e) => setFilterGender(e.target.value)}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Select
        placeholder="Filter by Category"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Shirts">Shirts</option>
        <option value="Jeans">Jeans</option>
        <option value="Trousers">Trousers</option>
        <option value="Suits">Suits</option>
        <option value="Saree">Saree</option>
        <option value="Kurti">Kurti</option>
        <option value="Lehenga">Lehenga</option>
        <option value="Jackets">Jackets</option>
      </Select>
      <Select
        placeholder="Sort by Price"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
      <Input
        placeholder="Search by Product Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Product Name</Th>
            <Th>Product Description</Th>
            <Th>Gender</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((product) => (
            <Tr key={product.id}>
              <Td>
                <img src={product.Image} alt={product.Product_Name} width="50" />
              </Td>
              <Td>{product.Product_Name}</Td>
              <Td>{product.Product_Description}</Td>
              <Td>{product.Gender}</Td>
              <Td>{product.Category}</Td>
              <Td>${product.Price}</Td>
              <Td>
                <Button onClick={onOpen}>Edit</Button>
                <EditProduct isOpen={isOpen} onClose={onClose} id={product.id} product={product} GetAPIData={GetAPIData}/>
              </Td>
              <Td>
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDelete(product.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div>
        <Button
          onClick={() => paginate(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button isDisabled >{currentPage}</Button>
        <Button
          onClick={() => paginate(currentPage + 1)}
          isDisabled={indexOfLastItem >= filteredProducts.length}
        >
          Next
        </Button>
      </div>
    </VStack>
  );
};

export default RenderData;
