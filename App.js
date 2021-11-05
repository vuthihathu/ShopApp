import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

import CartScreen from './src/views/screens/CartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from './StackNavigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/views/screens/HomeScreen';
import TabNavigation from './TabNavigation';


export default function App() {
  return (
    <NavigationContainer>
        <TabNavigation/>
  </NavigationContainer>
  );
}