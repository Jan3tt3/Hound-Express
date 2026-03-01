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

export const StatCard = styled.div`
  background: white;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const StatNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const StatLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;