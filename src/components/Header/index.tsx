import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  AboutUser,
  Avatar,
  TextContainer,
  HelloMessage,
  BoldText,
  SecondaryMessage,
  AddButton,
  SignOutButton,
  Icon,
  BackButton,
  Title,
} from "./styles";

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
  SignIn: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface HeaderProps {
  showUserData: boolean;
}

export function Header({ showUserData = false }: HeaderProps) {
  const { user, signOut } = useAuth();
  const { navigate, goBack } = useNavigation<NavigationProps>();

  function handleAddPass() {
    navigate("RegisterLoginData");
  }

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Container
      hasUserData={showUserData}
      style={{
        ...(showUserData
          ? {
              backgroundColor: "#1967FB",
            }
          : {
              backgroundColor: "#FFFFFF",
            }),
      }}
    >
      {showUserData ? (
        <>
          <AboutUser>
            <View>
              <Avatar source={{ uri: user.img }} />
            </View>

            <TextContainer>
              <HelloMessage>
                Olá, <BoldText>{user.name}</BoldText>
              </HelloMessage>

              <SecondaryMessage>Sinta-se seguro aqui</SecondaryMessage>
            </TextContainer>
          </AboutUser>

          <SignOutButton onPress={handleSignOut}>
            <Icon name="power" color="#ffffff" size={24} />
          </SignOutButton>

          <AddButton onPress={handleAddPass}>
            <Icon name="plus" color="#FFFFFF" size={24} />
          </AddButton>
        </>
      ) : (
        <>
          <BackButton onPress={goBack}>
            <Icon name="chevron-left" color="#1967FB" size={28} />
          </BackButton>

          <Title>Cadastro de senha</Title>
        </>
      )}
    </Container>
  );
}
