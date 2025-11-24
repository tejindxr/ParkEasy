import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { colors } from '../../theme/color';

const Button = ({title , onPress , disables , styleButton} : any) => {
  return (
    <TouchableOpacity
        style = {[  styles.button , styleButton]}
        onPress = {onPress}
        disabled = {disables}
        >
        <Text style = {styles.text}>{title}</Text>

    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    button:{
        backgroundColor : colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 16,
    }
})