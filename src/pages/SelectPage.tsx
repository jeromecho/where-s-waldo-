import React from 'react';
import { Flex, Heading, Text, Image, Link } from '@chakra-ui/react';
import {
    BrowserRouter as Router, Routes, Route, Link as RouterDOMLink 
} from 'react-router-dom';
import { Footer } from '../components/Footer.tsx';
import MAP1 from '../img/MAP1.jpeg';
import MAP2 from '../img/MAP2.jpeg';
import MAP3 from '../img/MAP3.png';
import MAP4 from '../img/MAP4.webp';
import MAP5 from '../img/MAP5.jpeg';
import MAP6 from '../img/MAP6.jpeg';

export interface SelectPageProps {

}

const SelectPage: React.FunctionComponent<SelectPageProps> = ({

}) => {
    const getMapName = (str) => {
        const re = /MAP./;
        return str.match(re)[0];
    };

    return (
        <Flex
            align='center'
            bg='mainBorder'
            bgColor='mainBg'
            border='5px'
            borderColor='mainBorder'
            borderStyle='solid'
            flexDir='column'
            h='fit-content'
            minH='100vh'
            justify='center'
        >
            <Flex 
                align='center'
                height='20%'
                flexDir='column'
            >
                <Heading as='h1'>I SPY</Heading>
                <Text>Pick your map.</Text>
            </Flex>
            <Flex height='70%' h='fit-content' justify='center' maxW='200rem' wrap='wrap' width='80vw'>
                <Link
					as={RouterDOMLink}
                    to={`/game/${getMapName(MAP1)}`}
                    boxSize='20vw'
                    m='2rem'
                    maxH='20rem'
                    maxW='20rem'
                    minH='20rem'
                    minW='20rem'
                    bgImage={MAP1}
                    bgPosition='center'
                    bgRepeat='no-repeat' 
					bgSize='200%'
                />
                <Link
					as={RouterDOMLink}
                    to={`/game/${getMapName(MAP2)}`}
                    boxSize='20vw'
                    m='2rem'
                    maxH='15rem'
                    maxW='15rem'
                    minH='20rem'
                    minW='20rem' 
                    bgImage={MAP2}
                    bgPosition='center'
                    bgRepeat='no-repeat' 
					bgSize='200%' />
                <Link
					as={RouterDOMLink}
                    to={`/game/${getMapName(MAP3)}`}
                    boxSize='20vw'
                    m='2rem'
                    maxH='15rem'
                    maxW='15rem'
                    minH='20rem'
                    minW='20rem' 
                    bgImage={MAP3}
                    bgPosition='center'
                    bgRepeat='no-repeat' 
					bgSize='200%' />
                <Link
					as={RouterDOMLink}
                    to={`/game/${getMapName(MAP4)}`}
                    boxSize='20vw'
                    m='2rem'
                    maxH='15rem'
                    maxW='15rem'
                    minH='20rem'
                    minW='20rem'
                    bgImage={MAP4}
                    bgPosition='center'
                    bgRepeat='no-repeat' 
					bgSize='200%' />
                <Link
					as={RouterDOMLink}
                    to={`/game/${getMapName(MAP5)}`}
                    boxSize='20vw'
                    m='2rem'
                    maxH='15rem'
                    maxW='15rem'
                    minH='20rem'
                    minW='20rem' 
                    bgImage={MAP5}
                    bgPosition='center'
                    bgRepeat='no-repeat' 
					bgSize='200%' />
                <Link
					as={RouterDOMLink}
                    to={`/game/${getMapName(MAP6)}`}
                    boxSize='20vw'
                    m='2rem'
                    maxH='15rem'
                    maxW='15rem'
                    minH='20rem'
                    minW='20rem' 
                    bgImage={MAP6}
                    bgPosition='center'
                    bgRepeat='no-repeat' 
					bgSize='200%' />
            </Flex>
            <Footer />
        </Flex>
    );
}

export { SelectPage };
