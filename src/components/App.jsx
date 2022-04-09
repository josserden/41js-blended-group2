import { useFetch } from 'use-http';
import { Container } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

export const App = () => {
  const {
    isLoading,
    data = [],
    error,
  } = useFetch(
    'https://624dade777abd9e37c7c8930.mockapi.io/comments?page=1&limit=10',
    [],
  );

  return (
    <Container maxW="sm">
      <Text as="h1" fontSize="4xl">
        Better Comments
      </Text>

      {isLoading && <h2>Loading ...</h2>}

      {error && (
        <h3>{`There is a problem fetching the post data - ${error}`}</h3>
      )}

      <ul>{console.log(data)}</ul>
    </Container>
  );
};
