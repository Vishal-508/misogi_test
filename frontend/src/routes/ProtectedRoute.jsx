// import { useSelector, useDispatch } from 'react-redux';
// import { Navigate, useLocation } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import {  useEffect } from 'react';

// const ProtectedRoute = ({ children }) => {
// const dispatch = useDispatch();
// const { token ,error} = useSelector((state) => state.auth);
// const location = useLocation();

// useEffect(() => {
// if (error) {
//   toast.error(error);
//   dispatch(clearError());
// }
// }, [error, dispatch]);
//   if (!token) {
//     toast.error('Please login to access this page');
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { token, user } = useSelector((state) => state.auth);
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export const LibrarianRoute = () => {
  const { user } = useSelector((state) => state.auth);
    if (user?.role==="1") {
    return <Navigate to="/dashboard" replace />;
  }
  
  // if (user?.role !== "1") {
  //   return <Navigate to="/dashboard" replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;