// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { 
//   fetchAllReservations,
//   approveReservation,
//   declineReservation
// } from '../../features/reservations/reservationsSlice';
// import { fetchBooks } from '../../features/books/booksSlice';
// import { fetchRooms } from '../../features/rooms/roomsSlice';
// import { Container, Grid, Flex } from '../../styles/utils';
// import ReservationCard from '../../components/Reservations/ReservationCard';
// import StatsCard from '../../components/Dashboard/StatsCard';
// import { Button } from '../../components/UI/index';

// const LibrarianDashboard = () => {
//   const dispatch = useDispatch();
//   const { reservations, status: resStatus } = useSelector((state) => state.reservations);
//   const { books, status: booksStatus } = useSelector((state) => state.books);
//   const { rooms, status: roomsStatus } = useSelector((state) => state.rooms);
//   const [activeTab, setActiveTab] = useState('pending');

//   useEffect(() => {
//     dispatch(fetchAllReservations());
//     dispatch(fetchBooks());
//     dispatch(fetchRooms());
//   }, [dispatch]);

//   const pendingReservations = reservations.filter(r => r.status === 'pending');
//   const approvedReservations = reservations.filter(r => r.status === 'approved');
//   const declinedReservations = reservations.filter(r => r.status === 'declined');

//   const handleApprove = (id) => {
//     dispatch(approveReservation(id));
//   };

//   const handleDecline = (id) => {
//     dispatch(declineReservation(id));
//   };

//   const stats = [
//     { title: 'Total Books', value: books.length, icon: '📚' },
//     { title: 'Available Books', value: books.reduce((acc, book) => acc + book.availableCopies, 0), icon: '✅' },
//     { title: 'Total Rooms', value: rooms.length, icon: '🏠' },
//     { title: 'Available Rooms', value: rooms.filter(room => room.isAvailable).length, icon: '🆓' },
//     { title: 'Pending Reservations', value: pendingReservations.length, icon: '⏳' },
//     { title: 'Approved Reservations', value: approvedReservations.length, icon: '👍' },
//   ];

//   return (
//     <DashboardContainer>
//       <Container>
//         <Header>
//           <h1>Librarian Dashboard</h1>
//           <p>Manage library resources and reservations</p>
//         </Header>
        
//         <StatsGrid>
//           {stats.map((stat, index) => (
//             <StatsCard 
//               key={index}
//               title={stat.title}
//               value={stat.value}
//               icon={stat.icon}
//             />
//           ))}
//         </StatsGrid>
        
//         <Tabs>
//           <TabButton 
//             active={activeTab === 'pending'} 
//             onClick={() => setActiveTab('pending')}
//           >
//             Pending ({pendingReservations.length})
//           </TabButton>
//           <TabButton 
//             active={activeTab === 'approved'} 
//             onClick={() => setActiveTab('approved')}
//           >
//             Approved ({approvedReservations.length})
//           </TabButton>
//           <TabButton 
//             active={activeTab === 'declined'} 
//             onClick={() => setActiveTab('declined')}
//           >
//             Declined ({declinedReservations.length})
//           </TabButton>
//         </Tabs>
        
//         {resStatus === 'loading' ? (
//           <Loading>Loading reservations...</Loading>
//         ) : activeTab === 'pending' && pendingReservations.length === 0 ? (
//           <EmptyState>No pending reservations</EmptyState>
//         ) : activeTab === 'approved' && approvedReservations.length === 0 ? (
//           <EmptyState>No approved reservations</EmptyState>
//         ) : activeTab === 'declined' && declinedReservations.length === 0 ? (
//           <EmptyState>No declined reservations</EmptyState>
//         ) : (
//           <Grid>
//             {(activeTab === 'pending' ? pendingReservations : 
//               activeTab === 'approved' ? approvedReservations : declinedReservations)
//               .map((reservation) => (
//                 <ReservationCard 
//                   key={reservation._id} 
//                   reservation={reservation} 
//                   showActions={activeTab === 'pending'}
//                   onApprove={handleApprove}
//                   onDecline={handleDecline}
//                 />
//               ))}
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

// const StatsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 1rem;
//   margin-bottom: 2rem;
// `;

// const Tabs = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
// `;

// const TabButton = styled.button`
//   padding: 0.5rem 1rem;
//   background: none;
//   border: none;
//   border-bottom: 2px solid ${({ active, theme }) => 
//     active ? theme.colors.primary : 'transparent'};
//   color: ${({ active, theme }) => 
//     active ? theme.colors.primary : theme.colors.textSecondary};
//   font-weight: ${({ active }) => active ? '600' : '400'};
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     color: ${({ theme }) => theme.colors.primary};
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
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// export default LibrarianDashboard;























// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { 
//   fetchAllReservations,
//   updateReservationStatus,
// } from '../../features/reservations/reservationsSlice';
// import { fetchBooks } from '../../features/books/booksSlice';
// import { fetchRooms } from '../../features/rooms/roomsSlice';
// import { Container, Grid, Flex } from '../../styles/utils';
// import ReservationCard from '../../components/Reservations/ReservationCard';
// import StatsCard from '../../components/Dashboard/StatsCard';
// import { Button } from '../../components/UI/index';
// import { toast } from 'react-toastify';

// const LibrarianDashboard = () => {
//   const dispatch = useDispatch();
//   const { 
//     reservations, 
//     status: resStatus,
//     pagination 
//   } = useSelector((state) => state.reservations);
//   const { 
//     books, 
//     status: booksStatus 
//   } = useSelector((state) => state.books);
//   const { 
//     rooms, 
//     status: roomsStatus 
//   } = useSelector((state) => state.rooms);
//   const [activeTab, setActiveTab] = useState('pending');
//   const [filters, setFilters] = useState({
//     status: 'pending',
//     page: 1,
//     limit: 10
//   });

//   useEffect(() => {
//     dispatch(fetchAllReservations(filters));
//     dispatch(fetchBooks());
//     dispatch(fetchRooms());
//   }, [dispatch, filters]);

//   const filteredReservations = {
//     pending: reservations.filter(r => r.status === 'pending'),
//     approved: reservations.filter(r => r.status === 'approved'),
//     declined: reservations.filter(r => r.status === 'declined')
//   };

//   const handleStatusUpdate = async (id, status) => {
//     try {
//       await dispatch(updateReservationStatus({ id, status })).unwrap();
//       const message = {
//         'approved': 'Reservation approved',
//         'declined': 'Reservation declined'
//       }[status];
//       toast.success(message);
//     } catch (error) {
//       toast.error(error.message || 'Failed to update reservation');
//     }
//   };

//   const stats = [
//     { title: 'Total Books', value: books.length, icon: '📚' },
//     { title: 'Available Books', value: books.reduce((acc, book) => acc + (book.availableCopies || 0), 0), icon: '✅' },
//     { title: 'Total Rooms', value: rooms.length, icon: '🏠' },
//     { title: 'Available Rooms', value: rooms.filter(room => room.isAvailable).length, icon: '🆓' },
//     { title: 'Pending Reservations', value: filteredReservations.pending.length, icon: '⏳' },
//     { title: 'Approved Reservations', value: filteredReservations.approved.length, icon: '👍' },
//   ];

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setFilters(prev => ({ ...prev, status: tab }));
//   };

//   return (
//     <DashboardContainer>
//       <Container>
//         <Header>
//           <h1>Librarian Dashboard</h1>
//           <p>Manage library resources and reservations</p>
//         </Header>
        
//         <StatsGrid>
//           {stats?.map((stat, index) => (
//             <StatsCard 
//               key={index}
//               title={stat.title}
//               value={stat.value}
//               icon={stat.icon}
//             />
//           ))}
//         </StatsGrid>
        
//         <Tabs>
//           <TabButton 
//             active={activeTab === 'pending'} 
//             onClick={() => handleTabChange('pending')}
//           >
//             Pending ({filteredReservations.pending.length})
//           </TabButton>
//           <TabButton 
//             active={activeTab === 'approved'} 
//             onClick={() => handleTabChange('approved')}
//           >
//             Approved ({filteredReservations.approved.length})
//           </TabButton>
//           <TabButton 
//             active={activeTab === 'declined'} 
//             onClick={() => handleTabChange('declined')}
//           >
//             Declined ({filteredReservations.declined.length})
//           </TabButton>
//         </Tabs>
        
//         {resStatus === 'loading' ? (
//           <Loading>Loading reservations...</Loading>
//         ) : filteredReservations[activeTab].length === 0 ? (
//           <EmptyState>No {activeTab} reservations</EmptyState>
//         ) : (
//           <>
//             <Grid>
//               {filteredReservations[activeTab].map((reservation) => (
//                 <ReservationCard 
//                   key={reservation._id} 
//                   reservation={reservation} 
//                   showActions={activeTab === 'pending'}
//                   onApprove={() => handleStatusUpdate(reservation._id, 'approved')}
//                   onDecline={() => handleStatusUpdate(reservation._id, 'declined')}
//                 />
//               ))}
//             </Grid>
//             <Pagination>
//               {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
//                 <PageButton
//                   key={page}
//                   active={page === pagination.page}
//                   onClick={() => setFilters(prev => ({ ...prev, page }))}
//                 >
//                   {page}
//                 </PageButton>
//               ))}
//             </Pagination>
//           </>
//         )}
//       </Container>
//     </DashboardContainer>
//   );
// };

// // Add pagination styles
// const Pagination = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 0.5rem;
//   margin-top: 2rem;
// `;

// const PageButton = styled.button`
//   padding: 0.5rem 1rem;
//   background: ${({ active, theme }) => 
//     active ? theme.colors.primary : theme.colors.light};
//   color: ${({ active, theme }) => 
//     active ? 'white' : theme.colors.text};
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
  
//   &:hover {
//     background: ${({ theme }) => theme.colors.primary};
//     color: white;
//   }
// `;

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

// const StatsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 1rem;
//   margin-bottom: 2rem;
// `;

// const Tabs = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
// `;

// const TabButton = styled.button`
//   padding: 0.5rem 1rem;
//   background: none;
//   border: none;
//   border-bottom: 2px solid ${({ active, theme }) => 
//     active ? theme.colors.primary : 'transparent'};
//   color: ${({ active, theme }) => 
//     active ? theme.colors.primary : theme.colors.textSecondary};
//   font-weight: ${({ active }) => active ? '600' : '400'};
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     color: ${({ theme }) => theme.colors.primary};
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
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// export default LibrarianDashboard;














import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { 
  fetchAllReservations,
  updateReservationStatus,
  checkOutReservation
} from '../../features/reservations/reservationsSlice';
import { Container, Grid } from '../../styles/utils';
import ReservationCard from '../../components/Reservations/ReservationCard';
import StatsCard from '../../components/Dashboard/StatsCard';
import { Button, Select } from '../../components/UI/index';
import { toast } from 'react-toastify';

const LibrarianDashboard = () => {
  const dispatch = useDispatch();
  const { 
    reservations, 
    status: resStatus,
    pagination 
  } = useSelector((state) => state.reservations);
  const [activeTab, setActiveTab] = useState('pending');
  const [filters, setFilters] = useState({
    status: 'pending',
    page: 1,
    limit: 10
  });

  useEffect(() => {
    dispatch(fetchAllReservations(filters));
  }, [dispatch, filters]);

  const filteredReservations = {
    pending: reservations.filter(r => r.status === 'pending'),
    approved: reservations.filter(r => r.status === 'approved'),
    declined: reservations.filter(r => r.status === 'declined'),
    checked_out: reservations.filter(r => r.status === 'checked_out'),
    returned: reservations.filter(r => r.status === 'returned')
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      if (status === 'checked_out') {
        await dispatch(checkOutReservation(id)).unwrap();
        toast.success('Checked out successfully');
      } else {
        await dispatch(updateReservationStatus({ id, status })).unwrap();
        const message = {
          'approved': 'Reservation approved',
          'declined': 'Reservation declined',
          'returned': 'Item returned successfully'
        }[status];
        toast.success(message);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to update reservation');
    }
  };

  const stats = [
    { title: 'Pending Reservations', value: filteredReservations.pending.length, icon: '⏳' },
    { title: 'Approved Reservations', value: filteredReservations.approved.length, icon: '👍' },
    { title: 'Checked Out', value: filteredReservations.checked_out.length, icon: '📦' },
    { title: 'Returned', value: filteredReservations.returned.length, icon: '🔄' },
    { title: 'Declined Reservations', value: filteredReservations.declined.length, icon: '👎' },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFilters(prev => ({ ...prev, status: tab, page: 1 }));
  };

  const getStatusOptions = (currentStatus) => {
    switch(currentStatus) {
      case 'pending':
        return [
          { value: 'approved', label: 'Approve' },
          { value: 'declined', label: 'Decline' }
        ];
      case 'approved':
        return [
          { value: 'checked_out', label: 'Check Out' },
          { value: 'declined', label: 'Decline' }
        ];
      case 'checked_out':
        return [
          { value: 'returned', label: 'Mark Returned' }
        ];
      default:
        return [];
    }
  };

  return (
    <DashboardContainer>
      <Container>
        <Header>
          <h1>Reservation Management</h1>
          <p>Manage all library reservations</p>
        </Header>
        
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatsCard 
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              onClick={() => handleTabChange(stat.title.split(' ')[0].toLowerCase())}
            />
          ))}
        </StatsGrid>
        
        <Tabs>
          {Object.keys(filteredReservations).map(tab => (
            <TabButton 
              key={tab}
              active={activeTab === tab}
              onClick={() => handleTabChange(tab)}
            >
              {tab.replace('_', ' ')} ({filteredReservations[tab].length})
            </TabButton>
          ))}
        </Tabs>
        
        {resStatus === 'loading' ? (
          <Loading>Loading reservations...</Loading>
        ) : filteredReservations[activeTab].length === 0 ? (
          <EmptyState>No {activeTab.replace('_', ' ')} reservations</EmptyState>
        ) : (
          <>
            <Grid>
              {filteredReservations[activeTab].map((reservation) => {
                const options = getStatusOptions(reservation.status);
                return (
                  <ReservationCard 
                    key={reservation._id} 
                    reservation={reservation}
                  >
                    {options.length > 0 && (
                      <StatusControls>
                        <Select
                          options={options}
                          onChange={(e) => handleStatusUpdate(reservation._id, e.target.value)}
                          placeholder="Update status..."
                        />
                      </StatusControls>
                    )}
                  </ReservationCard>
                );
              })}
            </Grid>
            <Pagination>
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                <PageButton
                  key={page}
                  active={page === pagination.page}
                  onClick={() => setFilters(prev => ({ ...prev, page }))}
                >
                  {page}
                </PageButton>
              ))}
            </Pagination>
          </>
        )}
      </Container>
    </DashboardContainer>
  );
};

// Add new styled components
const StatusControls = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

// Add pagination styles
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.light};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${({ active }) => active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default LibrarianDashboard;