import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import WorkCard from './WorkCard';
import { SiteData } from '@/data/SiteData';

export default function AboutSection() {
  const { work } = SiteData;
  return (
    <Box w="full" px="2" c>
      <Heading as="h2" mb={4} shadow="text" display="inline-block">
        More about me
      </Heading>
      <Text fontSize="lg">{SiteData.aboutMeText}</Text>
    </Box>
  );
}
