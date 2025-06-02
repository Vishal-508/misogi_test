// const API_ENDPOINTS = {
//   // Auth
//   REGISTER: '/api/auth/register',
//   LOGIN: '/api/auth/login',
//   ME: '/api/auth/me',
//   LOGOUT: '/api/auth/logout',


// };

// export default API_ENDPOINTS;

const API_ENDPOINTS = {
  // Auth
  REGISTER: '/api/auth/register',
  LOGIN: '/api/auth/login',
  ME: '/api/auth/me',
  LOGOUT: '/api/auth/logout',

  // Books
  CREATE_BOOK: '/api/books/books',
  GET_BOOKS: '/api/books/books',
  UPDATE_BOOK: '/api/books/books/:id',
  GET_BOOK_BY_ID: '/api/books/books/:id',


  // Rooms
  CREATE_ROOM: '/api/rooms/rooms',
  GET_ROOMS: '/api/rooms/rooms',
  CREATE_ROOM_SLOTS: '/api/rooms/rooms/slots',
  GET_AVAILABLE_SLOTS: '/api/rooms/rooms/:id/slots',
    GET_ROOMS_BY_ID: '/api/rooms/rooms/:id',
    UPDATE_ROOM: '/api/rooms/rooms/:id',

  // Reservations
  CREATE_RESERVE_BOOK: '/api/reservation/reservations',
  CREATE_RESERVE_ROOM: '/api/reservation/reservations',
  GET_USER_RESERVATIONS: '/api/reservation/reservations',
  GET_ALL_RESERVATIONS: '/api/reservation/reservations/all',
  UPDATE_RESERVATION_STATUS: '/api/reservation/reservations/:id/status',
  RESERVATION_CHECKOUT_ROOM: '/api/reservation/reservations/:id/checkout',
};

export default API_ENDPOINTS;