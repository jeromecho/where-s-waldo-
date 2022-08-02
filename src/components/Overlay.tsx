import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Modal } from '../components/Modal.tsx';

export interface OverlayProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    setLeaderboardX: (x: string) => void;
    setLeaderboardY: (y: string) => void;
    timeText: string;
}

const Overlay: React.FunctionComponent<OverlayProps> = ({
    onMouseEnter,
    onMouseLeave,
    setLeaderboardX,
    setLeaderboardY,
    timeText,
}) => {

    return (
        <Flex
            align='center'
            bgImage='linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))'
            h='100%'
            justify='center'
            pos='fixed'
            w='100%'> 
            <Modal 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                setLeaderboardX={setLeaderboardX}
                setLeaderboardY={setLeaderboardY}
                timeText={timeText}
            />
        </Flex>
    );
}

export { Overlay };
