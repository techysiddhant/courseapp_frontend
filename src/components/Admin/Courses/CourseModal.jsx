import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";
const fileUploadCss = {
    cursor:"pointer",
        marginLeft:"-5%",
        width:"110%",
        border:"none",
        height:"100%",
        color:"purple",
        backgroundColor:"white"
  }
const CourseModal = ({ isOpen, onClose, id, deleteLectureButtonHandler, addLectureHandler, courseTitle,loading, lectures = [] }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [videoPrev, setVideoPrev] = useState('');
    const changeVideoHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setVideoPrev(reader.result);
            setVideo(file);
        }
      }
    const handleModalClose=()=>{
        setTitle('');
        setDescription('');
        setVideo(' ');
        setVideoPrev(' ');
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onClose={handleModalClose} size={'full'} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{courseTitle}</ModalHeader>
                <ModalCloseButton onClick={onClose} />
                <ModalBody p='16'>
                    <Grid templateColumns={['1fr', '3fr 1fr']}>
                        <Box px={['0', '16']}>
                            <Box my='5'>
                                <Heading>{courseTitle}</Heading>
                                <Heading size={'sm'} opacity={'0.4'}>{`# ${id}`}</Heading>

                            </Box>
                            <Heading size={'lg'} >Lectures</Heading>

                            {
                                lectures.map((lecture, index) => (
                                    <VideoCard key={index} loading={loading} title={lecture.title} description={lecture.description} num={index+1} lectureId={lecture._id} courseId={id} deleteLectureButtonHandler={deleteLectureButtonHandler} />
                                ))
                            }
                        </Box>
                        <Box>
                            <form action="" onSubmit={e => addLectureHandler(e, id, title, description, video)}>
                                <VStack spacing={'4'}>
                                    <Heading size={'md'} textTransform={'uppercase'}>Add Lectures</Heading>
                                    <Input focusBorderColor='purple.300' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <Input focusBorderColor='purple.300' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                                    <Input
                                        required

                                        accept="video/mp4"
                                        type={'file'}
                                        focusBorderColor={'purple.300'}
                                        css={{"&::file-selector-button":fileUploadCss}}
                                        onChange={changeVideoHandler}
                                    />

                                    {
                                        videoPrev &&(
                                            <video controlsList='nodownload' controls src={videoPrev}></video>
                                        )
                                    }
                                    <Button isLoading={loading} type='submit' w='full' colorScheme='purple'>Upload</Button>
                                </VStack>
                            </form>
                        </Box>
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleModalClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CourseModal;

function VideoCard({ title, description, num, lectureId, courseId, deleteLectureButtonHandler,loading }) {
    return (
        <Stack direction={['column', 'row']} my='8' borderRadius={'lg'} boxShadow={"0 0 10px rgba(107,70,193,0.5)"} justifyContent={['flex-start', 'space-between']} p={['4', '8']}>
            <Box >
                <Heading size={'sm'} >
                    {`# ${num} ${title}`}
                </Heading>
                <Text>{description}</Text>
            </Box>
            <Button isLoading={loading} color={'purple.600'} onClick={() => deleteLectureButtonHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill />
            </Button>
        </Stack>
    )
}