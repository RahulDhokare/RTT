import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
const FooterNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer1} >
        <FontAwesome6 name="grip-lines" size={24} color="black" />
        <Text>At a Glance</Text>
        </View>
        <View style={styles.footer1}>
        <Feather name="book-open" size={24} color="black" />
        <Text>Booking Diary</Text>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    // width:'100%',
    height:'12%',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center',
    backgroundColor:'white',
    elevation:20,
    marginVertical:'100%',
    
    // borderBottomLeftRadius:20,
    // borderBottomRightRadius:20
    // marginHorizontal:20
  },
  footer1:{
    justifyContent:'center',
    alignItems:'center',
    padding:10
  }
})
export default FooterNav