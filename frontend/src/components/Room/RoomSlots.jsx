import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createRoomSlots } from '../../features/rooms/roomsSlice';
import { Container } from '../../styles/utils';
import { Button, Input, DateTimePicker } from '../../components/UI/index';
import { toast } from 'react-toastify';

const ManageRoomSlots = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    room: '',
    startDateTime: '',
    endDateTime: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateTimeChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date.toISOString()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createRoomSlots(formData)).unwrap();
      toast.success('Room slots created successfully');
      setFormData({
        room: '',
        startDateTime: '',
        endDateTime: ''
      });
    } catch (error) {
      toast.error(error.message || 'Failed to create room slots');
    }
  };

  return (
    <Container>
      <Header>
        <h1>Create Room Slots</h1>
        <p>Add available time slots for reading rooms</p>
      </Header>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Room ID</Label>
          <Input
            type="text"
            name="room"
            value={formData.room}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Start Date & Time</Label>
          <DateTimePicker
            selected={formData.startDateTime ? new Date(formData.startDateTime) : null}
            onChange={(date) => handleDateTimeChange('startDateTime', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>End Date & Time</Label>
          <DateTimePicker
            selected={formData.endDateTime ? new Date(formData.endDateTime) : null}
            onChange={(date) => handleDateTimeChange('endDateTime', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            required
          />
        </FormGroup>

        <Button type="submit" fullWidth>
          Create Slots
        </Button>
      </Form>
    </Container>
  );
};

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
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

export default ManageRoomSlots;