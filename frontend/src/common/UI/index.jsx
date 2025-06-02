import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ large }) => (large ? '0.75rem 1.5rem' : '0.5rem 1rem')};
  background: ${({ variant, theme }) => 
    variant === 'secondary' ? theme.colors.secondary : 
    variant === 'danger' ? theme.colors.danger : 
    variant === 'success' ? theme.colors.success : 
    theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ large }) => (large ? '1.1rem' : '0.9rem')};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};

  &:hover {
    background: ${({ variant, theme }) => 
      variant === 'secondary' ? theme.colors.secondaryDark : 
      variant === 'danger' ? theme.colors.dangerDark : 
      variant === 'success' ? theme.colors.successDark : 
      theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const Textarea = styled.textarea`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 1rem;
  width: 100%;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;




// Remove the JSX component and replace with styled component only
export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-flex;

  span {
    &:first-child {
      color: ${({ theme }) => theme.colors.primary};
    }
    &:last-child {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

// Then use it in your components like this:
<Logo>
  <span>Town</span>
  <span>Book</span>
</Logo>

// export const Logo = () => {
//   return (
//     <LogoContainer>
//       <span>Town</span>
//       <span>Book</span>
//     </LogoContainer>
//   );
// };

// export const LogoContainer = styled.div`
//   font-size: 1.5rem;
//   font-weight: 700;

//   span:first-child {
//     color: ${({ theme }) => theme.colors.primary};
//   }

//   span:last-child {
//     color: ${({ theme }) => theme.colors.secondary};
//   }
// `;

export const Alert = styled.div`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  margin-bottom: 1rem;
  background: ${({ variant, theme }) => 
    variant === 'success' ? theme.colors.successLight : 
    variant === 'error' ? theme.colors.dangerLight : 
    variant === 'warning' ? theme.colors.warningLight : 
    theme.colors.infoLight};
  color: ${({ variant, theme }) => 
    variant === 'success' ? theme.colors.successDark : 
    variant === 'error' ? theme.colors.dangerDark : 
    variant === 'warning' ? theme.colors.warningDark : 
    theme.colors.infoDark};
  border-left: 4px solid ${({ variant, theme }) => 
    variant === 'success' ? theme.colors.success : 
    variant === 'error' ? theme.colors.danger : 
    variant === 'warning' ? theme.colors.warning : 
    theme.colors.info};
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.primary};
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);v
    }
  }
`;


// export const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: 700;

//   span:first-child {
//     color: ${({ theme }) => theme.colors.primary};
//   }

//   span:last-child {
//     color: ${({ theme }) => theme.colors.secondary};
//   }
// `;



