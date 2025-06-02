import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import styled from 'styled-components';
import { Button, Logo } from '../UI';
import { FaSignOutAlt, FaUser, FaBook, FaHome, FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
console.log("user",user)
  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate('/login');
      });
  };

  return (
    <Nav>
      <NavContainer>
        <LogoLink to="/">
          <Logo />
        </LogoLink>

        <NavLinks>
     
          
          {token && (
            <>
            <NavItem to="/dashboard">
                <FaBook /> Dashboard
              </NavItem>
              <NavItem to="/books">
                <FaBook /> Books
              </NavItem>
              <NavItem to="/rooms">
                <FaHome /> Rooms
              </NavItem>
              <NavItem to="/reservations">
                <FaCalendarAlt /> My Reservations
              </NavItem>
            </>
          )}
        </NavLinks>

        <AuthSection>
          {token ? (
            <>
              <UserInfo>
                <UserIcon>
                  <FaUser />
                </UserIcon>
                <Username>{user?.username}</Username>
                {user?.role ==="1" && <LibrarianBadge>Librarian</LibrarianBadge>}
              </UserInfo>
              <Button 
                onClick={handleLogout} 
                // small 
                variant="danger"
              >
                <FaSignOutAlt /> Logout
              </Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/login" small>
                Login
              </Button>
              <Button as={Link} to="/register" small>
                Register
              </Button>
            </>
          )}
        </AuthSection>
      </NavContainer>
    </Nav>
  );
};

// Previous styles remain the same, just add this new one:
const LibrarianBadge = styled.span`
  background: ${({ theme }) => theme.colors.secondaryLight};
  color: ${({ theme }) => theme.colors.secondaryDark};
  padding: 0.2rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.7rem;
  font-weight: 600;
  margin-left: 0.5rem;
`;

const Username = styled.span`
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

const Nav = styled.nav`
  background: white;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

const AuthSection = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.9rem;
`;

const UserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;

export default Navbar;



// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../../features/auth/authSlice';
// import styled from 'styled-components';
// import { Button, Logo } from '../UI';
// import { FaSignOutAlt, FaUser, FaMap, FaChartBar, FaClipboardList } from 'react-icons/fa';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, token } = useSelector((state) => state.auth);

//   const handleLogout = () => {
//     dispatch(logoutUser())
//       .unwrap()
//       .then(() => {
//         navigate('/login');
//       });
//   };

//   return (
//     <Nav>
//       <NavContainer>
//         <LogoLink to="/">
//           <Logo />
//         </LogoLink>

//         <NavLinks>
//           <NavItem to="/dashboard">
//             <FaClipboardList /> Dashboard
//           </NavItem>
   
          
//         </NavLinks>

//         <AuthSection>
//           {token ? (
//             <>
//               <UserInfo>
//                 <UserIcon>
//                   <FaUser />
//                 </UserIcon>
//                 <span>{user?.name}</span>
//               </UserInfo>
//               <Button 
//                 onClick={handleLogout} 
//                 small 
//                 variant="danger"
//               >
//                 <FaSignOutAlt /> Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button as={Link} to="/login" small>
//                 Login
//               </Button>
//               <Button as={Link} to="/register" small>
//                 Register
//               </Button>
//             </>
//           )}
//         </AuthSection>
//       </NavContainer>
//     </Nav>
//   );
// };

// const Nav = styled.nav`
//   background: white;
//   box-shadow: ${({ theme }) => theme.shadows.sm};
//   padding: 1rem 0;
//   position: sticky;
//   top: 0;
//   z-index: 10;
// `;

// const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1rem;

//   @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
//     padding: 0 1.5rem;
//   }
// `;

// const LogoLink = styled(Link)`
//   text-decoration: none;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: center;

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     display: none;
//   }
// `;

// const NavItem = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.5rem 1rem;
//   text-decoration: none;
//   color: ${({ theme }) => theme.colors.text};
//   border-radius: ${({ theme }) => theme.radii.sm};
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.light};
//   }

//   &.active {
//     color: ${({ theme }) => theme.colors.primary};
//     font-weight: 500;
//   }
// `;

// const AuthSection = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   align-items: center;
// `;

// const UserInfo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   margin-right: 0.5rem;
//   font-size: 0.9rem;
// `;

// const UserIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 30px;
//   height: 30px;
//   background-color: ${({ theme }) => theme.colors.primaryLight};
//   color: ${({ theme }) => theme.colors.primary};
//   border-radius: 50%;
// `;

// export default Navbar;