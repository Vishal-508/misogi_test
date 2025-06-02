// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { fetchUserReservations } from '../../features/reservations/reservationsSlice';
// import { Container, Grid } from '../../styles/utils';
// import ReservationCard from '../../components/Reservations/ReservationCard';

// const UserDashboard = () => {
//   const dispatch = useDispatch();
//   const { reservations, status } = useSelector((state) => state.reservations);
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchUserReservations());
//     }
//   }, [dispatch, user]);

//   return (
//     <DashboardContainer>
//       <Container>
//         <Header>
//           <h1>Welcome, {user?.name}</h1>
//           <p>Here are your current reservations</p>
//         </Header>
        
//         {status === 'loading' ? (
//           <Loading>Loading your reservations...</Loading>
//         ) : reservations.length === 0 ? (
//           <EmptyState>
//             <h3>No reservations yet</h3>
//             <p>Browse our books or rooms to make a reservation</p>
//           </EmptyState>
//         ) : (
//           <Grid>
//             {reservations.map((reservation) => (
//               <ReservationCard 
//                 key={reservation._id} 
//                 reservation={reservation} 
//                 showActions 
//               />
//             ))}
//           </Grid>
//         )}
//       </Container>
//     </DashboardContainer>
//   );
// };

// const DashboardContainer = styled.div`
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

// const Loading = styled.div`
//   text-align: center;
//   padding: 2rem;
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const EmptyState = styled.div`
//   text-align: center;
//   padding: 2rem;
//   background: ${({ theme }) => theme.colors.light};
//   border-radius: ${({ theme }) => theme.radii.md};
  
//   h3 {
//     margin-bottom: 0.5rem;
//     color: ${({ theme }) => theme.colors.text};
//   }
  
//   p {
//     color: ${({ theme }) => theme.colors.textSecondary};
//   }
// `;

// export default UserDashboard;

















// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { fetchUserReservations } from '../../features/reservations/reservationsSlice';
// import { Container, Grid } from '../../styles/utils';
// import ReservationCard from '../../components/Reservations/ReservationCard';
// import { toast } from 'react-toastify';

// const UserDashboard = () => {
//   const dispatch = useDispatch();
//   const { 
//     userReservations: reservations, 
//     status 
//   } = useSelector((state) => state.reservations);
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchUserReservations())
//         .unwrap()
//         .catch(error => {
//           toast.error(error.message || 'Failed to load reservations');
//         });
//     }
//   }, [dispatch, user]);

//   return (
//     <DashboardContainer>
//       <Container>
//         <Header>
//           <h1>Welcome, {user?.username}</h1>
//           <p>Here are your current reservations</p>
//         </Header>
        
//         {status === 'loading' ? (
//           <Loading>Loading your reservations...</Loading>
//         ) : reservations.length === 0 ? (
//           <EmptyState>
//             <h3>No reservations yet</h3>
//             <p>Browse our books or rooms to make a reservation</p>
//           </EmptyState>
//         ) : (
//           <Grid>
//             {reservations.map((reservation) => (
//               <ReservationCard 
//                 key={reservation._id} 
//                 reservation={reservation} 
//                 showActions={reservation.status === 'pending'}
//               />
//             ))}
//           </Grid>
//         )}
//       </Container>
//     </DashboardContainer>
//   );
// };

// const DashboardContainer = styled.div`
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

// const Loading = styled.div`
//   text-align: center;
//   padding: 2rem;
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const EmptyState = styled.div`
//   text-align: center;
//   padding: 2rem;
//   background: ${({ theme }) => theme.colors.light};
//   border-radius: ${({ theme }) => theme.radii.md};
  
//   h3 {
//     margin-bottom: 0.5rem;
//     color: ${({ theme }) => theme.colors.text};
//   }
  
//   p {
//     color: ${({ theme }) => theme.colors.textSecondary};
//   }
// `;

// export default UserDashboard;





















import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchUserReservations } from '../../features/reservations/reservationsSlice';
import { Container, Grid } from '../../styles/utils';
import ReservationCard from '../../components/Reservations/ReservationCard';
import { toast } from 'react-toastify';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { 
    userReservations: reservations, 
    status 
  } = useSelector((state) => state.reservations);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(fetchUserReservations())
        .unwrap()
        .catch(error => {
          toast.error(error.message || 'Failed to load reservations');
        });
    }
  }, [dispatch, user]);

  return (
    <DashboardContainer>
      <Container>
        <Header>
          <h1>Welcome, {user?.username}</h1>
          <p>Here are your current reservations</p>
        </Header>
        
        {status === 'loading' ? (
          <Loading>Loading your reservations...</Loading>
        ) : reservations.length === 0 ? (
          <EmptyState>
            <h3>No reservations yet</h3>
            <p>Browse our books or rooms to make a reservation</p>
          </EmptyState>
        ) : (
          <Grid>
            {reservations.map((reservation) => (
              <ReservationCard 
                key={reservation._id} 
                reservation={reservation} 
                showActions={reservation.status === 'pending'}
              />
            ))}
          </Grid>
        )}
      </Container>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
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

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radii.md};
  
  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export default UserDashboard;