import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchUserReservations, cancelReservation } from '../../features/reservations/reservationsSlice';
import { Container } from '../../styles/utils';
import { Button } from '../../components/UI/index';
import { toast } from 'react-toastify';
import { FaBook, FaHome, FaTimes, FaCheck, FaClock, FaCalendarAlt } from 'react-icons/fa';

const Reservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reservations, status } = useSelector((state) => state.reservations);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(fetchUserReservations());
    }
  }, [dispatch, user]);

  const handleCancel = (reservationId) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      dispatch(cancelReservation(reservationId))
        .unwrap()
        .then(() => {
          toast.success('Reservation cancelled successfully');
        })
        .catch((error) => {
          toast.error(error.message || 'Failed to cancel reservation');
        });
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <FaCheck color="green" />;
      case 'cancelled':
        return <FaTimes color="red" />;
      case 'pending':
        return <FaClock color="orange" />;
      case 'completed':
        return <FaCalendarAlt color="blue" />;
      default:
        return null;
    }
  };

  return (
    <ReservationsContainer>
      <Container>
        <Header>
          <h1>My Reservations</h1>
          <p>View and manage your current reservations</p>
        </Header>

        {status === 'loading' ? (
          <Loading>Loading your reservations...</Loading>
        ) : reservations.length === 0 ? (
          <EmptyState>
            <h3>No reservations yet</h3>
            <p>Browse our books or rooms to make a reservation</p>
            <Button onClick={() => navigate('/books')}>Browse Books</Button>
            <Button onClick={() => navigate('/rooms')}>View Rooms</Button>
          </EmptyState>
        ) : (
          <ReservationsList>
            {reservations.map((reservation) => (
              <ReservationCard key={reservation._id}>
                <CardHeader>
                  {reservation.type === 'book' ? (
                    <FaBook size={20} />
                  ) : (
                    <FaHome size={20} />
                  )}
                  <Title>
                    {reservation.type === 'book'
                      ? reservation.book?.title || 'Book'
                      : reservation.room?.name || 'Room'}
                  </Title>
                  <Status>
                    {getStatusIcon(reservation.status)} {reservation.status}
                  </Status>
                </CardHeader>

                <CardBody>
                  <Detail>
                    <strong>Date:</strong> {new Date(reservation.startDate).toLocaleString()}
                  </Detail>
                  {reservation.endDate && (
                    <Detail>
                      <strong>End:</strong> {new Date(reservation.endDate).toLocaleString()}
                    </Detail>
                  )}
                  {reservation.notes && (
                    <Detail>
                      <strong>Notes:</strong> {reservation.notes}
                    </Detail>
                  )}
                </CardBody>

                <CardFooter>
                  {reservation.status === 'pending' && (
                    <Button 
                      variant="danger" 
                      onClick={() => handleCancel(reservation._id)}
                    >
                      Cancel
                    </Button>
                  )}
                  {reservation.status === 'approved' && (
                    <Button 
                      variant="success"
                      onClick={() => toast.info('Check-in at the library desk')}
                    >
                      Check In
                    </Button>
                  )}
                </CardFooter>
              </ReservationCard>
            ))}
          </ReservationsList>
        )}
      </Container>
    </ReservationsContainer>
  );
};

const ReservationsContainer = styled.div`
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
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  ${Button} {
    margin: 0 0.5rem;
  }
`;

const ReservationsList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ReservationCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h3`
  flex: 1;
  font-size: 1.1rem;
  margin: 0;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Detail = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default Reservations;