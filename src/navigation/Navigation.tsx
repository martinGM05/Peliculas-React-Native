import React from 'react';
import { createStackNavigator, StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export interface DetailMovieScreenProps extends
  StackScreenProps<MovieStackNavigator, 'DetailScreen'>,
  StackNavigationProp<MovieStackNavigator, 'DetailScreen'> { }

export type MovieStackNavigator = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}
 
const Stack = createStackNavigator<MovieStackNavigator>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            // headerStyle: {
            //     backgroundColor: 'blue',
            // }
            // cardStyle: {
                // backgroundColor: 'white',
            // }
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}