import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import WorkCard from './WorkCard';
import { SiteData } from '@/data/SiteData';

export default function WorkSection() {
  const { work } = SiteData;
  return (
      <Box mb={10}>
        <Heading
          as="h2"
          mb={4}
          px="2"
          shadow="text"
          display="inline-block"
        >
          Work
        </Heading>
        <Flex alignItems="center" justify="center" wrap="wrap">
          {work.map((workItem) => (
            <WorkCard cardInfo={workItem} key={workItem.title} />
          ))}
        </Flex>
      </Box>
  );
}
