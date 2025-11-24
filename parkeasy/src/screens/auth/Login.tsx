import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'

const Login = ({navigation} : any) => {
  return (
    <View style={styles.screen}>

      <Text>Login</Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry={true} />
      <Button title="Login" onPress={() => navigation.navigate('RoleSelect')} />
      <Button title="Register" onPress={() => navigation.navigate('Signup')} />

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
    flexDirection: 'column'
  }
})