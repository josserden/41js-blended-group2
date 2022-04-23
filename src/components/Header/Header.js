import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Modal from 'components/Modal';

function Header() {
  return (
    <Box as="header" bg="white.200" boxShadow="md" rounded="md" py={5}>
      <Container maxW="1200px">
        <Flex align="center" justify="space-between">
          <h2>Contact App</h2>
          <Modal />
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
