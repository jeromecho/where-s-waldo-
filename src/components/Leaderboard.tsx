import React from 'react';
import TROPHY from '../img/trophy.png';
import { LeaderboardItem } from '../App.tsx';
import { Flex, Image, Heading, Text } from '@chakra-ui/react';

export interface LeaderboardProps {
    isActive: boolean;
    bgImg?: string;
    bgColor?: string;
    imgH: string;
    labelH: string; 
    textH: string;
    titleH: string; 
    leaderboard: Array<LeaderboardItem>;
    posVal: string;
    x: string;
    y: string;
}

const Leaderboard: React.FunctionComponent<LeaderboardProps> = ({
    isActive,
    bgImg,
    bgColor,
    imgH, 
    labelH, 
    textH, 
    titleH,
    leaderboard,
    posVal,
    x,
    y,
}) => {

    if (isActive) {
        return (
            <Flex
                align='center'
                bgImage={bgImg} 
                bgColor={bgColor} 
                borderRadius='1rem'
                flexDir='column'
                justify='center'
                left={x}
                padding='2rem'
                pos={posVal}
                top={y}
                zIndex='1'
            >
                <Flex align='center' justify='center'>
                    <Image h={imgH} src={TROPHY} />
                    <Heading as='h3'>LEADERBOARD</Heading>
                </Flex>
                <Flex align='center' justify='center'>
                    <Flex align='flex-start' flexDir='column'>
                        <Heading as='h2'>RANK</Heading>
                        {
                            leaderboard.map((player, index) => {
                                return <Text key={player.name}>{index + 1}</Text>;
                            })
                        }
                    </Flex>
                    <Flex align='flex-start' flexDir='column'>
                        <Heading as='h2'>NAME</Heading>
                        {
                            leaderboard.map((player) => {
                                return <Text key={player.name}>{player.name}</Text>;
                            })
                        }
                    </Flex>
                    <Flex align='flex-start' flexDir='column'>
                        <Heading as='h2'>TIME</Heading>
                        {
                            leaderboard.map((player) => {
                                return <Text key={player.name}>{player.time}</Text>;
                            })
                        }
                    </Flex>
                </Flex>
        </Flex> );
    } else {
        return null;
    }
}

Leaderboard.defaultProps = {
    bgImg: '',
    bgColor: '',
    posVal: 'relative',
}

export { Leaderboard };
