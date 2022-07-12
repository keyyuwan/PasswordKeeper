import React, { useCallback, useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { AuthProvider } from "./src/contexts/AuthContext";
import { Routes } from "./src/routes";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Rubik_300Light,
          Rubik_400Regular,
          Rubik_500Medium,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
      }}
    >
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </AuthProvider>
    </View>
  );
}
