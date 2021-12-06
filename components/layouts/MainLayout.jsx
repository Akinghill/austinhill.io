import { Box } from '@chakra-ui/react';
import React from 'react';
import Intro from '../Intro';
import Navbar from '../Navbar';

export default function MainLayout({ children, router }) {
  return (
    <>
      <Navbar path={router.asPath} />
      <Box>
        <Intro />
        {children}
      </Box>
    </>
  );
}
