import Logo from './Logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { SiteData } from '@/data/SiteData';
import { IoLogoGithub } from 'react-icons/io5';

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref>
      <Link
        style={{ margin: '0px !important' }}
        p={2}
        px={4}
        color={active ? 'green.200' : 'gray.200'}
        background={active ? 'gray.800' : 'null'}
        _target={_target}
        height={14}
        display="flex"
        alignItems="center"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <>
      <Box h="60px" />
      <Box
        position="fixed"
        top="0"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#e0e0e014')}
        style={{ backdropFilter: 'blur(10px)' }}
        zIndex={10}
        shadow="text"
        {...props}
      >
        <Container
          display="flex"
          px={4}
          maxW="3xl"
          wrap="wrap"
          align="center"
          justifyContent="space-between"
        >
          <Flex align="center" px={2} mr={5}>
            <Logo />
          </Flex>

          <Stack
            direction={{ base: 'row' }}
            display={{ base: 'flex' }}
            alignItems="center"
            justifyContent="flex-end"
          >
            {SiteData.menuItems.map((link) => (
              <LinkItem href={link.href} path={path} key={link.label} m="0">
                {link.label}
              </LinkItem>
            ))}
            <LinkItem
              _target="_blank"
              href="https://github.com/Akinghill/austinhill.io"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ margin: '0px !important' }}
            >
              <IoLogoGithub />
              Source
            </LinkItem>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
