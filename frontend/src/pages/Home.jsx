import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../styles/utils';
import { Button } from '../common/UI';
// import heroImage from '../assets/library-hero.jpg';

const heroImage = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const Home = () => {


  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Welcome to TownBook</h1>
          <p>Your community library for books and reading rooms</p>
          <Button as={Link} to="/books" large>
            Browse Books
          </Button>
          <Button as={Link} to="/rooms" large variant="secondary">
            View Rooms
          </Button>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <h2>Our Services</h2>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>📚</FeatureIcon>
              <h3>Book Reservations</h3>
              <p>Reserve books from our extensive collection and pick them up at your convenience.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🏠</FeatureIcon>
              <h3>Reading Rooms</h3>
              <p>Book our comfortable reading rooms for study sessions or quiet reading time.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>⏰</FeatureIcon>
              <h3>Easy Scheduling</h3>
              <p>Simple and intuitive interface to manage all your reservations in one place.</p>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <HowItWorks>
        <Container>
          <h2>How It Works</h2>
          <Steps>
            <Step>
              <StepNumber>1</StepNumber>
              <h3>Browse</h3>
              <p>Explore our collection of books and reading rooms.</p>
            </Step>
            <Step>
              <StepNumber>2</StepNumber>
              <h3>Reserve</h3>
              <p>Select your desired item and choose a pickup time.</p>
            </Step>
            <Step>
              <StepNumber>3</StepNumber>
              <h3>Enjoy</h3>
              <p>Pick up your book or use the reading room at the scheduled time.</p>
            </Step>
          </Steps>
        </Container>
      </HowItWorks>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${heroImage}) center/cover no-repeat;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  ${Button} {
    margin: 0 0.5rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.light};

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
`;

const HowItWorks = styled.section`
  padding: 4rem 0;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Step = styled.div`
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 40px;
    right: -50px;
    width: 100px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primaryLight};
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: block;
    }
  }

  h3 {
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto;
`;

export default Home;