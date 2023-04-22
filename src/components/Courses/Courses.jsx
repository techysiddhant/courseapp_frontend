import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import toast from 'react-hot-toast';
import "../home.css";
import { getAllCourses } from '../../redux/actions/course';
import { addToPlaylist } from '../../redux/actions/Profile';
import { loadUser } from '../../redux/actions/user';

const Courses = () => {
    const [keyword,setKeyword] = useState('');
    const [category,setCategory] = useState('');
    const dispatch = useDispatch();

    const categories = ["Web Development","Android Development","ios Development"];
    const addToPlaylistHandler = async(courseId)=>{
        await dispatch(addToPlaylist(courseId));
        dispatch(loadUser());
        // console.log("Added to Play List Handler",courseId);
    }
    const {loading,courses,error,message} = useSelector(state=>state.course);
    useEffect(()=>{
        dispatch(getAllCourses(category,keyword));
        if(error){
            toast.error(error);
            dispatch({type:"clearError"});
        }
        if(message){
            toast.success(message);
            dispatch({type:"clearMessage"});
        }
    },[category,keyword,dispatch,error,message]);
    const handleClearFilter = ()=>{
        setCategory('');

    }
  return (
    <Container  minH={'95vh'} maxW='container.lg' paddingY={"8"}>
        <Heading m={'8'}>All Courses</Heading>
        <HStack>
        <Input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder="Search a Course..." type={'text'} focusBorderColor="yellow.500" />
        {
            category && <Button onClick={handleClearFilter}>Clear Category</Button>
        }
        </HStack>
        <HStack overflowX={"auto"} paddingY='8'>
            {
                categories.map((item,index)=>(
                    <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                        <Text>{item}</Text>
                    </Button>
                ))
            }
            
        </HStack>
        <Stack direction={["column","row"]} flexWrap="wrap" justifyContent={["flex-start","space-evenly"]}
        alignItems={["center","flex-start"]}>
            { courses &&
                (courses.length > 0) ? (
                    courses.map(item=>(
                        <Course key={item._id} title={item.title} description={item.description} views={item.views} imageSrc={item.poster.url} id={item._id} creator={item.createdBy} lectureCount={item.numOfVideos} addToPlaylistHandler={addToPlaylistHandler} loading={loading} />
                    ))
                )
                :(
                    <Heading>Courses not found</Heading>
                )
            }
        </Stack>
    </Container>
  )
}

export default Courses

const Course = ({views,title,imageSrc,id,creator,description,lectureCount,addToPlaylistHandler,loading})=>{
    return (
        <VStack className='course' alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"}  />
            <Heading textAlign={['center','left']} maxWidth="200px" fontFamily={'sans-serif'} noOfLines={3} >{title}</Heading>
            <Text noOfLines={2}>{description}</Text>
            <HStack>
                <Text fontWeight={'bold'} textTransform="uppercase">Creator</Text>
                <Text fontFamily={'body'} textTransform="uppercase">{creator}</Text>


            </HStack>
            <Heading textAlign={'center'} size='xs' >{`Lectures - ${lectureCount}`}</Heading>
            <Heading  size='xs' textTransform={'uppercase'} >{`Views - ${views}`}</Heading>
            <Stack direction={["column","row"]} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'yellow'} >Watch Now</Button>
                </Link>
                <Button isLoading={loading} variant={'ghost'} colorScheme={'yellow'} onClick={()=>addToPlaylistHandler(id)}>Add to playlist</Button>
            </Stack>
        </VStack>
    )
}