import { StyleSheet, Text, View  , Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ParkScreen from '../screens/driver/ParkScreen';
import ChatScreen from '../screens/driver/ChatScreen';
import ProfileScreen from '../screens/driver/ProfileScreen'
import { colors } from '../theme/color';

const Tab = createBottomTabNavigator();

const DriverTabs = () => {
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
            name = "Chat"
            component = {ChatScreen}
            options = {{
                tabBarIcon : ({focused}) =>{
                    return <Image source = {require('../assets/chatIcon.png')}
                        style = {styles.icons}
                    />
                }
            }}
        />

        <Tab.Screen 
            name ="Park"
            component={ParkScreen}
            options = {{
                tabBarIcon : (focused) =>{
                    return <Image 
                    source = {require('../assets/parkIcon.png')}
                    style = {styles.icons}
                    />
                }
            }}

        />

        

        <Tab.Screen
            name = "Profile"
            component = {ProfileScreen}
            options = {{
                tabBarIcon : (focused) =>{
                    return <Image 
                    source = {require('../assets/profileIcon.png')}
                    style = {styles.icons}
                    />
                }
            }}
        />

   </Tab.Navigator>
  )
}

export default DriverTabs

const styles = StyleSheet.create({
    icons:{
        width : 50,
        height : 50,                    
        marginTop : 30
    }
})