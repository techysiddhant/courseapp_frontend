import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/Profile';
import { toast } from 'react-hot-toast';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const {loading,message,error} = useSelector(state => state.profile)
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:'clearError'});
    }
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'});
    }
  },[message,error,dispatch])
  return (
    <Container py="16" height={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          my="16"
          textAlign={['center', 'left']}
          textTransform="uppercase"
        >
          Forget Password
        </Heading>
        <VStack spacing={'8'}>
          <Input
            required

            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="example@email.com"
            type={'email'}
            focusBorderColor={'yellow.500'}
          />
          <Button isLoading={loading} type="submit" width={'full'} colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
