
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './src/screens/auth/splash'
import Login from './src/screens/auth/Login'
import Signup from './src/screens/auth/Signup'
import RoleSelect from './src/screens/auth/RoleSelect'
import Nav from './src/navigation/nav'






const App = () => {
  return (
    <View style={styles.screen}>
      {/* <Splash /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <Nav />
      {/* <RoleSelect /> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  screen:{
    flex: 1,
 //  alignContent: 'center',
  //  justifyContent: 'center'
  }
})
