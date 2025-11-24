import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/color'

const HomeScreen = ({navigation} : any) => {
  return (
    <View style = {styles.home}>
      <Text>HomeScreen is the best</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: colors.bg  
    }
})