import { Container } from './Gallery.styled';

export function Gallery({ items }) {
  return (
    <Container>
      <ul>
        {items.map(({ createdAt, content, author, avatar, id }) => (
          <li key={id}>
            <p>Create Data: {createdAt}</p>
            <p>Review: {content}</p>
            <p>Author Name: {author}</p>
            <img src={avatar} />
          </li>
        ))}
      </ul>
      ;
    </Container>
  );
}
