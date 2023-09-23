import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import AddProduct from "../Components/AddProduct";
import RenderData from "../Components/RenderData";
import axios from "axios";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  
  return (
    <div>
      <Button m={5} onClick={onOpen}>
        Add Product
      </Button>
      <AddProduct isOpen={isOpen} onClose={onClose} />
      <RenderData />
    </div>
  );
};

export default Dashboard;
