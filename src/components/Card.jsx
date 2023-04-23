import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {BsCheck2All} from 'react-icons/bs';
import {FaRupeeSign} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <VStack maxH="900px" justifyContent={"center"} w="full" >
        <Box padding={"30px 30px"} boxShadow={"lg"} borderRadius={'5px'}  marginTop={"30px"} maxHeight={"950px"}>
        <Text  fontWeight={'semibold'} textTransform={'uppercase'} marginBottom={'20px'} bgColor={'yellow.400'} width={"180px"} borderRadius={'full'} marginLeft={"-15px"} padding={"10px"} colorScheme={'yellow'}>Codify.io Pro Pack</Text>
        <Heading display={'flex'} alignItems={'center'} fontSize={'5xl'} marginBottom={'20px'}><FaRupeeSign/> 499/month</Heading>
        <Box display={"flex"} flexDirection={"column"} gap={"6"} marginBottom={'20px'}>
            <Text fontSize={'20px'} fontWeight={'semibold'} display={"flex"} alignItems={"center"} gap={'2'}> <BsCheck2All size={"28"}  /> Unconditional 7-day money-back guarantee</Text>
            <Text  fontSize={'20px'} fontWeight={'semibold'} display={"flex"} alignItems={"center"} gap={'2'} > <BsCheck2All size={"30"} /> Cancel Subscription any time</Text>
            <Text  fontSize={'20px'} fontWeight={'semibold'} display={"flex"} alignItems={"center"} gap={'2'} > <BsCheck2All size={"30"} /> High quality project based courses</Text>
            <Text fontSize={'20px'} fontWeight={'semibold'}  display={"flex"} alignItems={"center"} gap={'2'} > <BsCheck2All size={"30"}  /> Before and after source code for all projects</Text>
            <Text  fontSize={'20px'} fontWeight={'semibold'} display={"flex"} alignItems={"center"} gap={'2'} > <BsCheck2All size={"30"} /> Exclusive access to private Discord community</Text>
            <Text  fontSize={'20px'} fontWeight={'semibold'} display={"flex"} alignItems={"center"} gap={'2'} > <BsCheck2All size={"30"} /> All future updates</Text>
        </Box>
        <Button marginTop={'40px'} size={'lg'} colorScheme={'yellow'} width={"full"} borderRadius={'full'}><Link to={"/subscribe"}>Join Now</Link></Button>
    </Box>
    </VStack>
  )
}

export default Card