import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import cursor from "../../../assets/images/cursor.png";
import Sidebar from '../Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../../redux/actions/admin';
import toast from 'react-hot-toast';
const fileUploadCss = {
  cursor:"pointer",
      marginLeft:"-5%",
      width:"110%",
      border:"none",
      height:"100%",
      color:"purple",
      backgroundColor:"white"
}
const fileUploadStyle ={
  "&::file-selector-button":fileUploadCss
}
const CreateCourse = () => {
  const [title,setTitle]=useState('');
  const [description,setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category,setCategory] = useState('');
  const [image,setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const dispatch = useDispatch();
  const {loading,error,message} = useSelector(state=>state.admin);
  const changeImageHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        setImagePrev(reader.result);
        setImage(file);
    }
  }
  const categories = ["Web Development","Android Development","ios Development"];
  const submithandler = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',title);
    formData.append('description',description);
    formData.append('createdBy',createdBy);
    formData.append('category',category);
    formData.append('file',image);
    dispatch(createCourse(formData));
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
  },[loading,error,message,dispatch])
  return (
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Container py='16'>
          <form onSubmit={submithandler}>
          <Heading textTransform={'uppercase'} my='16' textAlign={['center','left']}>Create Course</Heading>
          <VStack m={'auto'} spacing={'8'}>
            <Input  placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} focusBorderColor='purple.300' />
            <Input  placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} focusBorderColor='purple.300' />
            <Input  placeholder='Creator Name' value={createdBy} onChange={(e)=>setCreatedBy(e.target.value)} focusBorderColor='purple.300' />

            <Select  focusBorderColor='purple.300' value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value="">Category</option>
              {
                categories.map((item)=>(
                  <option key={item} value={item}>{item}</option>
                ))
              }
            </Select>

            <Input
              required
              
              accept="image/*"
              type={'file'}
              focusBorderColor={'purple.300'}
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />

            {
              imagePrev && (
                <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
              )
            }
            <Button isLoading={loading} width={'full'} type='submit' colorScheme='purple'>Create</Button>
          </VStack>
          </form>
        </Container>
        <Sidebar/>
    </Grid>
  )
}

export default CreateCourse