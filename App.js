import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PhoneSearch from './PhoneSearch';
import Reviews from './Reviews';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Phone Search') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Reviews') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="Phone Search" component={PhoneSearch} />
        <Tab.Screen name="Reviews" component={Reviews} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
