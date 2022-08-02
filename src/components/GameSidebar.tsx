import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Item } from '../pages/GamePage.tsx';
import { Flex, Divider, Image, Button, Heading, Text, Link } from '@chakra-ui/react';
import { Footer } from '../components/Footer.tsx';
import TIMER from '../img/timer.png';
import TROPHY from '../img/trophy.png';
import MAGNIFYING_GLASS from '../img/magnifying-glass.webp';

export interface GameSidebarProps {
    items: Array<Item>;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const GameSidebar: React.FunctionComponent<GameSidebarProps> = ({
    items,
    onMouseEnter,
    onMouseLeave,
}) => {
    // TODO - to use
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 400px)'
    });
    const [ time, setTime ] = useState<number>(0);

    useEffect(() => {
        const updateInterval = 10;
        const intervalId = setInterval(() => {
            setTime(prevTime => Math.floor(
                1000 * 
                (prevTime + (0.001 * updateInterval)))
                / 1000
            );
        }, updateInterval);

        return () => {
            removeInterval(intervalId);
        }
    }, []);

    const prettifyTime = (time: number): string => {
        return (
            (Math.floor(time / 3600)).toString() +
            ':' + 
            (Math.floor(time / 60)).toString() +
            ':' +
            ((Math.floor((time % 60) * 10000)) / 10000).toString()
        );
    };

    return (
        <Flex 
            bgColor='mainBg'
            boxShadow='dark-lg'
            flexDir='column'
            h='100%'
            minW='20rem'
            w='20%'
            pos='fixed'
        >
            <Heading as='h1'>I SPY</Heading>
            <Divider orientation='horizontal' />
            <Flex flexDir='column'>
                <Flex flexDir='column'>
                    <Image 
                    h='1rem'
                    src={TIMER} 
                    w='1rem'/>
                    <Image 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    h='1.5rem'
                    src={TROPHY}
                    w='1.5rem'/>
                </Flex>
                <Flex flexDir='column'>
                    <Text>{
                        prettifyTime(time)
                    }</Text>
                    <Text>LEADERBOARD</Text>
                </Flex>
            </Flex>
            <Divider orientation='horizontal' />
            <Flex 
                flexDir='column'>
                <h2>I Spy:</h2>
                <Flex flexDir='column'>
                    {
                        items.map((item) => {
                            return (
                                <Flex key={item.name}>
                                    <Image
                                        h='1rem'
                                        src={MAGNIFYING_GLASS}
                                        w='1rem'/>
                                    <Text>{item.name}</Text>
                                </Flex>
                            );
                        })
                    }
                </Flex>
            </Flex>
            <Flex 
                bottom='2rem'
                h='5rem'
                flexDir='column'
                mb='1rem'
                mt='auto'
            >
                <Footer />
                <Text fontSize='0.5rem'>Thank you Walter Wick for making my childhood curious & 
                    imaginative</Text>
            </Flex>
        </Flex>
    );
}

export { GameSidebar };
