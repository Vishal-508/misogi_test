import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchRoomById } from "../../features/rooms/roomsSlice";
import { createReservation } from "../../features/reservations/reservationsSlice";
import { Container } from "../../styles/utils";
import { Button } from "../../components/UI/index";
import ReservationForm from "../../components/Reservations/ReservationForm";
import { Link } from 'react-router-dom';

const RoomDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { room, status } = useSelector((state) => state.rooms);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchRoomById(id));
  }, [dispatch, id]);

  const handleReserve = (reservationData) => {
    dispatch(createReservation(reservationData))
      .unwrap()
      .then(() => {
        navigate("/reservations");
      });
  };

  if (status === "loading") {
    return (
      <Container>
        <Loading>Loading room details...</Loading>
      </Container>
    );
  }

  if (!room) {
    return (
      <Container>
        <NotFound>Room not found</NotFound>
      </Container>
    );
  }

  return (
    <DetailsContainer>
      <Container>
     <FlexHeader>
          <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
          {user?.role === "1" && ( // Only show for librarians
            <EditButton as={Link} to={`/rooms/${id}/edit`}>
              Edit Room
            </EditButton>
          )}
        </FlexHeader>

        <RoomInfo>
          <RoomImage
            src={
              room?.image?.trim()
                ? room?.image
                : "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg"
            }
            alt={room?.name}
          />

          <Details>
            <Title>{room?.name}</Title>
            <Description>{room?.description}</Description>

            <Meta>
              <MetaItem>
                <strong>Capacity:</strong> {room?.capacity || "N/A"} people
              </MetaItem>

              <MetaItem>
                <strong>Status:</strong>{" "}
                {room?.isAvailable !== undefined
                  ? room?.isAvailable
                    ? "Available"
                    : "Occupied"
                  : "Unknown"}
              </MetaItem>

              <MetaItem>
                <strong>Location:</strong> {room?.location || "Not specified"}
              </MetaItem>
              {room?.facilities?.length > 0 && (
                <MetaItem>
                  <strong>Facilities:</strong> {room?.facilities?.join(", ")}
                </MetaItem>
              )}
            </Meta>
          </Details>
        </RoomInfo>

        {user && !user?.role ==="1" &&(
          <ReservationSection>
            <h3>Reserve this room</h3>
            <ReservationForm type="room" onSubmit={handleReserve} />
          </ReservationSection>
        )}
      </Container>
    </DetailsContainer>
  );
};

// Reuse styles from BookDetails with minor adjustments
const DetailsContainer = styled.div`
  padding: 2rem 0;
`;

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const EditButton = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary};
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.danger};
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const RoomImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  align-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-self: flex-start;
  }
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Meta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const MetaItem = styled.div`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

const ReservationSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default RoomDetails;
