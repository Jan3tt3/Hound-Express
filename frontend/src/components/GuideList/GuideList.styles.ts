import styled from "styled-components";

export const ListContainer = styled.section`
  margin-top: 30px;
`;

export const GuideCard = styled.div`
  background: white;
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;

  background-color: ${({ status }) =>
    status === "Activa"
      ? "#4caf50"
      : status === "En tránsito"
      ? "#ff9800"
      : "#2196f3"};

  color: white;
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
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    opacity: 0.9;
  }
`;

export const HistoryButton = styled(ActionButton)`
  background-color: #9c27b0;
`;
