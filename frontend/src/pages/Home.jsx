import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Card,OuterContainer } from '../components/UI';
import { FaClipboardList, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';

const Home = () => {
  return (
    <OuterContainer>
    <Container>
      <Hero>
        <h1>Welcome to Homepage</h1>
       
      </Hero>

      
        
    </Container>
    </OuterContainer>
  );
};

// const OuterContainer = styled.div`
// width:100svw;
//   margin: 0 auto;
// `;

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 1rem;

    h1 {
      font-size: 3rem;
    }
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FeatureCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export default Home;