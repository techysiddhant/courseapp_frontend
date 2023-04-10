import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/Profile';
import { toast } from 'react-hot-toast';

const ChangePassword = () => {
    const [oldPassword,setOldPassword]= useState('');
    const [newPassword,setNewPassword] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(changePassword(oldPassword,newPassword))
    }
    const {loading,message,error} = useSelector(state=>state.profile)
    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:'clearError'});
      }
      if(message){
        toast.success(message);
        dispatch({type:'clearMessage'});
      }
    },[dispatch,error,message])
  return (
    <Container py='16' minH={'90vh'} >
        <form action="" onSubmit={submitHandler}>
            <Heading my='16' textAlign={["center",'left']} textTransform={'uppercase'}>Change Password</Heading>
            <VStack spacing={'8'}>
                <Input required id="password" value={oldPassword} onChange={e=>setOldPassword(e.target.value)} placeholder='Enter Old Password' type='password' focusBorderColor='yellow.500' />

                <Input required value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder='Enter New Password' type='password' focusBorderColor='yellow.500' />
                <Button isLoading={loading} colorScheme='yellow' type='submit'>Change</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword