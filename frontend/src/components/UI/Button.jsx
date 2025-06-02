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

// const Button = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   // min-width:120px;
//   box-sizing: boder-box;
//   text-wrap: nowrap;
//   gap: 0.5rem;
//   padding: 0.5rem 1rem;
//   background-color: ${({ theme, variant }) => 
//     variant === 'danger' ? theme.colors.danger : theme.colors.primary};
//   color: white;
//   border: none;
//   border-radius: ${({ theme }) => theme.radii.sm};
//   font-size: 1rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: background-color 0.2s, transform 0.2s;

//   &:hover {
//     background-color: ${({ theme, variant }) => 
//       variant === 'danger' ? theme.colors.dangerDark : theme.colors.primaryDark};
//     transform: translateY(-1px);
//   }

//   &:disabled {
//     background-color: ${({ theme }) => theme.colors.border};
//     cursor: not-allowed;
//     transform: none;
//   }

//   ${({ fullWidth }) => fullWidth && `
//     width: 100%;
//   `}

//   ${({ small }) => small && `
//     padding: 0.25rem 0.5rem;
//     font-size: 0.875rem;
//   `}

//     @media (max-width: 650px) {
//     padding: 0.25rem 0.5rem;
//     font-size: 0.875rem;
//   }
// `;

export default Button;