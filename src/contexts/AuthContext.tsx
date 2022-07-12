import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  img?: string;
}

interface AuthContextData {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  user: IUser;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    async function getUserStoragedData() {
      const userStoraged = await AsyncStorage.getItem("@savepass:user");

      if (userStoraged) {
        const userFormatted = JSON.parse(userStoraged);
        setUser(userFormatted);
      }
    }

    getUserStoragedData();
  }, []);

  async function signIn() {
    try {
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );

        const userResponse = await response.json();

        const userAuth = {
          id: userResponse.id,
          name: userResponse.given_name,
          email: userResponse.email,
          img: userResponse.picture,
        };

        setUser(userAuth);

        await AsyncStorage.setItem("@savepass:user", JSON.stringify(userAuth));
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Não foi possível realizar a autenticação");
    }
  }

  async function signOut() {
    setUser({} as IUser);
    await AsyncStorage.removeItem("@savepass:user");
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isAuthenticated: !!user.id }}
    >
      {children}
    </AuthContext.Provider>
  );
}
