import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom';
import videoSrc from '../../assets/videos/intro.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri';
import tandc from '../../assets/docs/termsAndCondition';
const Founder = ()=>(
    <Stack direction={["column","row"]} spacing={['4','16']} padding={'8'}>
        <VStack>
            <Avatar boxSize={["40",'48']} src='https://avatars.githubusercontent.com/u/68164152?v=4' />
            <Text opacity={'0.7'}>Co-Founder</Text>
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading size={['md','xl']}>Siddhant Jain</Heading>
            <Text textAlign={['center','left']}>Hi,I'm a Full Stack Developer and Passionate Teacher.
                Our Mission is to provide quality content at reasonable price.
            </Text>

        </VStack>
    </Stack>
);
const VideoPlayer = ()=>(
    <Box>
        <video src={videoSrc} autoPlay muted controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback>
        </video>
    </Box>
);
const TandC = ({termsAndCondition})=>(
    <Box>
        <Heading size={'md'} textAlign={['center','left']} my='4'>Terms and Conditions</Heading>
        <Box h={'sm'} p='4' overflowY={'scroll'}>
            <Text textAlign={['center','left']} letterSpacing={'widest'} fontFamily={'heading'}>{termsAndCondition}</Text>
            <Heading my='4' size={'xs'}>Refund Only applicable for cancellation with in 7 days.</Heading>
        </Box>
    </Box>
)
const About = () => {
  return (
    <Container maxW={"container.lg"} padding={'16'} boxShadow={'lg'} > 
        <Heading textAlign={["center",'left']}>About Us</Heading>
        <Founder />
        <Stack m={'8'} direction={['column','row']} alignItems={'center'}>
            <Text fontFamily={"cursive"} m={'8'} textAlign={['center','left']}>
                We are a video streaming platform with some premium courses available only for premium users.
            </Text>
            <Link to="/subscribe">
                <Button variant={'ghost'} colorScheme='yellow'>Checkout Our Plan</Button>
            </Link>
        </Stack>
        <VideoPlayer />
        <TandC termsAndCondition={tandc} />
        <HStack my='4' padding={'4'} >
            <RiSecurePaymentFill/>
            <Heading size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'}>Payment is secured by Razorpay</Heading>
        </HStack>
    </Container>
  )
}

export default About