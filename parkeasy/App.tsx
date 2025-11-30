
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './src/screens/auth/splash'
import Login from './src/screens/auth/Login'
import Signup from './src/screens/auth/Signup'
import RoleSelect from './src/screens/auth/RoleSelect'
import Nav from './src/navigation/nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from './src/theme/color'






const App = () => {
  return (
      <SafeAreaView
        style = {styles.screen}
      >
        <StatusBar
          backgroundColor= 'Black'
          barStyle = 'dark-content'
        />
         <Nav />
      </SafeAreaView>
     
     
  )
}

export default App

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: colors.lightPrimary
    //  justifyContent: 'center'
  }
})
