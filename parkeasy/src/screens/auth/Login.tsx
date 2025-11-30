import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { login } from '../../services/auth'
import { colors } from '../../theme/color'



const Login = ({navigation } : any) => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleLogin = async () => {

  if (!email.trim() || !password.trim()) {
    Alert.alert("Error", "Email and password cannot be empty!");
    return; // stop process here
  }
    try{
       const res = await login(email , password);
       console.log("Login Successful" , res)
       Alert.alert("Success", "Logged in successfully!");
       navigation.navigate("DriverTabs");
    }
    catch(error : any){
      console.log("Login error" , error);
      Alert.alert("error", error?.error || "Invalid email or pass" );
    } 
  };

  return (
    <View style={styles.screen}>

      <Text>Login</Text>
      <Input placeholder="Email"  value = {email} onChangeText = {setEmail}/>
      <Input placeholder="Password" secureTextEntry={true} value = {password} onChangeText = {setPassword}/>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('RoleSelect')} />

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor :colors.bg,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
    flexDirection: 'column'
  }
})