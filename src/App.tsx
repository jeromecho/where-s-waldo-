import React from 'react';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage.tsx';
import { SelectPage } from './pages/SelectPage.tsx';
import { GamePage } from './pages/GamePage.tsx';
import { LeaderboardPage } from './pages/LeaderboardPage.tsx';
import { theme } from './styles/styles.tsx';

export interface AppProps {
    colors: {

    }
}



const App: React.FunctionComponent<AppProps> = ({

}) => {
    
    const getLeaderboard = () => {
        // TODO firebase code
        // Firebase should return sorted
        return [
            {
                name: 'Deez Nuts',
                time: 32.341,
            },
            {
                name: 'Margaret',
                time: 132.31,
            },
            {
                name: 'Dostoevsky',
                time: 35.341,
            },
            {
                name: 'Watari Watari',
                time: 17.341,
            }, 
        ];
    };

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/select' element={<SelectPage />} />
                    <Route path='/game/:map' element={<GamePage />} />
                    <Route path='/leaderboard' element={<LeaderboardPage />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export { App };
