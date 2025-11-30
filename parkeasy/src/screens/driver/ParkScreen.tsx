import { PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect } from 'react'
import { colors } from '../../theme/color'
import MapView, { Marker } from 'react-native-maps'

const ParkScreen = ({navigation} : any) => {

  const locationPermisiion= async () =>{
    if(Platform.OS === 'android'){
        const grant = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    
        if(grant !== PermissionsAndroid.RESULTS.GRANTED){
        console.log("Permission not granted")
        }
    }
  };

  useEffect( () =>{
    locationPermisiion();
  });

  return (
    <View style = {styles.home}>
      {/* <Text>ParkScreen is here</Text> */}
      <MapView
        style = {styles.map}
        showsUserLocation = {true}
        initialRegion={{
          latitude: 28.6139,
          longitude: 77.2090,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* <Marker
          coordinate={{ latitude: 28.6139, longitude: 77.2090 }}
          title="Sample Spot"
          description="Parking spot available"
        /> */}
        
      </MapView>
    </View>
  )
}

export default ParkScreen

const styles = StyleSheet.create({
    home:{
        flex:1,
        // justifyContent : 'center',
        // alignItems: 'center',
        // backgroundColor: colors.bg  
    },
    map:{
      flex : 1,
    }
})