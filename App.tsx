import { StatusBar } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_700Bold
} from '@expo-google-fonts/mulish';

import {Routes} from './src/routes'

import theme from './src/global/styles/theme';

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent={true} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}
