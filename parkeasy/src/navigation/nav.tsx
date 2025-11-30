import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/auth/splash';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import RoleSelect from '../screens/auth/RoleSelect';
import ParkScreen from '../screens/driver/ParkScreen';
import ChatScreen from '../screens/driver/ChatScreen';
import ProfileScreen from '../screens/driver/ProfileScreen';
import DriverTabs from './DriverTabs';
import ListerTabs from './ListersTab';
import HomeScreen from '../screens/lister/HomeScreen';
import SpotsScreen from '../screens/lister/SpotsScreenLister';
import ProfileScreenLister from '../screens/lister/ProfileScreen';



const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
   <NavigationContainer>

    <Stack.Navigator initialRouteName='ListerTabs'>

        <Stack.Screen 
        name = 'Splash' 
        component= {Splash}
        options={{ headerShown: false }}
        />

        <Stack.Screen name = 'Login' component={Login}/>

        <Stack.Screen name = 'Signup' component={Signup}/>

        <Stack.Screen name= 'RoleSelect' component = { RoleSelect}/>
        
        {/* Driver Tabs */}
        <Stack.Screen
         name = 'DriverTabs' component = {DriverTabs}
         options={{ headerShown: false }}
         />

        <Stack.Screen 
         name = 'ParkScreen' 
         component = {ParkScreen}
         options={{ headerShown: false }}
         />

        <Stack.Screen 
         name = 'ChatScreen'
         component = {ChatScreen} 
         options={{ headerShown: false }}
         />

        <Stack.Screen 
         name = 'ProfileScreen'
         component = {ProfileScreen} 
         options={{ headerShown: false }}
         />



         {/* Lister Tabs */}
        <Stack.Screen
         name = 'ListerTabs' component = {ListerTabs}
         options={{ headerShown: false }}
         />

        <Stack.Screen 
         name = 'HomeScreen' 
         component = {HomeScreen}
         options={{ headerShown: false }}
         />

        <Stack.Screen 
         name = 'SpotsScreen'
         component = {SpotsScreen} 
         options={{ headerShown: false }}
         />

        <Stack.Screen 
         name = 'ProfileScreenLister'
         component = {ProfileScreenLister} 
         options={{ headerShown: false }}
         />

    </Stack.Navigator>

   </NavigationContainer>
  )
}

export default Nav

