import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 16px;
  border-radius: 12px;
  text-align: center;

  box-shadow: 0 4px 12px rgba(2, 6, 23, 0.06);

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Number = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
`;