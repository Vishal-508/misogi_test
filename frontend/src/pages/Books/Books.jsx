

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchBooks } from '../../features/books/booksSlice';
import { Container, Grid } from '../../styles/utils';
import BookCard from '../../components/Book/BookCard';
import SearchBar from '../../components/Common/SearchBar';
import { Link } from 'react-router-dom';
const Books = () => {
  const dispatch = useDispatch();
  const { books, status, pagination } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.auth);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    search: '',
    sort: '-1'
  });
console.log("books",books)
  useEffect(() => {
    dispatch(fetchBooks(filters));
  }, [dispatch, filters]);

  const handleSearch = (searchTerm) => {
    setFilters(prev => ({ ...prev, search: searchTerm, page: 1 }));
  };

  const handlePageChange = (newPage) => {
    setFilters(prev => ({ ...prev, page: newPage }));
  };

  return (
    <BooksContainer>
      <Container>
        <Header>
          <h1>Library Books</h1>
          <p>Browse our collection of books</p>
        </Header>

   <Toolbar>
          <SearchBar 
            placeholder="Search books..." 
            onSearch={handleSearch}
          />
          {user?.role === "1" && ( // Only show for librarians
            <Button as={Link} to="/books/add" small>
              Add New Book
            </Button>
          )}
        </Toolbar>

        {status === 'loading' ? (
          <Loading>Loading books...</Loading>
        ) : books?.length === 0 ? (
          <EmptyState>No books found</EmptyState>
        ) : (
          <>
            <Grid>
              {books?.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </Grid>
            <Pagination>
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                <PageButton
                  key={page}
                  active={page === pagination.page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PageButton>
              ))}
            </Pagination>
          </>
        )}
      </Container>
    </BooksContainer>
  );
};

// Add pagination styles
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.light};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const BooksContainer = styled.div`
  padding: 2rem 0;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;


export default Books;