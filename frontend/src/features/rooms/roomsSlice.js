// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const initialState = {
//   rooms: [],
//   room: null,
//   status: 'idle',
//   error: null,
// };

// export const fetchRooms = createAsyncThunk(
//   'rooms/fetchRooms',
//   async (_, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.get('/api/rooms', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const fetchRoomById = createAsyncThunk(
//   'rooms/fetchRoomById',
//   async (id, { getState }) => {
//     const { token } = getState().auth;
//     const response = await axios.get(`/api/rooms/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const addRoom = createAsyncThunk(
//   'rooms/addRoom',
//   async (roomData, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().auth;
//       const response = await axios.post('/api/rooms', roomData, {
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

// export const updateRoom = createAsyncThunk(
//   'rooms/updateRoom',
//   async ({ id, ...roomData }, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().auth;
//       const response = await axios.put(`/api/rooms/${id}`, roomData, {
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

// export const deleteRoom = createAsyncThunk(
//   'rooms/deleteRoom',
//   async (id, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().auth;
//       await axios.delete(`/api/rooms/${id}`, {
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

// const roomsSlice = createSlice({
//   name: 'rooms',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(fetchRooms.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchRooms.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.rooms = action.payload;
//       })
//       .addCase(fetchRooms.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchRoomById.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchRoomById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.room = action.payload;
//       })
//       .addCase(fetchRoomById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addRoom.fulfilled, (state, action) => {
//         state.rooms.push(action.payload);
//         toast.success('Room added successfully');
//       })
//       .addCase(addRoom.rejected, (state, action) => {
//         toast.error(action.payload?.message || 'Failed to add room');
//       })
//       .addCase(updateRoom.fulfilled, (state, action) => {
//         const index = state.rooms.findIndex(room => room._id === action.payload._id);
//         if (index !== -1) {
//           state.rooms[index] = action.payload;
//         }
//         state.room = action.payload;
//         toast.success('Room updated successfully');
//       })
//       .addCase(updateRoom.rejected, (state, action) => {
//         toast.error(action.payload?.message || 'Failed to update room');
//       })
//       .addCase(deleteRoom.fulfilled, (state, action) => {
//         state.rooms = state.rooms.filter(room => room._id !== action.payload);
//         toast.success('Room deleted successfully');
//       })
//       .addCase(deleteRoom.rejected, (state, action) => {
//         toast.error(action.payload?.message || 'Failed to delete room');
//       });
//   },
// });

// export default roomsSlice.reducer;

// export const selectAllRooms = (state) => state.rooms.rooms;
// export const selectRoomById = (state) => state.rooms.room;
// export const selectRoomsStatus = (state) => state.rooms.status;
// export const selectRoomsError = (state) => state.rooms.error;





















// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../../api/axios';
// import { toast } from 'react-toastify';

// const initialState = {
//   rooms: [],
//   room: null,
//   status: 'idle',
//   error: null,
// };

// export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
//   const response = await api.get('/api/rooms/rooms');
//   return response.data;
// });

// export const fetchRoomById = createAsyncThunk('rooms/fetchRoomById', async (id) => {
//   const response = await api.get(`/api/rooms/rooms/${id}`);
//   return response.data;
// });

// export const createRoom = createAsyncThunk('rooms/createRoom', async (roomData) => {
//   const response = await api.post('/api/rooms/rooms', roomData);
//   return response.data;
// });

// export const updateRoom = createAsyncThunk('rooms/updateRoom', async ({ id, ...roomData }) => {
//   const response = await api.put(`/api/rooms/rooms/${id}`, roomData);
//   return response.data;
// });

// export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (id) => {
//   await api.delete(`/api/rooms/rooms/${id}`);
//   return id;
// });

// export const fetchAvailableSlots = createAsyncThunk('rooms/fetchAvailableSlots', async (id) => {
//   const response = await api.get(`/api/rooms/rooms/${id}/slots`);
//   return response.data;
// });

// export const createRoomSlots = createAsyncThunk('rooms/createRoomSlots', async (slotsData) => {
//   const response = await api.post('/api/rooms/rooms/slots', slotsData);
//   return response.data;
// });

// const roomsSlice = createSlice({
//   name: 'rooms',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRooms.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchRooms.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.rooms = action.payload;
//       })
//       .addCase(fetchRooms.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       // Add similar cases for other actions
//       .addCase(createRoom.fulfilled, (state, action) => {
//         state.rooms.push(action.payload);
//         toast.success('Room created successfully');
//       })
//       .addCase(updateRoom.fulfilled, (state, action) => {
//         const index = state.rooms.findIndex(room => room._id === action.payload._id);
//         if (index !== -1) {
//           state.rooms[index] = action.payload;
//         }
//         state.room = action.payload;
//         toast.success('Room updated successfully');
//       })
//       .addCase(deleteRoom.fulfilled, (state, action) => {
//         state.rooms = state.rooms.filter(room => room._id !== action.payload);
//         toast.success('Room deleted successfully');
//       });
//   },
// });

// export default roomsSlice.reducer;

// export const selectAllRooms = (state) => state.rooms.rooms;
// export const selectRoomById = (state) => state.rooms.room;
// export const selectRoomsStatus = (state) => state.rooms.status;
// export const selectRoomsError = (state) => state.rooms.error;




















import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';
import { toast } from 'react-toastify';
import API_ENDPOINTS from '../../api/endpoints';

const initialState = {
  rooms: [],
  room: null,
  availableSlots: [],
  status: 'idle',
  error: null,
};

// Helper function to replace :id in endpoints
const replaceId = (template, id) => template.replace(':id', id);

// Thunks
export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
  const response = await api.get(API_ENDPOINTS.GET_ROOMS);
  return response.data;
});

export const fetchRoomById = createAsyncThunk('rooms/fetchRoomById', async (id) => {
  const response = await api.get(replaceId(API_ENDPOINTS.GET_ROOMS_BY_ID, id));
  return response.data;
});

export const createRoom = createAsyncThunk(
  'rooms/createRoom',
  async (roomData, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ENDPOINTS.CREATE_ROOM, roomData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const updateRoom = createAsyncThunk(
  'rooms/updateRoom',
  async ({ id, ...roomData }, { rejectWithValue }) => {
    try {
      const response = await api.put(replaceId(API_ENDPOINTS.UPDATE_ROOM, id), roomData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const deleteRoom = createAsyncThunk(
  'rooms/deleteRoom',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(replaceId(API_ENDPOINTS.UPDATE_ROOM, id));
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const fetchAvailableSlots = createAsyncThunk(
  'rooms/fetchAvailableSlots',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(replaceId(API_ENDPOINTS.GET_AVAILABLE_SLOTS, id));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const createRoomSlots = createAsyncThunk(
  'rooms/createRoomSlots',
  async (slotsData, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ENDPOINTS.CREATE_ROOM_SLOTS, slotsData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all rooms
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Fetch room by ID
      .addCase(fetchRoomById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoomById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.room = action.payload;
      })
      .addCase(fetchRoomById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Create room
      .addCase(createRoom.fulfilled, (state, action) => {
        state.rooms.push(action.payload);
        toast.success('Room created successfully');
      })
      .addCase(createRoom.rejected, (_, action) => {
        toast.error(action.payload?.message || 'Failed to create room');
      })
      
      // Update room
      .addCase(updateRoom.fulfilled, (state, action) => {
        const index = state.rooms.findIndex(room => room._id === action.payload._id);
        if (index !== -1) {
          state.rooms[index] = action.payload;
        }
        state.room = action.payload;
        toast.success('Room updated successfully');
      })
      .addCase(updateRoom.rejected, (_, action) => {
        toast.error(action.payload?.message || 'Failed to update room');
      })
      
      // Delete room
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.rooms = state.rooms.filter(room => room._id !== action.payload);
        toast.success('Room deleted successfully');
      })
      .addCase(deleteRoom.rejected, (_, action) => {
        toast.error(action.payload?.message || 'Failed to delete room');
      })
      
      // Fetch available slots
      .addCase(fetchAvailableSlots.fulfilled, (state, action) => {
        state.availableSlots = action.payload;
      })
      
      // Create room slots
      .addCase(createRoomSlots.fulfilled, (state, action) => {
        toast.success('Room slots created successfully');
      })
      .addCase(createRoomSlots.rejected, (_, action) => {
        toast.error(action.payload?.message || 'Failed to create room slots');
      });
  },
});

export default roomsSlice.reducer;

// Selectors
export const selectAllRooms = (state) => state.rooms.rooms;
export const selectRoomById = (state) => state.rooms.room;
export const selectAvailableSlots = (state) => state.rooms.availableSlots;
export const selectRoomsStatus = (state) => state.rooms.status;
export const selectRoomsError = (state) => state.rooms.error;
