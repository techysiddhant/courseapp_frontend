import { Box, Button, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";
// import vg from '../assets/images/bg.png';


import introVideo from "../assets/videos/intro.mp4";
import useScrollPosition from "../useScrollPosition.js";
import Card from './Card';
import Testimonial from './Testimonial/Testimonial';
import Faq from '../Faq/Faq';
const Home = () => {
    const scrollPosition = useScrollPosition();
    const counterEl = document.querySelectorAll(".counter");

    if(scrollPosition > 200){
        counter();
    }
    function counter(){
        counterEl.forEach((el) => {
            el.innerText = "0";
            incrementCounter();
        
            function incrementCounter() {
                const targetNumber = parseInt(el.dataset.number);
                const initialNum = parseInt(el.innerText);
                const incrementNum = Math.trunc(targetNumber / 10);
                if (initialNum < targetNumber) {
                    // el.innerText = `${currentNum}+`;
                    el.innerText = `${initialNum + incrementNum} +`;
                    setTimeout(incrementCounter, 90);
                }
            }
        });
    }


  return (
    <section className="home">
        <div className="container" >
            
            <Stack direction={["column","column","column","row"]} height="100%" width={"100%"} justifyContent={['center','center']} alignItems="center" spacing={["16","16","18","16"]}>
                <VStack width={["100%","100%","100%","50%"]} alignItems={["center","center","center","flex-start"]} spacing='8'>
                    <Text fontSize={"xl"} fontWeight={"semibold"} colorScheme={"blackAlpha.700"} padding={"5px"} borderRadius={"4px"} >Codify.io</Text>
                    <Heading textAlign={["center","center","center",'left']} size={'2xl'}>Different Way to Shape Your Future</Heading>
                    <Text fontSize={'2xl'} fontFamily='cursive' textAlign={'left'}>Learn how to think like a developer and build any project you can dream of by taking action instead of just following along with tutorials.</Text>
                    <Link to="/courses">
                        <Button size={'lg'} colorScheme={'yellow'}>Explore Now</Button>
                    </Link>
                </VStack>
                <Box width={['100%','100%','100%','50%']} height={'100%'} >
                    <Image className='' boxSize={"md"} width={'100%'} height={'100%'} src={"https://images.pexels.com/photos/6347900/pexels-photo-6347900.jpeg?auto=compress&cs=tinysrgb&w=1600"} objectFit="contain" />

                </Box>
            </Stack>
        </div>
        <Box padding={'8'} bg="blackAlpha.800">

            <Stack direction={["column","column","column","row"]} className='brandsBanner' spacing={["16","16","16","2"]} color={'yellow.400'} justifyContent={'space-evenly'} marginTop='4'>

                <div className="stats-container">
                    <div className="counter" data-number="50">50+</div>
                    <Heading>No. of Courses</Heading>
                </div>
                <div className="stats-container">
                    <div className="counter" data-number="100">100+</div>
                    <Heading>Hours of Content</Heading>
                </div>
                <div className="stats-container">
                    <div className="counter" data-number="10">10+</div>
                    <Heading>Categories</Heading>
                </div>
                
            </Stack>
        </Box>
        <div className="price-container">
            <Heading textAlign={'center'} size={'2xl'} marginBottom={"40px"}>Start Learning Now</Heading>
            <Card/>
        </div>
        <div className='test-container'>
            <Testimonial/>
        </div>
        <div className="container2">
            <video  controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>

            </video>
        </div>
        <div className='faq-container'>
            
            <Faq/>
        </div>
    </section>
  )
}

export default Home