import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
import { StackNavigationProp } from "@react-navigation/stack";

interface HeaderProps {
  user?: {
    name: string;
    avatar_url: string;
  };
}

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
  SignIn: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function Header({ user }: HeaderProps) {
  const { navigate, goBack } = useNavigation<NavigationProps>();

  function handleAddPass() {
    navigate("RegisterLoginData");
  }

  function handleSignOut() {
    navigate("SignIn");
  }

  return (
    <Container
      hasUserData={!!user}
      style={{
        ...(user
          ? {
              backgroundColor: "#1967FB",
            }
          : {
              backgroundColor: "#FFFFFF",
            }),
      }}
    >
      {user ? (
        <>
          <AboutUser>
            <View>
              <Avatar source={{ uri: user.avatar_url }} />
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

          {/* <AddButton onPress={handleAddPass}>
            <Icon name="plus" color="#FFFFFF" size={24} />
          </AddButton> */}
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
