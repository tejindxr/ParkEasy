import { Image ,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/color'

const RoleCard = ({title , imageSrc , onPress , selected}: any) => {
  return (
    <TouchableOpacity onPress={onPress}
    
    style={[styles.card , selected && styles.selectedCard]}>
        
        <Text style = {styles.title}>{title}</Text>

        < Image style = {styles.image} source={imageSrc}>
        </Image>
    </TouchableOpacity>
  )
}

export default RoleCard

const styles = StyleSheet.create({
  card: {

    backgroundColor: colors.card ,
    width : 250,
    height : 200,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
    image:{
        height: 100,
        width: 100
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        bottom: 10
    },
    selectedCard:{
      borderColor: 'black'
    }
})