import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import Feather from '@expo/vector-icons/Feather';

const BookingDate = () => {
  const today = new Date();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = daysOfWeek[today.getDay()];

   const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(today)
  return (
    <View style={styles.container}>
      <Text style={styles.datetext}>{dayName} {formattedDate} </Text>
      <View style={styles.innerContainer}>
      <Feather name="refresh-ccw" size={24} color="red" />
      <Text style={{marginLeft:10,color:'red'}}>Refresh </Text>
      </View>
      {/* <View style={styles.border} /> */}
    </View>
    // <View style={styles.border} />
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    padding:20,
    alignItems:'center',
    elevation:20,
    // backgroundColor:'white',
    // backgroundColor:'red',
  },
  innerContainer:{
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'space-between',
  },
  datetext:{
    fontWeight:'bold',
    fontSize:15,
    color:'black',
  }
  // border:{
    
  //  width:'80%',
  //  borderBottomColor:'black',
  //  borderBottomWidth:1,
   
  // }
})
export default BookingDate