import React, { useRef, useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

export interface GameDisplayProps {
    map: string;
}

const GameDisplay: React.FunctionComponent<GameDisplayProps> = ({
    map
}) => {
    let maxX; 
    let maxY;
    let xMargin;  
    let yMargin;

    let isActive: boolean = false; 
    let [prevMouseX, prevMouseY]: Array<number> = [0, 0];

    const handleMouseClick = (e: MouseEvent): void => {
        [maxX, maxY] = getNums(window.getComputedStyle(e.currentTarget).backgroundSize);
        [xMargin, yMargin] = [maxX / 2, maxY / 2];
    };

    const handleMouseDown = (e: MouseEvent): void => {
        isActive = true;
        e.currentTarget.style.cursor = 'grabbing';
        [prevMouseX, prevMouseY] = getCoordsFromContainer(e);
    };

    const handleMouseUp = (e: MouseEvent): void => {
        isActive = false;
        e.currentTarget.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MousEvent): void => {
        if (isActive) {
            const [x, y] = getNums(window.getComputedStyle(e.currentTarget).backgroundPosition);
            const [nextMouseX, nextMouseY] = getCoordsFromContainer(e);
            const [diffX, diffY] = [
                nextMouseX - prevMouseX, 
                nextMouseY - prevMouseY ];
            const [newX, newY] = [x + diffX, y + diffY];
            if (!isAtBoundary([newX, newY])) {
                e.currentTarget.style.backgroundPosition = 
                    `${newX}px ${newY}px`;
            }
            [prevMouseX, prevMouseY] = [nextMouseX, nextMouseY];
        }
    };

    function getCoordsFromContainer (e: MouseEvent): Array<number> {
        // TODO - might need rewrite if 'client' does not work and some sort of 
        //        in-house 'page' implementation required
        const display = e.currentTarget.getBoundingClientRect(); 
        return [e.pageX - display.left, e.pageY - display.top];
    };

    function getNums (vals: string): Array<number> {
        console.log(vals);
        const [x, y] = vals.split(' ');
        return [
            Number(x.slice(0, x.length - 2)),
            Number(y.slice(0, y.length - 2))
        ];
    };

    function isAtBoundary (pos: Array<number>): Boolean {
        const [x, y] = pos;
        return x < 0 - xMargin ||
            x > 0 || 
            y < 0 - yMargin ||
            y > 0;
    };

    return (
        <Flex 
            onClick={handleMouseClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            h='100%'
            bgImage={map}
            bgPos= '0px 0px'
            backgroundSize='auto 2000px'
            backgroundRepeat='no-repeat'
            cursor= 'grab'
            w='100%'
        >
            {/* Make bgimage draggable */}
        </Flex>
    );
}

export { GameDisplay };
