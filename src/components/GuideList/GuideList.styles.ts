import styled from "styled-components";

export const List = styled.div`
  margin-bottom: 1rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  margin-right: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
`;
