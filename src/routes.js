import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Users', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={({ route }) => ({
            title: route.params.user.login,
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
