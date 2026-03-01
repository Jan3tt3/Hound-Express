import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  position: relative;
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: 420px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  background: #f44336;
  color: white;
  border: none;
  border-radius: 50%;

  width: 32px;
  height: 32px;

  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;

  &:hover {
    background: #d32f2f;
  }
`;
