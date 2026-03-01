// src/components/Header/Header.styles.ts
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;
