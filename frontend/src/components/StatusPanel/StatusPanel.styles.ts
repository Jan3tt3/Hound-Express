import styled from "styled-components";

export const Panel = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap; 
  justify-content: space-between;
  align-items: stretch;

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
  flex: 1; 
  min-width: 140px; 
  
  background: white;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

interface StatNumberProps {
  $label: string;
}

export const StatNumber = styled.p<StatNumberProps>`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  color: ${({ $label, theme }) => {
    switch ($label) {
      case "Pendientes":
        return "#f4a261";
      case "En tránsito":
        return "#e9c46a";
      case "Entregadas":
        return "#2a9d8f";
      default:
        return theme.colors.primary;
    }
  }};
`;

export const StatLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  flex: 1;
  min-width: 140px;
`;