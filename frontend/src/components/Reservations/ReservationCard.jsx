// import styled from 'styled-components';
// import { format } from 'date-fns';
// import { FaBook, FaHome, FaCheck, FaTimes, FaClock } from 'react-icons/fa';
// import { Button } from '../UI/index';

// const ReservationCard = ({ 
//   reservation, 
//   showActions = false, 
//   onApprove, 
//   onDecline,
//   showUser = false 
// }) => {
//   const getStatusIcon = () => {
//     switch (reservation.status) {
//       case 'approved':
//         return <FaCheck color="green" />;
//       case 'declined':
//         return <FaTimes color="red" />;
//       default:
//         return <FaClock color="orange" />;
//     }
//   };

//   return (
//     <Card>
//       <CardHeader>
//         {reservation.type === 'book' ? (
//           <FaBook size={20} />
//         ) : (
//           <FaHome size={20} />
//         )}
//         <Title>
//           {reservation.type === 'book' 
//             ? reservation.book.title 
//             : reservation.room.name}
//         </Title>
//         <Status>
//           {getStatusIcon()} {reservation.status}
//         </Status>
//       </CardHeader>

//       <CardBody>
//         {showUser && (
//           <Detail>
//             <strong>User:</strong> {reservation.user.name}
//           </Detail>
//         )}
//         <Detail>
//           <strong>Start:</strong> {format(new Date(reservation.startDate), 'PPpp')}
//         </Detail>
//         {reservation.endDate && (
//           <Detail>
//             <strong>End:</strong> {format(new Date(reservation.endDate), 'PPpp')}
//           </Detail>
//         )}
//         {reservation.notes && (
//           <Detail>
//             <strong>Notes:</strong> {reservation.notes}
//           </Detail>
//         )}
//       </CardBody>

//       {showActions && (
//         <CardFooter>
//           <Button 
//             small 
//             variant="success" 
//             onClick={() => onApprove(reservation._id)}
//           >
//             Approve
//           </Button>
//           <Button 
//             small 
//             variant="danger" 
//             onClick={() => onDecline(reservation._id)}
//           >
//             Decline
//           </Button>
//         </CardFooter>
//       )}
//     </Card>
//   );
// };

// const Card = styled.article`
//   background: white;
//   border-radius: ${({ theme }) => theme.radii.md};
//   box-shadow: ${({ theme }) => theme.shadows.sm};
//   overflow: hidden;
//   transition: transform 0.2s, box-shadow 0.2s;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: ${({ theme }) => theme.shadows.md};
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   padding: 1rem;
//   background: ${({ theme }) => theme.colors.light};
//   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
// `;

// const Title = styled.h3`
//   flex: 1;
//   font-size: 1.1rem;
//   margin: 0;
// `;

// const Status = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   font-size: 0.9rem;
// `;

// const CardBody = styled.div`
//   padding: 1rem;
// `;

// const Detail = styled.p`
//   margin: 0.5rem 0;
//   font-size: 0.9rem;
// `;

// const CardFooter = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   padding: 1rem;
//   border-top: 1px solid ${({ theme }) => theme.colors.border};
// `;

// export default ReservationCard;




















import styled from 'styled-components';
import { format } from 'date-fns';
import { FaBook, FaHome, FaCheck, FaTimes, FaClock } from 'react-icons/fa';
import { Button } from '../UI/index';

const ReservationCard = ({ 
  reservation, 
  showActions = false, 
  onApprove, 
  onDecline,
  showUser = false 
}) => {
  const getStatusIcon = () => {
    switch (reservation.status) {
      case 'approved':
        return <FaCheck color="green" />;
      case 'declined':
        return <FaTimes color="red" />;
      default:
        return <FaClock color="orange" />;
    }
  };

  const getReservationTitle = () => {
    if (reservation.type === 'book') {
      return reservation.book?.title || 'Book Reservation';
    } else {
      return reservation.room?.name || 'Room Reservation';
    }
  };

  return (
    <Card>
      <CardHeader>
        {reservation.type === 'book' ? (
          <FaBook size={20} />
        ) : (
          <FaHome size={20} />
        )}
        <Title>
          {getReservationTitle()}
        </Title>
        <Status>
          {getStatusIcon()} {reservation.status}
        </Status>
      </CardHeader>

      <CardBody>
        {showUser && reservation.user && (
          <Detail>
            <strong>User:</strong> {reservation.user.name || 'N/A'}
          </Detail>
        )}
        <Detail>
          <strong>Pickup Date:</strong> {format(new Date(reservation.pickupDate), 'PPpp')}
        </Detail>
        {reservation.returnDate && (
          <Detail>
            <strong>Return Date:</strong> {format(new Date(reservation.returnDate), 'PPpp')}
          </Detail>
        )}
        {reservation.createdAt && (
          <Detail>
            <strong>Created:</strong> {format(new Date(reservation.createdAt), 'PPpp')}
          </Detail>
        )}
      </CardBody>

      {showActions && (
        <CardFooter>
          <Button 
            small 
            variant="success" 
            onClick={() => onApprove(reservation._id)}
          >
            Approve
          </Button>
          <Button 
            small 
            variant="danger" 
            onClick={() => onDecline(reservation._id)}
          >
            Decline
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

const Card = styled.article`
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
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;


export default ReservationCard;
