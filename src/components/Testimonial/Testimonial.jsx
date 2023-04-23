import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination,Autoplay } from "swiper";

import img from "../../assets/images/img.png";
import './testimonial.css';
import { Box, Image, Text } from '@chakra-ui/react';
const Testimonial = () => {
    const widthSize = window.matchMedia("(max-width: 1000px)");
   
  return (
    <>
        <Swiper
        slidesPerView={widthSize.matches ? 1 : 2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Box className="swiper-client-msg" boxShadow={'md'}>
            <Text color={"black"}>Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.</Text>
            </Box>
            <Box className="swiper-client-data" display={'grid'}  gridTemplateColumns={'repeat(2,1fr)'}>
            <figure>
            <Image src={img}  />
            </figure>
            <Box className="client-data-details">
              <Text  fontWeight={'bold'} >Siddhant Jain</Text>
              <Text>Coder | Tech Enthusiast</Text>
            </Box>
          </Box>

        </SwiperSlide>
        <SwiperSlide>
            <Box className='swiper-client-msg'  boxShadow={'md'} >
                <Text color={"black"}>
                Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
                </Text>
            </Box>
            <Box display={'grid'} className="swiper-client-data" gridTemplateColumns={'repeat(2,1fr)'} >
                <figure>
                    <Image src={img}  />
                </figure>
                <Box >
                    <Text  fontWeight={'bold'} >Siddhant Jain</Text>
                    <Text>Coder | Tech Enthusiast</Text>
                </Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box className='swiper-client-msg'  boxShadow={'md'} >
                <Text color={"black"}>
                Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
                </Text>
            </Box>
            <Box display={'grid'} className="swiper-client-data" gridTemplateColumns={'repeat(2,1fr)'} >
                <figure>
                    <Image src={img}  />
                </figure>
                <Box >
                    <Text  fontWeight={'bold'} >Siddhant Jain</Text>
                    <Text>Coder | Tech Enthusiast</Text>
                </Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box className='swiper-client-msg'  boxShadow={'md'} >
                <Text color={"black"}>
                Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
                </Text>
            </Box>
            <Box display={'grid'} className="swiper-client-data" gridTemplateColumns={'repeat(2,1fr)'} >
                <figure>
                    <Image src={img}  />
                </figure>
                <Box >
                    <Text  fontWeight={'bold'} >Siddhant Jain</Text>
                    <Text>Coder | Tech Enthusiast</Text>
                </Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box className='swiper-client-msg'  boxShadow={'md'} >
                <Text color={"black"}>
                Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
                </Text>
            </Box>
            <Box display={'grid'} className="swiper-client-data" gridTemplateColumns={'repeat(2,1fr)'} >
                <figure>
                    <Image src={img}  />
                </figure>
                <Box >
                    <Text  fontWeight={'bold'} >Siddhant Jain</Text>
                    <Text>Coder | Tech Enthusiast</Text>
                </Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box className='swiper-client-msg'  boxShadow={'md'} >
                <Text color={"black"}>
                Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
                </Text>
            </Box>
            <Box display={'grid'} className="swiper-client-data" gridTemplateColumns={'repeat(2,1fr)'} >
                <figure>
                    <Image src={img}  />
                </figure>
                <Box >
                    <Text  fontWeight={'bold'} >Siddhant Jain</Text>
                    <Text>Coder | Tech Enthusiast</Text>
                </Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box className='swiper-client-msg'  boxShadow={'md'} >
                <Text color={"black"}>
                Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
                </Text>
            </Box>
            <Box display={'grid'} className="swiper-client-data" gridTemplateColumns={'repeat(2,1fr)'} >
                <figure>
                    <Image src={img}  />
                </figure>
                <Box >
                    <Text  fontWeight={'bold'} >Siddhant Jain</Text>
                    <Text>Coder | Tech Enthusiast</Text>
                </Box>
            </Box>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    
    </>
  )
}

export default Testimonial