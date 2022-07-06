import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

  background-color: #1967fb;

  align-items: center;
  justify-content: flex-end;
`;

export const LogoContainer = styled.View`
  margin-bottom: 24px;
  align-items: center;
`;

export const AppLogo = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 4px;
`;

export const SavePassText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;

export const LoginText = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  margin: 32px 0 120px;
`;

export const Footer = styled.View`
  padding: 0 24px;
  height: 30%;
`;

export const SignInButton = styled(RectButton)`
  background-color: #fff;

  height: ${RFValue(56)}px;
  border-radius: 5px;

  align-items: center;
  flex-direction: row;

  margin-top: -28px;
`;

export const IconContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;

  padding: ${RFValue(16)}px;
  border-color: #f0f2f8;
  border-right-width: 1px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${RFValue(16)}px;
`;
