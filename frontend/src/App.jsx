// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { getCurrentUser } from "./features/auth/authSlice";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ThemeProvider } from "styled-components";
// import GlobalStyles from "./styles/GlobalStyles";
// import theme from "./styles/theme";
// import ProtectedRoute from "./routes/ProtectedRoute";./routes/ProtectedRoute"
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// // import Books from "./pages/Books/Books";
// // import BookDetails from "./pages/Books/BookDetailsPage";
// // import Rooms from "./pages/Rooms/Rooms";
// // import RoomDetails from "./pages/Rooms/RoomDetailsPage";
// // import Reservations from "./pages/Reservations/Reservations";
// // import LibrarianDashboard from "./pages/Dashboard/LibrarianDashboard";
// import UserDashboard from "./pages/Dashboard/UserDashboard";

// const App = () => {
//   const dispatch = useDispatch();
//   const { token, user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (token) {
//       dispatch(getCurrentUser())
//         .unwrap()
//         .catch((error) => {
//           console.log(error.message || "Session expired. Please login again.");
//         });
//     }
//   }, [dispatch, token]);

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       <ToastContainer
//         position="top-center"
//         autoClose={4000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
          
//           {/* Protected routes */}
//           <Route element={<ProtectedRoute />}>
//             {/* <Route 
//               path="dashboard" 
//               element={user?.role == "1" ? <LibrarianDashboard /> : <UserDashboard />} 
//             /> */}
//             <Route path="dashboard" element={<UserDashboard />} />
//             {/* <Route path="books" element={<Books />} />
//             <Route path="books/:id" element={<BookDetails />} />
            
//             <Route path="rooms" element={<Rooms />} />
//             <Route path="rooms/:id" element={<RoomDetails />} /> */}
//             {/* <Route path="reservations" element={<Reservations />} /> */}
//           </Route>

//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Route>
//       </Routes>
//     </ThemeProvider>
//   );
// };

// export default App;







// // import { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import { getCurrentUser } from "./features/auth/authSlice";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { ThemeProvider } from "styled-components";
// // import GlobalStyles from "./styles/GlobalStyles";
// // import theme from "./styles/theme";
// // import ProtectedRoute from "./routes/ProtectedRoute";
// // import Layout from "./components/Layout";
// // import Home from "./pages/Home";
// // import Login from "./pages/Auth/Login";
// // import Register from "./pages/Auth/Register";

// // // import { Toaster } from "react-hot-toast";

// // import Dashboard from "./pages/Dashboard/Dashboard";

// // const App = () => {
// //   const dispatch = useDispatch();
// //   const { token } = useSelector((state) => state.auth);

// //   useEffect(() => {
// //     if (token) {
// //       dispatch(getCurrentUser())
// //         .unwrap()
// //         .catch((error) => {
// //           console.log(error.message || "Session expired. Please login again.");
// //         });
// //     }
// //   }, [dispatch, token]);

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <GlobalStyles />
// //       <ToastContainer
// //         position="top-center"
// //         autoClose={4000}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //         theme="colored"
// //       />
// //       <Routes>
// //         <Route path="/" element={<Layout />}>
// //           <Route index element={<Home />} />
// //           <Route path="login" element={<Login />} />
// //           <Route path="register" element={<Register />} />
// //           <Route
// //             path="dashboard"
// //             element={
// //               <ProtectedRoute>
// //                 <Dashboard />
// //               </ProtectedRoute>
// //             }
// //           />
          


// //           <Route path="*" element={<Navigate to="/" replace />} />
// //         </Route>
// //       </Routes>
// //     </ThemeProvider>
// //   );
// // };

// // export default App;

// // import { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import { getCurrentUser } from "./features/auth/authSlice";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { ThemeProvider } from "styled-components";
// // import GlobalStyles from "./styles/GlobalStyles";
// // import theme from "./styles/theme";
// // import ProtectedRoute from "./routes/ProtectedRoute";
// // import Layout from "./components/Layout";
// // import Home from "./pages/Home";
// // import Login from "./pages/Auth/Login";
// // import Register from "./pages/Auth/Register";

// Add these imports
//  import { Routes, Route, Navigate } from "react-router-dom";












// import Home from './pages/Home';
// import Books from './pages/Books/Books';
// import BookDetails from './pages/Books/BookDetails';
// import AddBook from './pages/Books/AddBook';
// import EditBook from './pages/Books/EditBook';
// import Rooms from './pages/Rooms/Rooms';
// import RoomDetails from './pages/Rooms/RoomDetails';
// import AddRoom from './pages/Rooms/AddRoom';
// import EditRoom from './pages/Rooms/EditRoom';
// import Reservations from './pages/Reservations/Reservations';
// import LibrarianDashboard from './pages/Dashboard/LibrarianDashboard';
// import UserDashboard from './pages/Dashboard/UserDashboard';
//  import Layout from "./components/Layout";
//  import Login from "./pages/Auth/Login";
//  import Register from "./pages/Auth/Register";
//  import ProtectedRoute from "./routes/ProtectedRoute";
//   import { getCurrentUser } from "./features/auth/authSlice";
// console.log("get currrent user",getCurrentUser);
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import ProtectedRoute, { LibrarianRoute } from "./routes/ProtectedRoute";
// // Update your Routes component
// const App = () => {
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (token) {
//       dispatch(getCurrentUser());
//     }
//   }, [dispatch, token]);

//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
        
//         {/* Protected routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="dashboard" element={<UserDashboard />} />
          
//           <Route element={<LibrarianRoute />}>
//             <Route path="librarian-dashboard" element={<LibrarianDashboard />} />
//             <Route path="books/add" element={<AddBook />} />
//             <Route path="books/:id/edit" element={<EditBook />} />
//             <Route path="rooms/add" element={<AddRoom />} />
//             <Route path="rooms/:id/edit" element={<EditRoom />} />
//           </Route>
          
//           <Route path="books" element={<Books />} />
//           <Route path="books/:id" element={<BookDetails />} />
//           <Route path="rooms" element={<Rooms />} />
//           <Route path="rooms/:id" element={<RoomDetails />} />
//           <Route path="reservations" element={<Reservations />} />
//         </Route>

//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Route>
//     </Routes>
//   );
// };

//  export default App;













import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Books from './pages/Books/Books';
import BookDetails from './pages/Books/BookDetails';
import AddBook from './pages/Books/AddBook';
import EditBook from './pages/Books/EditBook';
import Rooms from './pages/Rooms/Rooms';
import RoomDetails from './pages/Rooms/RoomDetails';
import AddRoom from './pages/Rooms/AddRoom';
import EditRoom from './pages/Rooms/EditRoom';
import Reservations from './pages/Reservations/Reservations';
import LibrarianDashboard from './pages/Dashboard/LibrarianDashboard';
import UserDashboard from './pages/Dashboard/UserDashboard';
import Layout from "./components/Layout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import { getCurrentUser } from "./features/auth/authSlice";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route 
            path="dashboard" 
            element={user?.role==="1" ? <LibrarianDashboard /> : <UserDashboard />} 
          />
          <Route path="books" element={<Books />} />
          <Route path="books/add" element={<AddBook />} />
          <Route path="books/:id/edit" element={<EditBook />} />
          <Route path="books/:id" element={<BookDetails />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/add" element={<AddRoom />} />
          <Route path="rooms/:id/edit" element={<EditRoom />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="reservations" element={<Reservations />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;