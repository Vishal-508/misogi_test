// import { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { fetchBookById } from '../../features/books/booksSlice';
// import { createReservation } from '../../features/reservations/reservationsSlice';
// import { Container } from '../../styles/utils';
// // import { Button } from '../../components/UI/Button';df
// import ReservationForm from '../../components/Reservations/ReservationForm';

// const BookDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { book, status } = useSelector((state) => state.books);
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(fetchBookById(id));
//   }, [dispatch, id]);

//   const handleReserve = (reservationData) => {
//     dispatch(createReservation(reservationData))
//       .unwrap()
//       .then(() => {
//         navigate('/reservations');
//       });
//   };

//   if (status === 'loading') {
//     return (
//       <Container>
//         <Loading>Loading book details...</Loading>
//       </Container>
//     );
//   }

//   if (!book) {
//     return (
//       <Container>
//         <NotFound>Book not found</NotFound>
//       </Container>
//     );
//   }

//   return (
//     <DetailsContainer>
//       <Container>
//         <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        
//         <BookInfo>
//           <BookImage src={book.image || '/default-book.jpg'} alt={book.title} />
          
//           <Details>
//             <Title>{book.title}</Title>
//             <Author>by {book.author}</Author>
//             <Description>{book.description}</Description>
            
//             <Meta>
//               <MetaItem>
//                 <strong>Available Copies:</strong> {book.availableCopies}/{book.totalCopies}
//               </MetaItem>
//               <MetaItem>
//                 <strong>ISBN:</strong> {book.isbn}
//               </MetaItem>
//               <MetaItem>
//                 <strong>Published:</strong> {book.publishedYear}
//               </MetaItem>
//               <MetaItem>
//                 <strong>Genre:</strong> {book.genre}
//               </MetaItem>
//             </Meta>
//           </Details>
//         </BookInfo>
        
//         {user && !user.isLibrarian && (
//           <ReservationSection>
//             <h3>Reserve this book</h3>
//             <ReservationForm 
//               type="book" 
//               onSubmit={handleReserve} 
//             />
//           </ReservationSection>
//         )}
//       </Container>
//     </DetailsContainer>
//   );
// };

// const DetailsContainer = styled.div`
//   padding: 2rem 0;
// `;

// const Loading = styled.div`
//   text-align: center;
//   padding: 2rem;
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const NotFound = styled.div`
//   text-align: center;
//   padding: 2rem;
//   color: ${({ theme }) => theme.colors.danger};
// `;

// const BackButton = styled.button`
//   background: none;
//   border: none;
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: 1rem;
//   cursor: pointer;
//   margin-bottom: 1rem;
//   padding: 0.5rem 0;
  
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const BookInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   margin-bottom: 3rem;

//   @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
//     flex-direction: row;
//   }
// `;

// const BookImage = styled.img`
//   width: 100%;
//   max-width: 300px;
//   height: auto;
//   border-radius: ${({ theme }) => theme.radii.md};
//   box-shadow: ${({ theme }) => theme.shadows.md};
//   align-self: center;

//   @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
//     align-self: flex-start;
//   }
// `;

// const Details = styled.div`
//   flex: 1;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   color: ${({ theme }) => theme.colors.text};
//   margin-bottom: 0.5rem;
// `;

// const Author = styled.p`
//   font-size: 1.2rem;
//   color: ${({ theme }) => theme.colors.textSecondary};
//   margin-bottom: 1.5rem;
// `;

// const Description = styled.p`
//   line-height: 1.6;
//   margin-bottom: 2rem;
// `;

// const Meta = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 1rem;
// `;

// const MetaItem = styled.div`
//   padding: 0.5rem;
//   background: ${({ theme }) => theme.colors.light};
//   border-radius: ${({ theme }) => theme.radii.sm};
// `;

// const ReservationSection = styled.section`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 2rem;
//   background: white;
//   border-radius: ${({ theme }) => theme.radii.md};
//   box-shadow: ${({ theme }) => theme.shadows.sm};

//   h3 {
//     text-align: center;
//     margin-bottom: 1.5rem;
//     color: ${({ theme }) => theme.colors.primary};
//   }
// `;

// export default BookDetails;






import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchBookById } from '../../features/books/booksSlice';
import { createReservation } from '../../features/reservations/reservationsSlice';
import { Container } from '../../styles/utils';
import ReservationForm from '../../components/Reservations/ReservationForm';
import { toast } from 'react-toastify';

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { book, status } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  const handleReserve = async (reservationData) => {
    try {
      await dispatch(createReservation({
        ...reservationData,
        book: id,
        type: 'book'
      })).unwrap();
      toast.success('Book reserved successfully');
      navigate('/reservations');
    } catch (error) {
      toast.error(error.message || 'Failed to reserve book');
    }
  };

  if (status === 'loading') {
    return (
      <Container>
        <Loading>Loading book details...</Loading>
      </Container>
    );
  }

  if (!book) {
    return (
      <Container>
        <NotFound>Book not found</NotFound>
      </Container>
    );
  }

  return (
    <DetailsContainer>
      <Container>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        
        <BookInfo>
          <BookImage src={book.image || '/default-book.jpg'} alt={book.title} />
          
          <Details>
            <Title>{book.title}</Title>
            <Author>by {book.author}</Author>
            <Description>{book.description}</Description>
            
            <Meta>
              <MetaItem>
                <strong>Available Copies:</strong> {book.availableCopies}/{book.totalCopies}
              </MetaItem>
              <MetaItem>
                <strong>ISBN:</strong> {book.isbn}
              </MetaItem>
              <MetaItem>
                <strong>Published:</strong> {book.publishedYear}
              </MetaItem>
              <MetaItem>
                <strong>Genre:</strong> {book.genre}
              </MetaItem>
            </Meta>
          </Details>
        </BookInfo>
        {user && !user.isLibrarian && book.availableCopies > 0 && (
          <ReservationSection>
            <h3>Reserve this book</h3>
            <ReservationForm 
              type="book" 
              onSubmit={handleReserve} 
            />
          </ReservationSection>
        )}
      </Container>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  padding: 2rem 0;
`;

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const NotFound = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.danger};
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const BookImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  align-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-self: flex-start;
  }
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Author = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Meta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const MetaItem = styled.div`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

const ReservationSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;


export default BookDetails;