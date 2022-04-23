import React from 'react';
import { Box, Text, Link, IconButton, Stack } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { formatDate } from 'helpers/formatDate';

function Contact({ name, email, number, createdAt, onDelete, id }) {
  return (
    <Box
      p={4}
      display={{ md: 'flex' }}
      maxWidth="32rem"
      borderWidth={1}
      rounded="lg"
      margin={2}
      pos="relative"
    >
      <Stack
        align={{ base: 'center', md: 'stretch' }}
        textAlign={{ base: 'center', md: 'left' }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {name}
        </Text>
        <Link
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="mailto:"
        >
          {email}
        </Link>
        <Link
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="tel:"
        >
          {number}
        </Link>
        <Text my={2} color="gray.500">
          {formatDate(createdAt)}
        </Text>
        <IconButton
          aria-label="Search database"
          pos="absolute"
          top="0"
          right="2"
          size="sm"
          variant={'ghost'}
          onClick={() => onDelete(id)}
          icon={<CloseIcon />}
        />
      </Stack>
    </Box>
  );
}

export default Contact;
