import { Box, Container,Text,chakra,VisuallyHidden,Stack } from '@chakra-ui/react'
import React from 'react'

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
      rounded={'full'}
      border={'1px solid white'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'} color={'white'}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
    )

}
const Footer = () => {
  return (
    
    <Box padding={'4'} bg='blackAlpha.900' >
        <Container as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
            <Text color={'yellow.400'}>© 2022 Codify.io  All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
        </Container>

    </Box>

  )
}

export default Footer