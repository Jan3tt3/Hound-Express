import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  border-left: 3px solid #e0e0e0;
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 5px;
    width: 14px;
    height: 14px;
    background: #457b9d;
    border-radius: 50%;
  }
`;

export const DateText = styled.p`
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 6px;
`;

export const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;

  background-color: ${({ status }) => {
    switch (status) {
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

  color: ${({ status }) => {
    switch (status) {
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