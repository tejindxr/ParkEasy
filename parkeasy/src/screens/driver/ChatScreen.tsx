import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/color'

const ChatScreen = () => {
  return (
    <View style = {styles.container}>
      <Text>ChatScreen is here</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor : colors.bg
  }
})