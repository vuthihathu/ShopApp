import { StatusBar } from 'expo-status-bar';
import React from 'react';

import DetailsScreen from './src/views/screens/DetailsScreen'
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import DressScreen from './src/views/screens/DressScreen';
import CartScreen from './src/views/screens/CartScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DressScreen" component={DressScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
}

export {StackNavigation};
