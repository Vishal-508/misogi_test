// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const initialState = {
//   books: [],
//   book: null,
//   status: 'idle',
//   error: null,
// };

// export const fetchBooks = createAsyncThunk(
//   'books/fetchBooks',
//   async (_, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.get('/api/books/books', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const fetchBookById = createAsyncThunk(
//   'books/fetchBookById',
//   async (id, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.get(`/api/books/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const addBook = createAsyncThunk(
//   'books/addBook',
//   async (bookData, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().auth;
//       const response = await axios.post('/api/books/books', bookData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateBook = createAsyncThunk(
//   'books/updateBook',
//   async ({ id, ...bookData }, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().auth;
//       const response = await axios.put(`/api/books/books/${id}`, bookData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteBook = createAsyncThunk(
//   'books/deleteBook',
//   async (id, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().auth;
//       await axios.delete(`/api/books/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return id;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(fetchBooks.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchBooks.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.books = action.payload;
//       })
//       .addCase(fetchBooks.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchBookById.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchBookById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.book = action.payload;
//       })
//       .addCase(fetchBookById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addBook.fulfilled, (state, action) => {
//         state.books.push(action.payload);
//         toast.success('Book added successfully');
//       })
//       .addCase(addBook.rejected, (state, action) => {
//         toast.error(action.payload?.message || 'Failed to add book');
//       })
//       .addCase(updateBook.fulfilled, (state, action) => {
//         const index = state.books.findIndex(book => book._id === action.payload._id);
//         if (index !== -1) {
//           state.books[index] = action.payload;
//         }
//         state.book = action.payload;
//         toast.success('Book updated successfully');
//       })
//       .addCase(updateBook.rejected, (state, action) => {
//         toast.error(action.payload?.message || 'Failed to update book');
//       })
//       .addCase(deleteBook.fulfilled, (state, action) => {
//         state.books = state.books.filter(book => book._id !== action.payload);
//         toast.success('Book deleted successfully');
//       })
//       .addCase(deleteBook.rejected, (state, action) => {
//         toast.error(action.payload?.message || 'Failed to delete book');
//       });
//   },
// });

// export default booksSlice.reducer;

// export const selectAllBooks = (state) => state.books.books;
// export const selectBookById = (state) => state.books.book;
// export const selectBooksStatus = (state) => state.books.status;
// export const selectBooksError = (state) => state.books.error;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import API_ENDPOINTS from '../../api/endpoints'; // adjust the relative path as needed

// const initialState = {
//   books: [],
//   book: null,
//   status: 'idle',
//   error: null,
// };

// /* ─────────────────────────────── HELPERS ────────────────────────────── */
// const withToken = (getState) => {
//   const { token } = getState().auth;
//   return {
//     headers: { Authorization: `Bearer ${token}` },
//   };
// };
// const replaceId = (template, id) => template.replace(':id', id);

// /* ─────────────────────────────── THUNKS ─────────────────────────────── */
// export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { getState }) => {
//   const res = await axios.get(API_ENDPOINTS.GET_BOOKS, withToken(getState));
//   return res.data;
// });

// export const fetchBookById = createAsyncThunk('books/fetchBookById', async (id, { getState }) => {
//   const res = await axios.get(replaceId(API_ENDPOINTS.UPDATE_BOOK, id), withToken(getState));
//   return res.data;
// });

// export const addBook = createAsyncThunk(
//   'books/addBook',
//   async (bookData, { getState, rejectWithValue }) => {
//     try {
//       const res = await axios.post(API_ENDPOINTS.CREATE_BOOK, bookData, withToken(getState));
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data);
//     }
//   }
// );

// export const updateBook = createAsyncThunk(
//   'books/updateBook',
//   async ({ id, ...bookData }, { getState, rejectWithValue }) => {
//     try {
//       const res = await axios.put(
//         replaceId(API_ENDPOINTS.UPDATE_BOOK, id),
//         bookData,
//         withToken(getState)
//       );
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data);
//     }
//   }
// );

// export const deleteBook = createAsyncThunk(
//   'books/deleteBook',
//   async (id, { getState, rejectWithValue }) => {
//     try {
//       await axios.delete(replaceId(API_ENDPOINTS.UPDATE_BOOK, id), withToken(getState));
//       return id;
//     } catch (err) {
//       return rejectWithValue(err.response?.data);
//     }
//   }
// );

// /* ────────────────────────────── SLICE ──────────────────────────────── */
// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // fetchAll
//       .addCase(fetchBooks.pending, (s) => { s.status = 'loading'; })
//       .addCase(fetchBooks.fulfilled, (s, a) => { s.status = 'succeeded'; s.books = a.payload; })
//       .addCase(fetchBooks.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message; })

//       // fetchById
//       .addCase(fetchBookById.pending, (s) => { s.status = 'loading'; })
//       .addCase(fetchBookById.fulfilled, (s, a) => { s.status = 'succeeded'; s.book = a.payload; })
//       .addCase(fetchBookById.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message; })

//       // add
//       .addCase(addBook.fulfilled, (s, a) => {
//         s.books.push(a.payload);
//         toast.success('Book added successfully');
//       })
//       .addCase(addBook.rejected, (_s, a) => toast.error(a.payload?.message || 'Failed to add book'))

//       // update
//       .addCase(updateBook.fulfilled, (s, a) => {
//         const idx = s.books.findIndex((b) => b._id === a.payload._id);
//         if (idx !== -1) s.books[idx] = a.payload;
//         s.book = a.payload;
//         toast.success('Book updated successfully');
//       })
//       .addCase(updateBook.rejected, (_s, a) =>
//         toast.error(a.payload?.message || 'Failed to update book')
//       )

//       // delete
//       .addCase(deleteBook.fulfilled, (s, a) => {
//         s.books = s.books.filter((b) => b._id !== a.payload);
//         toast.success('Book deleted successfully');
//       })
//       .addCase(deleteBook.rejected, (_s, a) =>
//         toast.error(a.payload?.message || 'Failed to delete book')
//       );
//   },
// });

// export default booksSlice.reducer;

// /* ────────────────────────────── SELECTORS ───────────────────────────── */
// export const selectAllBooks   = (state) => state.books.books;
// export const selectBookById   = (state) => state.books.book;
// export const selectBooksStatus = (state) => state.books.status;
// export const selectBooksError  = (state) => state.books.error;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { toast } from "react-toastify";
import API_ENDPOINTS from "../../api/endpoints";

const initialState = {
  books: [],
  book: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
  },
};

// Helper function to replace :id in endpoints
const replaceId = (template, id) => template.replace(":id", id);

// Thunks
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (params = {}, { rejectWithValue }) => {
    try {
      const { page = 1, limit = 10, search = "", sort = "" } = params;
      const response = await api.get(API_ENDPOINTS.GET_BOOKS, {
        params: { page, limit, search, sort },
      });
      console.log("response books data", response);
      return {
        data: response.data,
        pagination: response.data.pagination || {
          page,
          limit,
          total: response.data.length,
        },
        // pagination: response.data.pagination,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(replaceId(API_ENDPOINTS.GET_BOOK_BY_ID, id));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const createBook = createAsyncThunk(
  "books/createBook",
  async (bookData, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ENDPOINTS.CREATE_BOOK, bookData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ id, ...bookData }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        replaceId(API_ENDPOINTS.UPDATE_BOOK, id),
        bookData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(replaceId(API_ENDPOINTS.UPDATE_BOOK, id));
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    resetBookState: (state) => {
      state.book = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch books
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload.data;
        state.pagination = {
          ...state.pagination,
          ...action.payload.pagination,
        };
        // state.pagination = action.payload.pagination;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || action.error.message;
      })

      // Fetch book by ID
      .addCase(fetchBookById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.book = action.payload;
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || action.error.message;
      })

      // Create book
      .addCase(createBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books.unshift(action.payload); // Add new book at beginning
        toast.success("Book created successfully");
      })
      .addCase(createBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || action.error.message;
        toast.error(state.error || "Failed to create book");
      })

      // Update book
      .addCase(updateBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.books.findIndex(
          (book) => book._id === action.payload._id
        );
        if (index !== -1) {
          state.books[index] = action.payload;
        }
        state.book = action.payload;
        toast.success("Book updated successfully");
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || action.error.message;
        toast.error(state.error || "Failed to update book");
      })

      // Delete book
      .addCase(deleteBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = state.books.filter((book) => book._id !== action.payload);
        toast.success("Book deleted successfully");
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || action.error.message;
        toast.error(state.error || "Failed to delete book");
      });
  },
});

// Actions
export const { resetBookState } = booksSlice.actions;

// Selectors
export const selectAllBooks = (state) => state.books.books;
export const selectBookById = (state) => state.books.book;
export const selectBooksStatus = (state) => state.books.status;
export const selectBooksError = (state) => state.books.error;
export const selectBooksPagination = (state) => state.books.pagination;

// Reducer
export default booksSlice.reducer;
