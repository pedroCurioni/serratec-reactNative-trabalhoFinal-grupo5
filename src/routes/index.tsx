import React from 'react';
import { Icon } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import Home from '../pages/Home';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return(
    <TabNavigation.Navigator screenOptions={{
      headerShown:false,
      tabBarStyle:{backgroundColor: '#4c4747', borderBottomWidth: 0, borderTopWidth: 0 },
      tabBarShowLabel: false
    }}>
      <TabNavigation.Screen
        name='HomeTabScreen'
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon 
              name='home'
              color={focused ? "#e05456" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{
      headerShown:false}}>
        <StackNavigation.Screen
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          name='Home'
          component={Home}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Routes;