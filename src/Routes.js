import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from './screens/LogInScreen';
import LoggedInScreen from './screens/LoggedInScreen';
import { NavigationContainer } from '@react-navigation/native';



const Routes = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LogIn' component={LogInScreen}/>
        <Stack.Screen name='LoggedIn' component={LoggedInScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default Routes;
