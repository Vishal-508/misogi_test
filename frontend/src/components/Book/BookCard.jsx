import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../common/UI';
import { useState } from 'react';
// https://images.unsplash.com/photo-1512820790803-83ca734da794?fit=crop&w=200&h=300&q=80
const BookCard = ({ book }) => {
     const [imgSrc, setImgSrc] = useState(book?.image || 'https://source.unsplash.com/300x400/?books');
    //  https://source.unsplash.com/300x400/?books
  return (
    <Card>
      <ImageContainer>
           <Image
      src={imgSrc}
      alt={book?.title}
      width={200}
      height={300}
      onError={() =>
        setImgSrc('https://images.unsplash.com/photo-1512820790803-83ca734da794?fit=crop&w=200&h=300&q=80')
      }
    />
        {/* <Image src={book.image || '/default-book.jpg'} alt={book.title} /> */}
      </ImageContainer>
      <Content>
        <Title to={`/books/${book._id}`}>{book.title}</Title>
        <Author>{book.author}</Author>
        <Availability>
          Available: {book.availableCopies}/{book.copies}
        </Availability>
        <Button as={Link} to={`/books/${book._id}`} small fullWidth>
          View Details
        </Button>
      </Content>
    </Card>
  );
};

const Card = styled.article`
  background: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  display: block;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Author = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Availability = styled.p`
  color: ${({ theme }) => theme.colors.successDark};
  font-weight: 500;
  margin-bottom: 1rem;
`;

export default BookCard;