import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper';

// import img from '../../assets/images/img.png';
import './testimonial.css';
import { Box, Image, Text } from '@chakra-ui/react';
const Testimonial = () => {
  const widthSize = window.matchMedia('(max-width: 1000px)');

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
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box className="swiper-client-msg" boxShadow={'md'}>
            <Text color={'black'}>
              {' '}
              I've been using Codify for a few weeks now and I must say, it's
              been a great experience. The subscription is affordable and
              provides access to a plethora of technologies. The quality of
              content is great and it's perfect for someone like me who likes to
              learn at their own pace.
            </Text>
          </Box>
          <Box
            className="swiper-client-data"
            display={'grid'}
            gridTemplateColumns={'repeat(2,1fr)'}
          >
            <figure>
              <Image
                src={
                  'https://images.pexels.com/photos/3777567/pexels-photo-3777567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              />
            </figure>
            <Box className="client-data-details">
              <Text fontWeight={'bold'}>UMAR FARUQUE ALI</Text>
              <Text>Avid Photographer | Communication</Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="swiper-client-msg" boxShadow={'md'}>
            <Text color={'black'}>
              I've been using Codify to learn HTML, CSS, and JavaScript and I'm
              really impressed with the platform. The subscription is extremely
              affordable and gives me access to all the content I need to learn
              these technologies. The instructors are great and the videos are
              very easy to understand.
            </Text>
          </Box>
          <Box
            display={'grid'}
            className="swiper-client-data"
            gridTemplateColumns={'repeat(2,1fr)'}
          >
            <figure>
              <Image
                src={
                  'https://images.pexels.com/photos/3777567/pexels-photo-3777567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              />
            </figure>
            <Box>
              <Text fontWeight={'bold'}>Ajay Prasad</Text>
              <Text>MERN Developer | Reactjs</Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="swiper-client-msg" boxShadow={'md'}>
            <Text color={'black'}>
              Codify is an excellent edtech platform for anyone looking to learn
              new technologies. The subscription is very affordable and provides
              access to a wide range of content. I especially appreciate the
              fact that I can cancel anytime if I'm not happy with the platform.
            </Text>
          </Box>
          <Box
            display={'grid'}
            className="swiper-client-data"
            gridTemplateColumns={'repeat(2,1fr)'}
          >
            <figure>
              <Image
                src={
                  'https://images.pexels.com/photos/3777567/pexels-photo-3777567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              />
            </figure>
            <Box>
              <Text fontWeight={'bold'}>Pratham Pandey</Text>
              <Text>Coder | Tech Enthusiast</Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="swiper-client-msg" boxShadow={'md'}>
            <Text color={'black'}>
              I've been using Codify for a month now and I'm really impressed
              with the platform. The subscription is very affordable and
              provides access to a lot of technologies. The quality of the
              videos is great and the instructors are very knowledgeable.
            </Text>
          </Box>
          <Box
            display={'grid'}
            className="swiper-client-data"
            gridTemplateColumns={'repeat(2,1fr)'}
          >
            <figure>
              <Image
                src={
                  'https://images.pexels.com/photos/3777567/pexels-photo-3777567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              />
            </figure>
            <Box>
              <Text fontWeight={'bold'}>Pravesh</Text>
              <Text>Student | web developer</Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="swiper-client-msg" boxShadow={'md'}>
            <Text color={'black'}>
              Codify is an amazing edtech platform for anyone who wants to learn
              new technologies. The subscription is very affordable and provides
              access to a lot of content. I really appreciate the fact that they
              offer new playlists regularly which keeps me up-to-date with the
              latest technologies.
            </Text>
          </Box>
          <Box
            display={'grid'}
            className="swiper-client-data"
            gridTemplateColumns={'repeat(2,1fr)'}
          >
            <figure>
              <Image
                src={
                  'https://images.pexels.com/photos/3777567/pexels-photo-3777567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              />
            </figure>
            <Box>
              <Text fontWeight={'bold'}>Shweta Rathore</Text>
              <Text>Student | B.Tech</Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="swiper-client-msg" boxShadow={'md'}>
            <Text color={'black'}>
              I've been using Codify for a few months now and I have to say,
              it's been a great experience. The subscription is very affordable
              and gives me access to a lot of technologies. The videos are very
              informative and the instructors are great. I would definitely
              recommend this platform to anyone looking to learn new skills.
            </Text>
          </Box>
          <Box
            display={'grid'}
            className="swiper-client-data"
            gridTemplateColumns={'repeat(2,1fr)'}
          >
            <figure>
              <Image
                src={
                  'https://images.pexels.com/photos/3777567/pexels-photo-3777567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              />
            </figure>
            <Box>
              <Text fontWeight={'bold'}>Alok Verma</Text>
              <Text>Coder | Student</Text>
            </Box>
          </Box>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Box className="swiper-client-msg" boxShadow={'md'}>
            <Text color={'black'}>
              Calvin: You know sometimes when I'm talking, my words can't keep
              up with my thoughts... I wonder why we think faster than we speak.
              Hobbes: Probably so we can think twice.
            </Text>
          </Box>
          <Box
            display={'grid'}
            className="swiper-client-data"
            gridTemplateColumns={'repeat(2,1fr)'}
          >
            <figure>
              <Image src={img} />
            </figure>
            <Box>
              <Text fontWeight={'bold'}>Siddhant Jain</Text>
              <Text>Coder | Tech Enthusiast</Text>
            </Box>
          </Box>
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Testimonial;
