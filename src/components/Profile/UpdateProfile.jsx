import React, {  useState } from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/Profile';
import { loadUser } from '../../redux/actions/user';
import { useNavigate } from 'react-router-dom';


const UpdateProfile = ({user}) => {
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading} = useSelector(state=>state.profile)
    const submitHandler = async(e)=>{
        e.preventDefault();
        await dispatch(updateProfile(name,email));
        dispatch(loadUser());
        navigate('/profile');
    };
    
  return (
    <Container py='16' minH={'90vh'} >
    <form action="" onSubmit={submitHandler}>
        <Heading my='16' textAlign={["center",'left']} textTransform={'uppercase'}>Update Profile</Heading>
        <VStack spacing={'8'}>
            <Input  value={name} onChange={e=>setName(e.target.value)} placeholder='Name' type='text' focusBorderColor='yellow.500' />

            <Input  value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter New Email' type='email' focusBorderColor='yellow.500' />
            <Button isLoading={loading} colorScheme='yellow' type='submit'>Update</Button>
        </VStack>
    </form>
</Container>
  )
}

export default UpdateProfile