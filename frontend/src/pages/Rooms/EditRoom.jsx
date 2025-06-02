import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchRoomById, updateRoom } from '../../features/rooms/roomsSlice';
import { Container } from '../../styles/utils';
import { Button, Input, Textarea, Select } from '../../components/UI/index';
import { toast } from 'react-toastify';

const EditRoom = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { room, status } = useSelector((state) => state.rooms);
  const [formData, setFormData] = useState({
    name: '',
    capacity: '',
    location: '',
    description: '',
    facilities: [],
    image: '',
    isAvailable: true,
  });

  const facilityOptions = [
    'WiFi',
    'Projector',
    'Whiteboard',
    'Air Conditioning',
    'Power Outlets',
    'Wheelchair Access',
    'Soundproof',
  ];

  useEffect(() => {
    dispatch(fetchRoomById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (room) {
      setFormData({
        name: room.name,
        capacity: room.capacity,
        location: room.location,
        description: room.description,
        facilities: room.facilities || [],
        image: room.image,
        isAvailable: room.isAvailable,
      });
    }
  }, [room]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFacilityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        facilities: [...formData.facilities, value],
      });
    } else {
      setFormData({
        ...formData,
        facilities: formData.facilities.filter((f) => f !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRoom({ id, ...formData }))
      .unwrap()
      .then(() => {
        toast.success('Room updated successfully');
        navigate('/rooms');
      })
      .catch((error) => {
        toast.error(error.message || 'Failed to update room');
      });
  };

  if (status === 'loading' && !room) {
    return (
      <Container>
        <Loading>Loading room details...</Loading>
      </Container>
    );
  }

  return (
    <EditRoomContainer>
      <Container>
        <Header>
          <h1>Edit Room</h1>
          <p>Update the details of this reading room</p>
        </Header>

        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label>Room Name *</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Capacity *</Label>
              <Input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                min="1"
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>Location *</Label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
          </FormGroup>

          <FormGroup>
            <Label>Facilities</Label>
            <FacilitiesContainer>
              {facilityOptions.map((facility) => (
                <FacilityItem key={facility}>
                  <input
                    type="checkbox"
                    id={`facility-${facility}`}
                    value={facility}
                    checked={formData.facilities.includes(facility)}
                    onChange={handleFacilityChange}
                  />
                  <label htmlFor={`facility-${facility}`}>{facility}</label>
                </FacilityItem>
              ))}
            </FacilitiesContainer>
          </FormGroup>

          <FormGroup>
            <Label>Image URL</Label>
            <Input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/room-photo.jpg"
            />
          </FormGroup>

          <FormGroup>
            <Label>Availability</Label>
            <Select
              name="isAvailable"
              value={formData.isAvailable}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isAvailable: e.target.value === 'true',
                })
              }
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </Select>
          </FormGroup>

          <Button type="submit" fullWidth>
            Update Room
          </Button>
        </Form>
      </Container>
    </EditRoomContainer>
  );
};

// Reuse styles from AddRoom with minor adjustments
const EditRoomContainer = styled.div`
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

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const FacilitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FacilityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    margin: 0;
  }

  label {
    cursor: pointer;
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default EditRoom;