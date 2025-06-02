import styled from 'styled-components';

const StatsCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Value>{value}</Value>
      <Title>{title}</Title>
    </Card>
  );
};

const Card = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Value = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default StatsCard;