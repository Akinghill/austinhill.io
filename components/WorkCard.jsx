import React from 'react';
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/layout';

export default function WorkCard({ cardInfo }) {
  return (
    <>
      <Box
        maxW={{ base: 'lg', md: 'xl' }}
        w="full"
        mx="auto"
        bg={useColorModeValue('white', '#27272A')}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        my={4}
        transition="all 200ms ease-in-out"
        boxShadow="green"
        _hover={{
          boxShadow: 'greenHover',
        }}
      >
        <Image
          h={80}
          w="full"
          fit="cover"
          src={cardInfo.imgRef}
          alt="work screen shot"
        />
        <Box p={4}>
          <Heading
            mb={2}
            as="h3"
            color={useColorModeValue('gray.800', 'gray.50')}
            fontWeight="bold"
            fontSize="2xl"
            textTransform="uppercase"
          >
            {cardInfo.title}
          </Heading>
          <chakra.p
            fontSize="md"
            fontFamily="Open Sans"
            mb={2}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {cardInfo.text}
          </chakra.p>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={2}
            bg="#27272A"
            roundedBottom="lg"
          >
            <Link href={cardInfo.link}>
              <Button
                fontSize=""
                fontWeight="bold"
                rounded="lg"
                textTransform="uppercase"
                color="white"
                fontFamily="Open Sans"
                // bgGradient="linear(to-r, green.500, green.200)"
                bgGradient="linear(to-r, green.500 , green.700, blue.700)"
              >
                Visit Site
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
