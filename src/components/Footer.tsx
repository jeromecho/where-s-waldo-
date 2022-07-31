import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import GITHUBLOGO from '../img/github.png';

export interface FooterProps {

}

const Footer: React.FunctionComponent<FooterProps> = ({

}) => {

    return (
        <Flex minH='10%' h='fit-content'>
            <Text>Lovingly crafted by Cho Industries</Text>
            <Link
                bgImage={GITHUBLOGO}
                bgPosition='center'
                bgRepeat='no-repeat'
                bgSize='contain'
                height='1.6rem'
                href='https://www.github.com/jeromecho'
                width='1.6rem'
            />
        </Flex>
    );
}

export { Footer };
