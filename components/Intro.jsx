import React from 'react';
import { Center, Link, Box, Text } from '@chakra-ui/layout';
import ThreeModel from './ThreeModel';

export default function Intro() {
  return (
    <>
      <Center>
        <ThreeModel />
      </Center>
      <Center>
        <Box my={10} maxW={'380px'}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-r, green.100, green.500)"
            bgClip="text"
          >
            Hello World!
          </Text>
          <Text fontSize="lg"
          fontFamily='Open Sans'
          >
            I&apos;m a web developer with a background in 3D art and animation.
            I&apos;m currently working at{' '}
            <Link href="https://banyanlabs.io" isExternal>
              Banyan Labs
            </Link>{' '}
            as the Director of Operations.
          </Text>
        </Box>
      </Center>
    </>
  );
}
