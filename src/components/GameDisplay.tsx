import React, { useRef, useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

export interface GameDisplayProps {
    map: string;
}

const GameDisplay: React.FunctionComponent<GameDisplayProps> = ({
    map
}) => {
    const [dummy, setDummy] = useState<string>('');
    const aspectRatio: number = getAspectRatio();
    const bgH: number = 1600;
    const bgW: number = bgH * aspectRatio;
    const display = useRef<HTMLDivElement | null>(null);
    let xMargin: number;  
    let yMargin: number;
    let displayW: number;
    let displayH: number;

    let isActive: boolean = false; 
    let [prevMouseX, prevMouseY]: Array<number> = [0, 0];

    // Force re-render on mount to get ref
    useEffect(() => {
        setDummy('dummy');
    });

    window.addEventListener('resize', updateDisplayDimensions);

    const handleMouseDown = (e: MouseEvent): void => {
        configureMarginsFromDisplayDimensions(e);
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
        const results = [];
        const arr = vals.split(' ');

        for (let val of arr) { 
            results.push(
                Number(val.slice(0, val.length - 2))
            );
        }
        return results;
    };

    function isAtBoundary (pos: Array<number>): Boolean {
        const [x, y] = pos;
        return x < 0 - xMargin ||
            x > 0 || 
            y < 0 - yMargin ||
            y > 0;
    };

    function getAspectRatio(): number {
        const bgImg = new Image();
        bgImg.src = map;
        return bgImg.naturalWidth / bgImg.naturalHeight;
    }

    function configureMarginsFromDisplayDimensions(e: MouseEvent): void {
        updateDisplayDimensions();
        [xMargin, yMargin] = [bgW - displayW, bgH - displayH];
    }

    function updateDisplayDimensions(): void {
        if (display.current) {
            [ displayW ] = getNums(window.getComputedStyle(display.current).width);
            [ displayH ] = getNums(window.getComputedStyle(display.current).height);
        }
    }

    return (
        <Flex 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            h='100%'
            bgImage={map}
            bgPos= '0px 0px'
            backgroundSize={`${bgW}px ${bgH}px`}
            backgroundRepeat='no-repeat'
            cursor= 'grab'
            ref={display}
            w='100%'
        >
            {/* Make bgimage draggable */}
        </Flex>
    );
}

export { GameDisplay };
