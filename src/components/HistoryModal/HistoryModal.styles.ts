import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
`;

export const Button = styled.button`
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
`;
