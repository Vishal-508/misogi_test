// import { useState } from 'react';
// // import { useDispatch, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
// import { fetchRooms as addRoom } from '../../features/rooms/roomsSlice';
// import { Container } from '../../styles/utils';
// import { Button, Input, Textarea, Select } from '../../components/UI/index';
// import { toast } from 'react-toastify';

// const AddRoom = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     capacity: '',
//     location: '',
//     description: '',
//     facilities: [],
//     image: '',
//     isAvailable: true,
//   });

//   const facilityOptions = [
//     'WiFi',
//     'Projector',
//     'Whiteboard',
//     'Air Conditioning',
//     'Power Outlets',
//     'Wheelchair Access',
//     'Soundproof',
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFacilityChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setFormData({
//         ...formData,
//         facilities: [...formData.facilities, value],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         facilities: formData.facilities.filter((f) => f !== value),
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addRoom(formData))
//       .unwrap()
//       .then(() => {
//         toast.success('Room added successfully');
//         navigate('/rooms');
//       })
//       .catch((error) => {
//         toast.error(error.message || 'Failed to add room');
//       });
//   };

//   return (
//     <AddRoomContainer>
//       <Container>
//         <Header>
//           <h1>Add New Room</h1>
//           <p>Fill in the details to add a new reading room</p>
//         </Header>

//         <Form onSubmit={handleSubmit}>
//           <FormRow>
//             <FormGroup>
//               <Label>Room Name *</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label>Capacity *</Label>
//               <Input
//                 type="number"
//                 name="capacity"
//                 value={formData.capacity}
//                 onChange={handleChange}
//                 min="1"
//                 required
//               />
//             </FormGroup>
//           </FormRow>

//           <FormGroup>
//             <Label>Location *</Label>
//             <Input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label>Description</Label>
//             <Textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label>Facilities</Label>
//             <FacilitiesContainer>
//               {facilityOptions.map((facility) => (
//                 <FacilityItem key={facility}>
//                   <input
//                     type="checkbox"
//                     id={`facility-${facility}`}
//                     value={facility}
//                     checked={formData.facilities.includes(facility)}
//                     onChange={handleFacilityChange}
//                   />
//                   <label htmlFor={`facility-${facility}`}>{facility}</label>
//                 </FacilityItem>
//               ))}
//             </FacilitiesContainer>
//           </FormGroup>

//           <FormGroup>
//             <Label>Image URL</Label>
//             <Input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               placeholder="https://example.com/room-photo.jpg"
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label>Availability</Label>
//             <Select
//               name="isAvailable"
//               value={formData.isAvailable}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   isAvailable: e.target.value === 'true',
//                 })
//               }
//             >
//               <option value="true">Available</option>
//               <option value="false">Not Available</option>
//             </Select>
//           </FormGroup>

//           <Button type="submit" fullWidth>
//             Add Room
//           </Button>
//         </Form>
//       </Container>
//     </AddRoomContainer>
//   );
// };

// const AddRoomContainer = styled.div`
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

// const Form = styled.form`
//   max-width: 800px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const FormRow = styled.div`
//   display: flex;
//   gap: 1.5rem;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const FormGroup = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const Label = styled.label`
//   font-weight: 500;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const FacilitiesContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
// `;

// const FacilityItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   input {
//     margin: 0;
//   }

//   label {
//     cursor: pointer;
//   }
// `;

// export default AddRoom;







import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createRoom } from '../../features/rooms/roomsSlice';
import { Container } from '../../styles/utils';
import { Button, Input, Textarea, Select } from '../../components/UI/index';
import { toast } from 'react-toastify';

const AddRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFacilityChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      facilities: checked 
        ? [...prev.facilities, value] 
        : prev.facilities.filter(f => f !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createRoom(formData)).unwrap();
      toast.success('Room created successfully');
      navigate('/rooms');
    } catch (error) {
      toast.error(error.message || 'Failed to create room');
    }
  };

  return (
    <AddRoomContainer>
      <Container>
        <Header>
          <h1>Add New Room</h1>
          <p>Fill in the details to add a new reading room</p>
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
          <Button type="submit" fullWidth loading={status === 'loading'}>
            Add Room
          </Button>
        </Form>
      </Container>
    </AddRoomContainer>
  );
};


const AddRoomContainer = styled.div`
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

export default AddRoom;