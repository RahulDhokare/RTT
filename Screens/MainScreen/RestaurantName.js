import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

const RestaurantName = () => {
  return (
    <View >
      <View style={styles.container}>
    <Text>Spice And Spirit</Text>
    <Entypo name="dots-three-horizontal" size={24} color="black" />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:20,
        alignItems:'center',
        backgroundColor:'white',
        elevation:20,
        // borderBottomLeftRadius:20,
        // borderBottomRightRadius:20
        // marginHorizontal:20
    }
})

export default RestaurantName