// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import booksReducer from '../features/books/booksSlice';
import roomsReducer from '../features/rooms/roomsSlice';
import reservationsReducer from '../features/reservations/reservationsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    rooms: roomsReducer,
    reservations: reservationsReducer,
  },
});