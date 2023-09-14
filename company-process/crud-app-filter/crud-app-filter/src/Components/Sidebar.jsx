import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { Box, Center, Checkbox, Heading, HStack, Radio, RadioGroup } from '@chakra-ui/react'

const Sidebar = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("gender");

  const orderedValue = searchParams.get("order")
  const [gender, setGender] = useState(initialCategory || []);
  const [order, setOrder] = useState(orderedValue || "");

  const handleChange = (e) => {
    let newGender = [...gender];

    let val = e.target.value;
      //  alert(val); // kids [ men ,women , kids]

    if (newGender.includes(val)) {
      newGender = newGender.filter((el) => el !== val)
    } else {
      newGender.push(val);
    }

    setGender(newGender);// [ ]
  }

  useEffect(() => {
    let params = {
      gender

    }
    order && (params.order = order)
    setsearchParams(params);

  },[gender,order])


  const handleSort = (e) => {

    setOrder(e.target.value)
  }

  return (
    <Box>
      <Heading fontSize={20}>FilterBy</Heading>
      <Center>
        <HStack>
          <Box>
            <Checkbox value="men" onChange={handleChange}
              checked={gender.includes("men")}>men</Checkbox>

          </Box>
          <Box>
            <Checkbox value="women" onChange={handleChange}
              checked={gender.includes("women")}>women</Checkbox>

          </Box>
          <Box>
            <Checkbox value="kids" onChange={handleChange}
              checked={gender.includes("kids")}>kids</Checkbox>

          </Box>
        </HStack>
        <h1>Sort By</h1>
        <div onChange={handleSort} >
          <input type="radio" name="order" value="asc" checked={order === "asc"} />
          <label>asc</label>
          <input type="radio" name="order" value="desc" checked={order === "desc"} />
          <label>desc</label>
        </div>

      </Center>
    </Box>
  )
}

export default Sidebar;


{/* <Box  > 
<RadioGroup  onChange={handleSort}> 
   <Radio  name="order"  value="asc"  >ASC</Radio>
   <Radio  name="order" value="desc"  >DESC</Radio>
</RadioGroup>
</Box> */}