import React from "react";

import { useAuth } from "../../hooks/useAuth";

import GoogleSvg from "../../assets/google.svg";
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

interface INavigate {
  navigate: (name: string) => void;
}

export function SignIn() {
  const { signIn } = useAuth();

  async function handleSignIn() {
    await signIn();
  }

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
        <SignInButton onPress={handleSignIn}>
          <IconContainer>
            <GoogleSvg />
          </IconContainer>
          <Title>Entrar com Google</Title>
        </SignInButton>
      </Footer>
    </Container>
  );
}
