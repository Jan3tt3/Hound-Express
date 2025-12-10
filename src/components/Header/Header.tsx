
// src/components/Header/Header.tsx
import { HeaderContainer, LogoContainer, Logo, Title } from "./Header.styles";
import logo from "../../assets/logo-Hound_Express.png";

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="Hound Express Logo" />
        <Title>Hound Express</Title>
      </LogoContainer>
    </HeaderContainer>
  );
}

/*
import { Container, Title } from "./Header.styles";

export default function Header() {
  return (
    <Container>
      <Title>Hound Express</Title>
    </Container>
  );
}

*/
