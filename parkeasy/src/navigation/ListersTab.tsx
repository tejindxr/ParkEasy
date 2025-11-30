import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/lister/HomeScreen';
import SpotsScreen from '../screens/lister/SpotsScreenLister';
import ProfileScreenLister from '../screens/lister/ProfileScreen';
import { colors } from '../theme/color';

const Tab = createBottomTabNavigator();

const ListerTabs = () => {
  return (
   <Tab.Navigator
        screenOptions={ {
            headerShown : false, 
            tabBarShowLabel : false,
            tabBarStyle :{
                height : 60,
                backgroundColor : colors.lightPrimary,
                
            }
        }}
   >
      
        <Tab.Screen 
            name = "Spots"
            component = {SpotsScreen}
            options={{
                tabBarIcon : ({focused})=>{
                    return <Image source = {(require('../assets/spotsIcon.png'))}
                    style = {styles.icons}
                    />
                }
            }}
        />

        <Tab.Screen 
            name ="Home"
            component={HomeScreen}
            options={{
                tabBarIcon : ({focused})=>{
                    return <Image source = {(require('../assets/homeIcon.png'))}
                    style = {styles.icons}
                    />
                }
            }}
        />

        <Tab.Screen
            name = "Profile"
            component = {ProfileScreenLister}
            options={{
                tabBarIcon : ({focused})=>{
                    return <Image source = {(require('../assets/profileIcon.png'))}
                    style = {styles.icons}
                    />
                }
            }}
        />

   </Tab.Navigator>
  )
}

export default ListerTabs

const styles = StyleSheet.create({
     icons:{
        width : 50,
        height : 50,                    
        marginTop : 30
    }
})