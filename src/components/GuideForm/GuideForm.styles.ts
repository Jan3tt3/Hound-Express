// src/components/GuideForm/GuideForm.styles.ts
import styled from "styled-components";

export const Form = styled.form`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;
