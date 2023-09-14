import React, {useState} from 'react';
import { useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Center,
    Box,
    Stack,
    Input,
    Button,
    Heading,
} from '@chakra-ui/react';
import { LoginUser } from '../redux/AuthReducer/action';

const Auth = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setpassword] = useState("1234")
     const dispatch= useDispatch();
     const navigate=useNavigate()  
 const handleSubmit=(e)=>{
   e.preventDefault();

   const userDetails={
    email,
    password
   }
  
   dispatch(LoginUser(userDetails)).then(()=> {
    navigate("/")
   })
 }
//     <Link to="/updatelogin">
//  <Button>
//     update credentials
//  </Button>
//     </Link>
    return (
        <Box>
            <Heading fontSize={30} m={10}>Authentication </Heading>

            <Center >
                <form onSubmit={handleSubmit}>
                    <Stack w={500}>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email'
                             placeholder="enter email" 
                             name="email"
                             value={email}
                             onChange={ (e)=> setEmail(e.target.value)}
                             />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Password</FormLabel>
                            <Input type='password'
                             placeholder="enter password" 
                             name="password"
                             value={password}
                             onChange={(e)=> setpassword(e.target.value) }
                             />
                        </FormControl>
                        <Button type="submit" bg="green.300"  mt={40}  >Login</Button>
                    </Stack>
                </form>
            </Center>
        </Box>
    )
}

export default Auth