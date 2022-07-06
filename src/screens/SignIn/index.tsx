import React from "react";

import {
  Container,
  Header,
  LogoContainer,
  AppLogo,
  SavePassText,
  LoginText,
  Footer,
  SignInButton,
  IconContainer,
  Title,
} from "./styles";

import GoogleSvg from "../../assets/google.svg";

export function SignIn() {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <AppLogo source={require("../../../assets/images/icon.png")} />
          <SavePassText>SavePass</SavePassText>
        </LogoContainer>

        <SavePassText>
          Nunca esqueça as senhas dos seus serviços favoritos.
        </SavePassText>

        <LoginText>Faça Login com uma das contas abaixo</LoginText>
      </Header>

      <Footer>
        <SignInButton>
          <IconContainer>
            <GoogleSvg />
          </IconContainer>
          <Title>Entrar com Google</Title>
        </SignInButton>
      </Footer>
    </Container>
  );
}
