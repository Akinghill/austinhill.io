import ContentLayout from '@/components/layouts/Content';
import { Box, Avatar, Center, Text } from '@chakra-ui/react';
import {
  Container,
  Flex,
  Link,
} from '@chakra-ui/layout';
import ThreeModel from '@/components/ThreeModel';
import WorkSection from '@/components/WorkSection';
import Intro from '@/components/Intro';
import AboutSection from './about';
import Head from 'next/head';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Austin Hill.io</title>
      </Head>
      <ContentLayout>
        <Container maxW='3xl'>
          <WorkSection />
          {/* <AboutSection /> */}
        </Container>
      </ContentLayout>
    </>
  );
}
