// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { fetchBookById, updateBook } from '../../features/books/booksSlice';
// import { Container } from '../../styles/utils';
// import { Button, Input, Textarea, Select } from '../../components/UI/index';
// import { toast } from 'react-toastify';

// const EditBook = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { book, status } = useSelector((state) => state.books);
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     isbn: '',
//     publishedYear: '',
//     genre: '',
//     description: '',
//     totalCopies: 1,
//     availableCopies: 1,
//     image: '',
//   });

//   const genres = [
//     'Fiction',
//     'Non-Fiction',
//     'Science Fiction',
//     'Fantasy',
//     'Mystery',
//     'Romance',
//     'Biography',
//     'History',
//     'Self-Help',
//     'Other',
//   ];

//   useEffect(() => {
//     dispatch(fetchBookById(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (book) {
//       setFormData({
//         title: book.title,
//         author: book.author,
//         isbn: book.isbn,
//         publishedYear: book.publishedYear,
//         genre: book.genre,
//         description: book.description,
//         totalCopies: book.totalCopies,
//         availableCopies: book.availableCopies,
//         image: book.image,
//       });
//     }
//   }, [book]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateBook({ id, ...formData }))
//       .unwrap()
//       .then(() => {
//         toast.success('Book updated successfully');
//         navigate('/books');
//       })
//       .catch((error) => {
//         toast.error(error.message || 'Failed to update book');
//       });
//   };

//   if (status === 'loading' && !book) {
//     return (
//       <Container>
//         <Loading>Loading book details...</Loading>
//       </Container>
//     );
//   }

//   return (
//     <EditBookContainer>
//       <Container>
//         <Header>
//           <h1>Edit Book</h1>
//           <p>Update the details of this book</p>
//         </Header>

//         <Form onSubmit={handleSubmit}>
//           <FormRow>
//             <FormGroup>
//               <Label>Title *</Label>
//               <Input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label>Author *</Label>
//               <Input
//                 type="text"
//                 name="author"
//                 value={formData.author}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//           </FormRow>

//           <FormRow>
//             <FormGroup>
//               <Label>ISBN *</Label>
//               <Input
//                 type="text"
//                 name="isbn"
//                 value={formData.isbn}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label>Published Year</Label>
//               <Input
//                 type="number"
//                 name="publishedYear"
//                 value={formData.publishedYear}
//                 onChange={handleChange}
//                 min="1900"
//                 max={new Date().getFullYear()}
//               />
//             </FormGroup>
//           </FormRow>

//           <FormRow>
//             <FormGroup>
//               <Label>Genre</Label>
//               <Select
//                 name="genre"
//                 value={formData.genre}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Genre</option>
//                 {genres.map((genre) => (
//                   <option key={genre} value={genre}>
//                     {genre}
//                   </option>
//                 ))}
//               </Select>
//             </FormGroup>
//             <FormGroup>
//               <Label>Total Copies *</Label>
//               <Input
//                 type="number"
//                 name="totalCopies"
//                 value={formData.totalCopies}
//                 onChange={handleChange}
//                 min="1"
//                 required
//               />
//             </FormGroup>
//           </FormRow>

//           <FormRow>
//             <FormGroup>
//               <Label>Available Copies *</Label>
//               <Input
//                 type="number"
//                 name="availableCopies"
//                 value={formData.availableCopies}
//                 onChange={handleChange}
//                 min="0"
//                 max={formData.totalCopies}
//                 required
//               />
//             </FormGroup>
//           </FormRow>

//           <FormGroup>
//             <Label>Description</Label>
//             <Textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label>Image URL</Label>
//             <Input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               placeholder="https://example.com/book-cover.jpg"
//             />
//           </FormGroup>

//           <Button type="submit" fullWidth>
//             Update Book
//           </Button>
//         </Form>
//       </Container>
//     </EditBookContainer>
//   );
// };

// // Reuse styles from AddBook with minor adjustments
// const EditBookContainer = styled.div`
//   padding: 2rem 0;
// `;

// const Header = styled.div`
//   margin-bottom: 2rem;
//   text-align: center;

//   h1 {
//     font-size: 2rem;
//     color: ${({ theme }) => theme.colors.primary};
//     margin-bottom: 0.5rem;
//   }

//   p {
//     color: ${({ theme }) => theme.colors.textSecondary};
//   }
// `;

// const Form = styled.form`
//   max-width: 800px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const FormRow = styled.div`
//   display: flex;
//   gap: 1.5rem;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const FormGroup = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const Label = styled.label`
//   font-weight: 500;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const Loading = styled.div`
//   text-align: center;
//   padding: 2rem;
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// export default EditBook;










import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchBookById, updateBook } from '../../features/books/booksSlice';
import { Container } from '../../styles/utils';
import { Button, Input, Textarea, Select } from '../../components/UI/index';
import { toast } from 'react-toastify';

const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { book, status } = useSelector((state) => state.books);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
    genre: '',
    description: '',
    totalCopies: 1,
    availableCopies: 1,
    image: '',
  });

  const genres = [
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Romance',
    'Biography',
    'History',
    'Self-Help',
    'Other',
  ];

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        publishedYear: book.publishedYear,
        genre: book.genre,
        description: book.description,
        totalCopies: book.totalCopies,
        availableCopies: book.availableCopies,
        image: book.image,
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Copies') ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateBook({ id, ...formData })).unwrap();
      toast.success('Book updated successfully');
      navigate('/books');
    } catch (error) {
      toast.error(error.message || 'Failed to update book');
    }
  };

  if (status === 'loading' && !book) {
    return (
      <Container>
        <Loading>Loading book details...</Loading>
      </Container>
    );
  }

  return (
    <EditBookContainer>
      <Container>
        <Header>
          <h1>Edit Book</h1>
          <p>Update the details of this book</p>
        </Header>

        <Form onSubmit={handleSubmit}>
                <FormRow>
             <FormGroup>
               <Label>Title *</Label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Author *</Label>
              <Input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>ISBN *</Label>
              <Input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Published Year</Label>
              <Input
                type="number"
                name="publishedYear"
                value={formData.publishedYear}
                onChange={handleChange}
                min="1900"
                max={new Date().getFullYear()}
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>Genre</Label>
              <Select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
              >
                <option value="">Select Genre</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Total Copies *</Label>
              <Input
                type="number"
                name="totalCopies"
                value={formData.totalCopies}
                onChange={handleChange}
                min="1"
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>Available Copies *</Label>
              <Input
                type="number"
                name="availableCopies"
                value={formData.availableCopies}
                onChange={handleChange}
                min="0"
                max={formData.totalCopies}
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>Description</Label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
          </FormGroup>

          <FormGroup>
            <Label>Image URL</Label>
            <Input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/book-cover.jpg"
            />
          </FormGroup>
          <Button 
            type="submit" 
            fullWidth 
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Updating...' : 'Update Book'}
          </Button>
        </Form>
      </Container>
    </EditBookContainer>
  );
};

// Reuse styles from AddBook with minor adjustments
const EditBookContainer = styled.div`
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

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default EditBook;