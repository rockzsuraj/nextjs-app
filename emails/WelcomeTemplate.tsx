import React, { CSSProperties } from 'react';
import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome aboard!</Preview>
            <Tailwind>
                <Body className='bg-white'>
                    <Container>
                        <Text className='text-black font-bold text-3xl'>Hello {name}</Text>
                        <Link href='https://www.google.com'>www.google.com</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default WelcomeTemplate