import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RoleCard from '../../components/RoleCard'
import { colors } from '../../theme/color'
import Button from '../../components/common/Button'


const RoleSelect = ({navigation} : any) => {
    const [role , setRole] = useState('');

  return (
    <View style = {styles.screen}>
        <Text style = {styles.heading}
            >Continue As
        </Text>
        
        <RoleCard
        title="Lister"
        imageSrc = {require('../../assets/lister.png')}
        selected = {role == 'Lister'}
        onPress = {() => setRole('Lister')}
        />
        <RoleCard
        title="Driver"
        selected ={role == 'Driver'}
        imageSrc = {require('../../assets/car.png')}
        onPress = {() => setRole('Driver')}
        />

        <Button title='Continue' 
            styleButton = {{marginTop: 30 , width: 150 }}
            onPress = {() => navigation.navigate('Home')}
           />

    </View>
  )
}

export default RoleSelect

const styles = StyleSheet.create({
    heading :{
        fontSize: 35,
        fontWeight : 'bold',
        fontStyle : 'normal',
        bottom: 30,
        color: colors.text
    },
    screen:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg
    },
   
})