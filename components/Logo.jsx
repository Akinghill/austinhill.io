import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { SiteData } from '@/data/SiteData';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <a style={{ textDecoration: 'none' }}>
        <LogoBox>
          <Text
            as="h1"
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            letterSpacing={'wider'}
            textDecoration="none"
            bgGradient="linear(to-r, green.100, green.300)"
            bgClip="text"
            className="typewriter"
            fontSize="2xl"
          >
            {SiteData.title}
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
