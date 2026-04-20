import { HeaderContainer, LogoContainer, Logo, Title } from "./Header.styles";
import logo from "../../assets/logo-Hound_Express.png";

export default function Header() {
  return (
    <HeaderContainer as="header" role="banner">
      <LogoContainer>
        <Logo 
          src={logo} 
          alt="Logo de Hound Express, servicio de envíos rápidos en México" 
        />
        <Title as="h1">Hound Express</Title>
      </LogoContainer>
    </HeaderContainer>
  );
}