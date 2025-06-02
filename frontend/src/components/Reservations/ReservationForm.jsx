import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Input, Select } from '../UI/index';
import { toast } from 'react-toastify';

const ReservationForm = ({ type, onSubmit }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.startDate) {
      toast.error('Please select a start date');
      return;
    }
    
    if (type === 'room' && !formData.endDate) {
      toast.error('Please select an end date');
      return;
    }

    onSubmit({
      itemId: id,
      type,
      ...formData,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Start Date</Label>
        <Input
          type="datetime-local"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </FormGroup>
      
      {type === 'room' && (
        <FormGroup>
          <Label>End Date</Label>
          <Input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </FormGroup>
      )}
      
      <FormGroup>
        <Label>Notes (Optional)</Label>
        <Input
          as="textarea"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
        />
      </FormGroup>
      
      <Button type="submit" fullWidth>
        Reserve {type === 'book' ? 'Book' : 'Room'}
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export default ReservationForm;