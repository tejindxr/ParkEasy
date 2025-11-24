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
      <Button title = 'Start' onPress = {()=> navigation.navigate('Login')} ></Button>
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
    }
    ,text :{
        marginHorizontal: 85,
        paddingTop: 270,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    }
})