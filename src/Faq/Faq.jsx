import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import './faq.css';
const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <Box
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      margin={'15px'}
      padding={'15px'}
      borderRadius={'4px'}
      boxShadow={'md'}
      cursor={'pointer'}
      onClick={() => toggleFAQ(index)}
    >
      <Box
        className="faq-question"
        position={'relative'}
        fontSize={'20px'}
        paddingRight={'80px'}
      >
        {faq.question}
      </Box>
      <Box
        className="faq-answer"
        opacity={'0'}
        maxHeight={'0'}
        overflowY={'hidden'}
      >
        {faq.answer}
      </Box>
    </Box>
  );
};
const Faq = () => {
  const [faqs, setfaqs] = useState([
    {
      question: 'How much does it cost to subscribe to Codify?',
      answer:
        'Codify offers a subscription-based learning platform at a cost of 499 INR per month. This gives users unlimited access to the entire playlist of courses available on the platform, as well as upcoming playlists that will be launched in the future.',
      open: true,
    },
    {
      question: 'What is included in the subscription fee?',
      answer:
        'With a Codify subscription, users have access to all the uploaded content on various technologies, including MongoDB, HTML, CSS, JavaScript, and more. Additionally, they will have access to upcoming playlists that will be launched in the future. All of this is available for a low monthly subscription fee of 499 INR.',
      open: false,
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        'Yes, you can cancel your Codify subscription at any time. There are no long-term commitments or contracts required, so you can cancel whenever you like.',
      open: false,
    },
    {
      question:
        'Do I need any special equipment or software to access the courses on Codify?',
      answer:
        'No, you do not need any special equipment or software to access the courses on Codify. All you need is a computer or mobile device with an internet connection.',
      open: false,
    },
    {
      question: ' How long do I have access to the courses on Codify?',
      answer:
        'As long as you maintain an active subscription, you will have unlimited access to all the courses and playlists available on Codify.',
      open: false,
    },
    {
      question: 'How do I subscribe to Codify?',
      answer:
        'New content is added to Codify on a regular basis. This includes new courses on popular technologies, as well as updated playlists to keep up with the latest industry trends and best practices.',
      open: false,
    },
  ]);
  const toggleFAQ = index => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <Box
      className="faqs"
      w="full"
      maxW={'768px'}
      margin={'0 auto'}
      padding={'15px'}
    >
      <Heading textAlign={'center'} margin={'20px 0'}>
        Frequently Asked Questions
      </Heading>
      {faqs.map((faq, index) => {
        return (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        );
      })}
    </Box>
  );
};

export default Faq;
