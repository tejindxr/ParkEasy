import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { colors } from '../../theme/color'

const ProfileScreen = () => {
  return (
    <View style = {styles.container}>

      <Image source={require('../../assets/car.png')} style={styles.image} />
   
      <Text style = {styles.name}>  Swagblower's Cat </Text>
      <Text style = {styles.mail}>  Swagblower@gmail.com  </Text>

    <View style = {styles.info}>
      <Text style = {styles.texts}>Edit Profile</Text> 
      <Text style = {styles.texts}>History</Text>
      <Text style = {styles.texts}>Invite a friend </Text>
      <Text style = {styles.texts}>Settings</Text>
      <Text style = {styles.texts}>Help</Text>
      <Text style = {styles.texts}>Logout</Text>

    </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container :{
    flex : 1,
    //  justifyContent : 'center',
     alignItems : 'center' ,
    //  flexDirection : 'column' ,
     backgroundColor : colors.bg ,
     paddingLeft : 20 ,
     paddingRight : 20 

  },
  image:{
    marginTop: 40 ,
    marginBottom : 25 ,
    width: 140,
    height: 140, 
    borderRadius: 100 ,
    borderWidth: 2,
    borderColor : 'black'

  } ,
  info :{
    backgroundColor : 'white',
    paddingTop: 20 ,
    paddingHorizontal: 20,
    borderRadius : 30,
    width : '95%'

  },
  mail:{
    backgroundColor : 'lightblue',
    fontSize: 15 ,
    color : 'blue',
    borderRadius : 10 ,
    padding: 10 ,
    marginVertical : 25 

  },
  name:{
    fontSize: 25 ,
  },
  texts:{
    fontSize : 20,
    fontWeight : '600',
    marginBottom : 25,
    justifyContent : 'center'
  }
})