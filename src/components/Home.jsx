import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";
import vg from '../assets/images/bg.png';

import {CgGoogle, CgYoutube} from 'react-icons/cg';
import {SiCoursera, SiUdemy} from 'react-icons/si';
import {DiAws} from "react-icons/di";
import introVideo from "../assets/videos/intro.mp4";

const Home = () => {
  return (
    <section className="home">
        <div className="container">
            <Stack direction={["column","row"]} height="100%" justifyContent={["center","space-between"]} alignItems="center" spacing={["16","56"]}>
                <VStack width={"full"} alignItems={["center","flex-end"]} spacing='8'>
                    <Heading textAlign={["center",'left']} size={'2xl'}>LEARN FROM THE EXPERTS</Heading>
                    <Text fontSize={'2xl'} fontFamily='cursive'>Find Valueable Content At Reasonable Price</Text>
                    <Link to="/courses">
                        <Button size={'lg'} colorScheme={'yellow'}>Explore Now</Button>
                    </Link>
                </VStack>

                <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain" />
            </Stack>
        </div>
        <Box padding={'8'} bg="blackAlpha.800">
            <Heading textAlign={"center"} fontFamily="body" color={'yellow.400'} >
                OUR BRANDS
            </Heading>
            <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop='4'>
                <CgGoogle/>
                <CgYoutube/>
                <SiCoursera/>
                <SiUdemy />
                <DiAws/>
            </HStack>
        </Box>
        <div className="container2">
            <video  controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>

            </video>
        </div>
    </section>
  )
}

export default Home