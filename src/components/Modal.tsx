import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link as RouterDOMLink 
} from 'react-router-dom';
import { Flex, Heading, Text, Link, Input, Image } from '@chakra-ui/react';
import TROPHY from '../img/trophy.png';

export interface ModalProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    setLeaderboardX: (x: string) => void;
    setLeaderboardY: (y: string) => void;
    timeText: string;
}

const Modal: React.FunctionComponent<ModalProps> = ({
    onMouseEnter,
    onMouseLeave,
    setLeaderboardX,
    setLeaderboardY,
    timeText,
}) => {

    useEffect(() => {
        setLeaderboardX('20vw');
        setLeaderboardY('62vh');
    }, []);

    return (
        <Flex
            align='center'
            borderRadius='1rem'
            bgColor='modalBg'
            flexDir='column'>
            <Heading as='h2'>CONGRATULATIONS!</Heading>
            <Flex align='center' justify='center'>
                <Flex align='flex-start' flexDir='column' justify='center'>
                    <Heading as='h3'>Time</Heading>
                    <Heading as='h3'>Name</Heading>
                </Flex>
                <Flex align='flex-start' flexDir='column' justify='center'>
                    <Text>{timeText}</Text>
                    <Input></Input>
                </Flex>
            </Flex>
            <Link as={RouterDOMLink} to='/leaderboard'
                bgGradient='linear(to-r, mainBg, gradientBlend, mainBorder)'
                borderRadius='0.8rem'
                h='3rem' 
                padding='0.5rem'
                textAlign='center'
                w='12rem'
            >
                Play Again
            </Link>
            <Flex>
                <Image 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    h='1.5rem'
                    w='1.5rem'
                    src={TROPHY} />
                <Text>LEADERBOARD</Text>
            </Flex>
        </Flex>
    );
}

export { Modal };
