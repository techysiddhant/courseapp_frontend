import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { courseRequest } from '../../redux/actions/other';
import { useDispatch, useSelector } from 'react-redux';

const Request = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [course,setCourse] = useState();
    const dispatch = useDispatch();
  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector(state => state.other);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(courseRequest(name, email, course));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, stateMessage]);
  return (
    <Container height={'90vh'} >
        <VStack h={'full'} justifyContent={'center'} spacing='16'>
            <Heading>Request New Course</Heading>
            <form onSubmit={submitHandler}  style={{width:"100%"}}>
                <Box my='4'>
                <FormLabel htmlFor='name' children={"Name"} />
                <Input required id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder="abc" type={"text"} focusBorderColor={"yellow.500"} />

                </Box>
                <Box my='4'>
                <FormLabel htmlFor='email' children={"Email"} />
                <Input required id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="example@gmail.com" type={"email"} focusBorderColor={"yellow.500"} />

                </Box>
                <Box my='4'>
                <FormLabel htmlFor='course' children={"Explain Course"} />
                <Textarea required id='course' value={course} onChange={(e)=>setCourse(e.target.value)} placeholder="Course Details" focusBorderColor={"yellow.500"} />

                </Box>
                <Button isLoading={loading} my='4' colorScheme={"yellow"} type={"submit"}>
                    Send Mail
                </Button>
                <Box my='4'>
                    See available courses! <Link to='/courses'><Button colorScheme={'yellow'} variant="link">Click</Button>{" "} here</Link>
                </Box>
            </form>
        </VStack>
    </Container>
  )
}


export default Request