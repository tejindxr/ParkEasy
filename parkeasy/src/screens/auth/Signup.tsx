import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'


const Signup = ({navigation} : any) => {
  return (
   <View style={styles.screen}>

      <Text >SignUp</Text>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry={true} />
      <Button title="SignUp" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Signup

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