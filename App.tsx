import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { LogBox } from 'react-native';
import FadeScreen from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({children}: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
        <Navigation />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default App;