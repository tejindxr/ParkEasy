import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/auth/splash';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import RoleSelect from '../screens/auth/RoleSelect';
import HomeScreen from '../screens/user/HomeScreen';


const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
   <NavigationContainer>

    <Stack.Navigator initialRouteName='Splash'>

        <Stack.Screen name = 'Splash' component= {Splash}/>
        <Stack.Screen name = 'Login' component={Login}/>
        <Stack.Screen name = 'Signup' component={Signup}/>
        <Stack.Screen name= 'RoleSelect' component = { RoleSelect}/>
        <Stack.Screen name = 'Home' component = {HomeScreen}/>

    </Stack.Navigator>

   </NavigationContainer>
  )
}

export default Nav

