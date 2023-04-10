import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { resetPassword } from '../../redux/actions/Profile';
import { toast } from 'react-hot-toast';
const ResetPassword = () => {
    const [password,setPassword] = useState('');
    const params = useParams();
    // console.log(params);
    const dispatch = useDispatch();
    const {loading,error,message} = useSelector(state=>state.profile);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(params.token,password))
    }
    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:'clearError'});
      }
      if(message){
        toast.success(message);
        dispatch({type:'clearMessage'});
      }
    },[dispatch,error,message]);
  return (
    <Container py='16' height={'90vh'}>
        <form onSubmit={submitHandler}>
            <Heading my='16' textAlign={['center','left']} textTransform='uppercase'>Reset Password</Heading>
            <VStack spacing={'8'}>
            <Input
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Password"
              type={'password'}
              focusBorderColor={'yellow.500'}
            />
            <Button isLoading={loading} type='submit' width={'full'} colorScheme="yellow">Reset Password</Button>
            </VStack>
        </form>
    </Container>
  )
}



export default ResetPassword