import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@chakra-ui/react';

function Section({ children }) {
  return (
    <Box as="section" py={8}>
      <Container maxW="1200px">{children}</Container>
    </Box>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
