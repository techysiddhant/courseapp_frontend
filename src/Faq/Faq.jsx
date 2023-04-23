import { Box,Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import "./faq.css";
const FAQ = ({faq,index,toggleFAQ}) => {
    return(
        <Box color={"black"} className={"faq " + (faq.open ? 'open' : '')} key={index} margin={"15px"} padding={"15px"} bgColor={"white"} borderRadius={"4px"} boxShadow={"md"} onClick={()=>toggleFAQ(index)} >
            <Box className="faq-question" position={"relative"} fontSize={"20px"} paddingRight={"80px"} >
                {faq.question}

            </Box>
            <Box className="faq-answer" opacity={"0"} maxHeight={"0"} overflowY={"hidden"} >
                {faq.answer}
            </Box>
        </Box>
    )
}
const Faq = () => {
    const [faqs, setfaqs] = useState([
        {
          question: 'How many programmers does it take to screw in a lightbulb?',
          answer: 'None. We don\'t address hardware issues.',
          open: true
        },
        {
          question: 'Who is the most awesome person?',
          answer: 'You. The Viewer.',
          open: false
        },
        {
          question: 'How many questions does it take to make a successful FAQ Page?',
          answer: 'This many.',
          open: false
        }
      ]);
      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }
  return (
    <Box className='faqs' w="full" maxW={"768px"} margin={"0 auto"} padding={"15px"}>
        <Heading textAlign={"center"} margin={"20px 0"}>Frequently Asked Questions</Heading>
        {
            faqs.map((faq,index) => {
                return <FAQ faq={faq} index={index} toggleFAQ={toggleFAQ} />
            })
        }
    </Box>
  )
}

export default Faq