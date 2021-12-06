import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import WorkCard from './WorkCard';
import { SiteData } from '@/data/SiteData';

export default function AboutSection() {
  const { work } = SiteData;
  return (
    <Box w="full">
      <Heading
        as="h2"
        mb={4}
        px="2"
        shadow="text"
        display="inline-block"
      >
        More about me
      </Heading>
      <Text>
        {SiteData.aboutMeText}
      </Text>
    </Box>
  );
}
