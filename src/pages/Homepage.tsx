import React from 'react';
import { 
    BrowserRouter as Router, Routes, Route, Link as RouterDOMLink 
} from 'react-router-dom';
import { Flex, Image, Button, Heading, Text, Link } from '@chakra-ui/react';
import { Footer } from '../components/Footer.tsx'
import LANDINGIMAGE from '../img/LANDINGPAGE.jpeg';
import GITHUBLOGO from '../img/github.png';

export interface HomepageProps {

}

const Homepage: React.FunctionComponent<HomepageProps> = ({

}) => {
    return (
        <Flex 
            align='center'
            height='100vh' 
            bg='mainBorder'
            bgColor='mainBg'
            border='5px'
            borderColor='mainBorder'
            borderStyle='solid'
            flexDir='column'
        >
            <Flex 
                align='center'
                height='30%'
                flexDir='column'
            >
                <Heading as='h1'>I SPY</Heading>
                <Text>An Exciting Journey into Your Childhood Imagination</Text>
                <Link
                    as={RouterDOMLink} 
                    to ='/select'
                    border='1px'
                    borderColor='mainBorder'
                    borderStyle='solid'
                    borderRadius='10px'
                >
                    ENTER
                </Link>
            </Flex>
            <Flex align='center' justify='center' height='50%'>
                <Image src={LANDINGIMAGE} height='50vw' maxHeight='100%' width='100%' />
            </Flex>
            <Footer />
        </Flex>
    );
}

export { Homepage };
