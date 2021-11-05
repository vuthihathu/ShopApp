import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,} from 'react-native';

import DetailsScreen from './src/views/screens/DetailsScreen'
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import DressScreen from './src/views/screens/DressScreen';
import CartScreen from './src/views/screens/CartScreen';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from './StackNavigation';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigation= () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeScreen') {
              iconName = 'ios-list';
    
            } else if (route.name === 'CartScreen') {
              iconName = 'cart';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
         
        })}
        options ={{header :()=> null}}
        >
        <Tab.Screen name="HomeScreen" component={StackNavigation} options ={{header :()=> null}}/>
        <Tab.Screen name="CartScreen" component={CartScreen} /> 
    </Tab.Navigator>
    );
  };
  
export default TabNavigation;