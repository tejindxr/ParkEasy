import { Alert, StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import {signup} from '../../services/auth'
import { useState } from 'react'
import { colors } from '../../theme/color'



const Signup = ({navigation , route } : any) => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const role = route.params?.role || "";
  
  const handleSignup =  async() =>{
    if (!email.trim() || !password.trim()) {
        Alert.alert("Error", "Email and password cannot be empty!");
        return; // stop process here
      }
      
     try{
      const res = await signup(email , password , role)
      console.log("Signup successful" , res);
      Alert.alert("Signup Successful" , res.msg || "Accout Created")
      navigation.navigate('Login');
     }
     catch(error: any){
      console.log("Signup error", error);
      Alert.alert("Signup Failed" , error?.error || "Locha hai bidu koe ");
     }
  }
  return (
   <View style={styles.screen}>

      <Text >SignUp</Text>
      <Input placeholder="Name" />
      <Input placeholder="Email"  value = {email}  onChangeText = {setEmail}/>
      <Input placeholder="Password" secureTextEntry={true}  value = {password} onChangeText = {setPassword}/>
      <Button title="SignUp" onPress={handleSignup} />
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
    backgroundColor : colors.bg,
    flexDirection: 'column'
  }
})