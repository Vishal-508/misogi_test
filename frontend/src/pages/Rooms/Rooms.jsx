import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchRooms } from '../../features/rooms/roomsSlice';
import { Container, Grid } from '../../styles/utils';
import RoomCard from '../../components/Room/RoomCard';
import SearchBar from '../../components/Common/SearchBar';

const Rooms = () => {
  const dispatch = useDispatch();
  const { rooms, status } = useSelector((state) => state.rooms);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
console.log("rroms",rooms)
  return (
    <RoomsContainer>
      <Container>
        <Header>
          <h1>Reading Rooms</h1>
          <p>Browse and reserve our reading rooms</p>
        </Header>

        <Toolbar>
          <SearchBar placeholder="Search rooms..." />
          {user?.isLibrarian && (
            <Button as="a" href="/rooms/add" small>
              Add New Room
            </Button>
          )}
        </Toolbar>

        {status === 'loading' ? (
          <Loading>Loading rooms...</Loading>
        ) : rooms?.data.length === 0 ? (
          <EmptyState>No rooms found</EmptyState>
        ) : (
          <Grid>
            {rooms?.data?.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </Grid>
        )}
      </Container>
    </RoomsContainer>
  );
};

// Reuse styles from Books with minor adjustments
const RoomsContainer = styled.div`
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

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
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

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export default Rooms;