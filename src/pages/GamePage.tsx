import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { GameSidebar } from '../components/GameSidebar.tsx';
import { GameDisplay } from '../components/GameDisplay.tsx';
import { Leaderboard } from '../components/Leaderboard.tsx';
import { LeaderboardItem } from '../App.tsx';
import { Overlay } from '../components/Overlay.tsx';
import MAP1 from '../img/MAP1.jpeg';
import MAP2 from '../img/MAP2.jpeg';
import MAP3 from '../img/MAP3.png';
import MAP4 from '../img/MAP4.webp';
import MAP5 from '../img/MAP5.jpeg';
import MAP6 from '../img/MAP6.jpeg';

export interface GamePageProps {
    leaderboard: Array<LeaderboardItem>;
}

export interface Item {
    name: string; 
    isFound: boolean;
}

const GamePage: React.FunctionComponent<GamePageProps> = ({
    leaderboard
}) => {
    const { map } = useParams();
    const [ isLeaderboardActive, setIsLeaderboardActive ] = useState<boolean>(false);
    const [ isGameOver, setIsGameOver ] = useState<boolean>(false);
    const [ timeText, setTimeText ] = useState<string>('0:4:12:FAKE');
    const [ leaderboardX, setLeaderboardX ] = useState<string>('100px');
    const [ leaderboardY, setLeaderboardY ] = useState<string>('50px');

    const getMap = () => {
        switch (map) {
            case 'MAP1': 
                return MAP1;
            case 'MAP2': 
                return MAP2;
            case 'MAP3': 
                return MAP3;
            case 'MAP4': 
                return MAP4;
            case 'MAP5': 
                return MAP5;
            case 'MAP6': 
                return MAP6;
            default:
                return 'ERROR: Unhandled Case'
        }
    };

    const getItems = () => {
        // TODO implement firebase logic - also include item positions relative 
        // to image
        return [
            {
                name: 'A white sportscar',
                isFound: false,
            },
            {
                name: 'A cat on a van',
                isFound: false,
            },
            {
                name: 'A blond lady in a white car',
                isFound: false,
            },
            {
                name: `One letter 'P'`,
                isFound: false,
            },
        ];
    };


    const handleMouseEnter = (): void => {
        setIsLeaderboardActive(true);
        console.log('activated')
    };

    const handleMouseLeave = (): void => {
        setIsLeaderboardActive(false);
    };

    return (
        <Flex h='100vh'>
            <GameSidebar 
                items={getItems()}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            {isGameOver ?
            <GameDisplay
                map={getMap()}
            /> : 
            <GameDisplay
                map={getMap()}
            />
            }
            <Leaderboard 
                isActive={isLeaderboardActive}
                bgImg='linear-gradient(to bottom, #EEAB5D, #B14623)'
                imgH='3rem'
                labelH='1rem'
                textH='0.9rem'
                leaderboard={leaderboard}
                posVal='fixed'
                x={leaderboardX}
                y={leaderboardY}
            />
            {isGameOver ? 
            <Overlay 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                setLeaderboardX={setLeaderboardX}
                setLeaderboardY={setLeaderboardY}
                timeText={timeText} 
            /> : null
           }
        </Flex>
    );
}

export { GamePage };
