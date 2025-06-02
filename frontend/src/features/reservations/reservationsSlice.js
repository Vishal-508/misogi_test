// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const initialState = {
//   reservations: [],
//   status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
// };

// export const fetchUserReservations = createAsyncThunk(
//   'reservations/fetchUserReservations',
//   async (_, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.get('/api/reservation/reservations', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const fetchAllReservations = createAsyncThunk(
//   'reservations/fetchAllReservations',
//   async (_, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.get('/api/reservations/all', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const createReservation = createAsyncThunk(
//   'reservations/createReservation',
//   async (reservationData, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.post('/api/reservations', reservationData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const approveReservation = createAsyncThunk(
//   'reservations/approveReservation',
//   async (reservationId, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.put(
//       `/api/reservations/${reservationId}/approve`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   }
// );

// export const declineReservation = createAsyncThunk(
//   'reservations/declineReservation',
//   async (reservationId, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.put(
//       `/api/reservations/${reservationId}/decline`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   }
// );

// export const checkOutReservation = createAsyncThunk(
//   'reservations/checkOutReservation',
//   async (reservationId, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.put(
//       `/api/reservations/${reservationId}/checkout`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   }
// );

// export const returnReservation = createAsyncThunk(
//   'reservations/returnReservation',
//   async (reservationId, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.put(
//       `/api/reservations/${reservationId}/return`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   }
// );



// export const cancelReservation = createAsyncThunk(
//   'reservations/cancelReservation',
//   async (reservationId, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().auth;
//       await axios.delete(`/api/reservations/${reservationId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return reservationId; // Return the ID of the deleted reservation
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const reservationsSlice = createSlice({
//   name: 'reservations',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(fetchUserReservations.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchUserReservations.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.reservations = action.payload;
//       })
//       .addCase(fetchUserReservations.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//         toast.error('Failed to fetch reservations');
//       })
//       .addCase(fetchAllReservations.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchAllReservations.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.reservations = action.payload;
//       })
//       .addCase(fetchAllReservations.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//         toast.error('Failed to fetch all reservations');
//       })
//       .addCase(createReservation.fulfilled, (state, action) => {
//         state.reservations.push(action.payload);
//         toast.success('Reservation created successfully');
//       })
//       .addCase(createReservation.rejected, (state, action) => {
//         state.error = action.error.message;
//         toast.error('Failed to create reservation');
//       })
//       .addCase(approveReservation.fulfilled, (state, action) => {
//         const index = state.reservations.findIndex(
//           (r) => r._id === action.payload._id
//         );
//         if (index !== -1) {
//           state.reservations[index] = action.payload;
//         }
//         toast.success('Reservation approved');
//       })
//       .addCase(approveReservation.rejected, (state, action) => {
//         state.error = action.error.message;
//         toast.error('Failed to approve reservation');
//       })
//       .addCase(declineReservation.fulfilled, (state, action) => {
//         const index = state.reservations.findIndex(
//           (r) => r._id === action.payload._id
//         );
//         if (index !== -1) {
//           state.reservations[index] = action.payload;
//         }
//         toast.success('Reservation declined');
//       })
//       .addCase(declineReservation.rejected, (state, action) => {
//         state.error = action.error.message;
//         toast.error('Failed to decline reservation');
//       })
//       .addCase(checkOutReservation.fulfilled, (state, action) => {
//         const index = state.reservations.findIndex(
//           (r) => r._id === action.payload._id
//         );
//         if (index !== -1) {
//           state.reservations[index] = action.payload;
//         }
//         toast.success('Checked out successfully');
//       })
//       .addCase(returnReservation.fulfilled, (state, action) => {
//         const index = state.reservations.findIndex(
//           (r) => r._id === action.payload._id
//         );
//         if (index !== -1) {
//           state.reservations[index] = action.payload;
//         }
//         toast.success('Returned successfully');
//       })
//         .addCase(cancelReservation.fulfilled, (state, action) => {
//         state.reservations = state.reservations.filter(
//           (res) => res._id !== action.payload
//         );
//         toast.success('Reservation cancelled successfully');
//       })
//       .addCase(cancelReservation.rejected, (state, action) => {
//         toast.error(action.payload?.message || 'Failed to cancel reservation');
//       });
//   }
// });

// export default reservationsSlice.reducer;

// export const selectAllReservations = (state) => state.reservations.reservations;
// export const selectReservationsStatus = (state) => state.reservations.status;
// export const selectReservationsError = (state) => state.reservations.error;















// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../../api/axios';
// import { toast } from 'react-toastify';

// const initialState = {
//   reservations: [],
//   reservation: null,
//   status: 'idle',
//   error: null,
//   pagination: {
//     page: 1,
//     limit: 10,
//     total: 0,
//   },
// };

// export const fetchAllReservations = createAsyncThunk(
//   'reservations/fetchAll',
//   async (params = {}, { getState }) => {
//     const { page, limit, sort, status, type } = params;
//     const response = await api.get('/api/reservation/reservations/all', {
//       params: {
//         page,
//         limit,
//         sort,
//         status,
//         type,
//       },
//     });
//     return {
//       data: response.data.data,
//       pagination: response.data.pagination,
//     };
//   }
// );

// export const fetchUserReservations = createAsyncThunk(
//   'reservations/fetchUser',
//   async () => {
//     const response = await api.get('/api/reservation/reservations');
//     return response.data;
//   }
// );

// export const createReservation = createAsyncThunk(
//   'reservations/create',
//   async (reservationData) => {
//     const response = await api.post('/api/reservation/reservations', reservationData);
//     return response.data;
//   }
// );

// export const updateReservationStatus = createAsyncThunk(
//   'reservations/updateStatus',
//   async ({ id, status }) => {
//     const response = await api.patch(`/api/reservation/reservations/${id}/status`, { status });
//     return response.data;
//   }
// );

// export const checkOutReservation = createAsyncThunk(
//   'reservations/checkOut',
//   async (id) => {
//     const response = await api.patch(`/api/reservation/reservations/${id}/checkout`);
//     return response.data;
//   }
// );

// export const cancelReservation = createAsyncThunk(
//   'reservations/cancel',
//   async (id) => {
//     await api.delete(`/api/reservation/reservations/${id}`);
//     return id;
//   }
// );

// const reservationsSlice = createSlice({
//   name: 'reservations',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllReservations.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchAllReservations.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.reservations = action.payload.data;
//         state.pagination = action.payload.pagination;
//       })
//       .addCase(fetchAllReservations.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(createReservation.fulfilled, (state, action) => {
//         state.reservations.unshift(action.payload);
//         toast.success('Reservation created successfully');
//       })
//       .addCase(updateReservationStatus.fulfilled, (state, action) => {
//         const index = state.reservations.findIndex(r => r._id === action.payload._id);
//         if (index !== -1) {
//           state.reservations[index] = action.payload;
//         }
//         const message = {
//           'approved': 'Reservation approved',
//           'declined': 'Reservation declined',
//           'checked_out': 'Checked out successfully',
//           'returned': 'Returned successfully'
//         }[action.payload.status];
//         toast.success(message);
//       })
//       .addCase(checkOutReservation.fulfilled, (state, action) => {
//         const index = state.reservations.findIndex(r => r._id === action.payload._id);
//         if (index !== -1) {
//           state.reservations[index] = action.payload;
//         }
//         toast.success('Checked out successfully');
//       })
//       .addCase(cancelReservation.fulfilled, (state, action) => {
//         state.reservations = state.reservations.filter(r => r._id !== action.payload);
//         toast.success('Reservation cancelled successfully');
//       });
//   },
// });

// export default reservationsSlice.reducer;

// export const selectAllReservations = (state) => state.reservations.reservations;
// export const selectReservationById = (state) => state.reservations.reservation;
// export const selectReservationsStatus = (state) => state.reservations.status;
// export const selectReservationsError = (state) => state.reservations.error;
// export const selectReservationsPagination = (state) => state.reservations.pagination;




















import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';
import { toast } from 'react-toastify';
import API_ENDPOINTS from '../../api/endpoints';

const initialState = {
  reservations: [],
  userReservations: [],
  reservation: null,
  status: 'idle',
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
  },
};

// Helper function to replace :id in endpoints
const replaceId = (template, id) => template.replace(':id', id);

// Thunks
export const fetchAllReservations = createAsyncThunk(
  'reservations/fetchAll',
  async (params = {}, { rejectWithValue }) => {
    try {
      const { page, limit, sort, status, type } = params;
      const response = await api.get(API_ENDPOINTS.GET_ALL_RESERVATIONS, {
        params: { page, limit, sort, status, type },
      });
      return {
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const fetchUserReservations = createAsyncThunk(
  'reservations/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ENDPOINTS.GET_USER_RESERVATIONS);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const createReservation = createAsyncThunk(
  'reservations/create',
  async (reservationData, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ENDPOINTS.CREATE_RESERVE_BOOK, reservationData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const updateReservationStatus = createAsyncThunk(
  'reservations/updateStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        replaceId(API_ENDPOINTS.UPDATE_RESERVATION_STATUS, id),
        { status }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const checkOutReservation = createAsyncThunk(
  'reservations/checkOut',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        replaceId(API_ENDPOINTS.RESERVATION_CHECKOUT_ROOM, id)
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const cancelReservation = createAsyncThunk(
  'reservations/cancel',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(replaceId(API_ENDPOINTS.UPDATE_RESERVATION_STATUS, id));
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all reservations
      .addCase(fetchAllReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchAllReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Fetch user reservations
      .addCase(fetchUserReservations.fulfilled, (state, action) => {
        state.userReservations = action.payload;
      })
      
      // Create reservation
      .addCase(createReservation.fulfilled, (state, action) => {
        state.reservations.unshift(action.payload);
        state.userReservations.unshift(action.payload);
        toast.success('Reservation created successfully');
      })
      .addCase(createReservation.rejected, (_, action) => {
        toast.error(action.payload?.message || 'Failed to create reservation');
      })
      
      // Update reservation status
      .addCase(updateReservationStatus.fulfilled, (state, action) => {
        const index = state.reservations.findIndex(r => r._id === action.payload._id);
        if (index !== -1) {
          state.reservations[index] = action.payload;
        }
        const userIndex = state.userReservations.findIndex(r => r._id === action.payload._id);
        if (userIndex !== -1) {
          state.userReservations[userIndex] = action.payload;
        }
        
        const message = {
          'approved': 'Reservation approved',
          'declined': 'Reservation declined',
          'checked_out': 'Checked out successfully',
          'returned': 'Returned successfully'
        }[action.payload.status] || 'Status updated successfully';
        
        toast.success(message);
      })
      .addCase(updateReservationStatus.rejected, (_, action) => {
        toast.error(action.payload?.message || 'Failed to update reservation status');
      })
      
      // Check out reservation
      .addCase(checkOutReservation.fulfilled, (state, action) => {
        const index = state.reservations.findIndex(r => r._id === action.payload._id);
        if (index !== -1) {
          state.reservations[index] = action.payload;
        }
        const userIndex = state.userReservations.findIndex(r => r._id === action.payload._id);
        if (userIndex !== -1) {
          state.userReservations[userIndex] = action.payload;
        }
        toast.success('Checked out successfully');
      })
      .addCase(checkOutReservation.rejected, (_, action) => {
        toast.error(action.payload?.message || 'Failed to check out');
      })
      
      // Cancel reservation
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations.filter(r => r._id !== action.payload);
        state.userReservations = state.userReservations.filter(r => r._id !== action.payload);
        toast.success('Reservation cancelled successfully');
      })
      .addCase(cancelReservation.rejected, (_, action) => {
        toast.error(action.payload?.message || 'Failed to cancel reservation');
      });
  },
});

export default reservationsSlice.reducer;

// Selectors
export const selectAllReservations = (state) => state.reservations.reservations;
export const selectUserReservations = (state) => state.reservations.userReservations;
export const selectReservationById = (state) => state.reservations.reservation;
export const selectReservationsStatus = (state) => state.reservations.status;
export const selectReservationsError = (state) => state.reservations.error;
export const selectReservationsPagination = (state) => state.reservations.pagination;