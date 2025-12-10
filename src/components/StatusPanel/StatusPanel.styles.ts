import styled from "styled-components";

export const Panel = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

export const Counter = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
