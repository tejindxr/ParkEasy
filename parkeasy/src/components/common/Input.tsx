import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { colors } from '../../theme/color'

const Input = ({style , ...props} : any) => {
  return (
    <View style = {styles.container } >
      <TextInput
        {...props}
        style = {[styles.input , style]}
        placeholderTextColor={colors.grey}
      ></TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    container :{
        marginVertical: 10,
    }
})