import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '../../redux/store';
import { buySubscription } from '../../redux/actions/user';
import { toast } from 'react-hot-toast';
import logo from '../../assets/images/logo.png';
const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');
  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );
  const { error: courseError } = useSelector(state => state.course);

  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/razorpaykey`);
    setKey(data.key);
    dispatch(buySubscription());
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      const openPopup = () => {
        const options = {
          key,
          name: 'Course App',
          description: 'Get Access to all Courses',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'Sid the Coder at Youtube',
          },
          theme: {
            color: '#FFC800',
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      };

      openPopup();
    }
  }, [
    dispatch,
    error,
    subscriptionId,
    user.email,
    user.name,
    key,
    courseError,
  ]);
  return (
    <Container height={'100vh'} p="16">
      <Heading my="8" textAlign={'center'}>
        Welcome
      </Heading>
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg="yellow.400" p="4" css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children={`Pro Pack - Rs. 499.00 Only`}></Text>
        </Box>
        <Box p="4">
          <VStack px="8" textAlign={'center'} mt="4" spacing={'8'}>
            <Text>Join Pro Pack and Get Access to all Content.</Text>
            <Heading size={'md'}>Rs.499 Only</Heading>
          </VStack>
          <Button
            my="8"
            width={'full'}
            colorScheme="yellow"
            isLoading={loading}
            onClick={subscribeHandler}
          >
            Buy Now
          </Button>
        </Box>
        <Box bg="blackAlpha.600" p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading size={'sm'} textTransform={'uppercase'} color={'white'}>
            100% Refund at cancellation
          </Heading>
          <Text fontSize={'xs'} color={'white'}>
            *Terms and Condition apply{' '}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
