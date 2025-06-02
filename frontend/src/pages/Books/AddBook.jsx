// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
// import { addBook } from '../../features/books/booksSlice';
// import { Container } from '../../styles/utils';
// import { Button, Input, Textarea, Select } from '../../components/UI/index';
// import { toast } from 'react-toastify';

// const AddBook = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     isbn: '',
//     publishedYear: '',
//     genre: '',
//     description: '',
//     totalCopies: 1,
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

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addBook(formData))
//       .unwrap()
//       .then(() => {
//         toast.success('Book added successfully');
//         navigate('/books');
//       })
//       .catch((error) => {
//         toast.error(error.message || 'Failed to add book');
//       });
//   };

//   return (
//     <AddBookContainer>
//       <Container>
//         <Header>
//           <h1>Add New Book</h1>
//           <p>Fill in the details to add a new book to the library</p>
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
//             Add Book
//           </Button>
//         </Form>
//       </Container>
//     </AddBookContainer>
//   );
// };

// const AddBookContainer = styled.div`
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

// export default AddBook;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createBook } from '../../features/books/booksSlice';
import { Container } from '../../styles/utils';
import { Button, Input, Textarea, Select } from '../../components/UI/index';
import { toast } from 'react-toastify';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.books);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
    genre: '',
    description: '',
    totalCopies: 1,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'totalCopies' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createBook(formData)).unwrap();
      toast.success('Book added successfully');
      navigate('/books');
    } catch (error) {
      toast.error(error.message || 'Failed to add book');
    }
  };

  return (
    <AddBookContainer>
      <Container>
        <Header>
          <h1>Add New Book</h1>
          <p>Fill in the details to add a new book to the library</p>
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
            {status === 'loading' ? 'Adding...' : 'Add Book'}
          </Button>
        </Form>
      </Container>
    </AddBookContainer>
  );
};

const AddBookContainer = styled.div`
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


export default AddBook;