import styled from "styled-components";

export const ListContainer = styled.section`
  margin-top: 30px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 0;
    list-style: none;
  }
`;

export const GuideCard = styled.li`
  background: white;
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
  }
`;

export const StatusBadge = styled.span<{ $status: string }>`
  align-self: flex-start;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;

  background-color: ${({ $status }) => {
    switch ($status) {
      case "Pendiente":
        return "#f4a26133";
      case "En tránsito":
        return "#e9c46a33";
      case "Entregada":
        return "#2a9d8f33";
      default:
        return "#ccc";
    }
  }};

  color: ${({ $status }) => {
    switch ($status) {
      case "Pendiente":
        return "#f4a261";
      case "En tránsito":
        return "#e9c46a";
      case "Entregada":
        return "#2a9d8f";
      default:
        return "#333";
    }
  }};
`;

export const StatusSelect = styled.select`
  margin-top: 6px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

export const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.8rem;

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }
`;

export const HistoryButton = styled(ActionButton)`
  background-color: #9c27b0;
`;
