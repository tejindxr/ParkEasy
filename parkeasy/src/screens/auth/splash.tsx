import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/common/Button'


const Splash = ({navigation} : any) => {
  return (
    <View style={{flex: 1}}>
     <Image style = {styles.image}
     source={require('../../assets/splash.jpg')}
     />      
      <Text style = {styles.text}>
        ＰａｒｋＥａｓｙ
      </Text>
      <Button title = 'Start' onPress = {()=> navigation.navigate('Login')}
         styleButton ={styles.button }
       ></Button>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    button:{
        width : '70%',
        marginHorizontal : 60
    },
    text :{
        textAlign: 'center',
        paddingTop: 90,
        marginBottom: 600,
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000',
    }
})