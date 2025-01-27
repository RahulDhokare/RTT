import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


const BookingDetails = () => {
  const peoplecount= 0;
  const bookingCount = 0;
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.container}>
    <Text style={styles.total}>Total Expected: </Text>
    <Ionicons name="people-outline" size={24} color="black" />
    <Text style={styles.count}>{peoplecount}</Text>
    <Text style={styles.bookingText}> ({bookingCount} Booking)</Text>
    </View>
    <View style={styles.bookinginfo}>
    <Ionicons name="information-circle-outline" size={24} color="black" />
      <Text style={styles.bookinginfo_text}>
       There is no booking for slected date.
      </Text>
    </View>
    <View style={styles.separator} />
    </View>
    

  )
}
const styles = StyleSheet.create({
  mainConatiner:{
    width:'100%',
    height:'71%',
  },
  container: {
    // flex: 1, 
    padding: 20,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  total:{
    fontSize: 18, 
    fontWeight: 'bold', 
    marginHorizontal: 5,
  },
  count: {
    fontSize: 18, 
    fontWeight: 'bold', 
    marginHorizontal: 5, 
  },
  bookingText: {
    fontSize: 16,
    color: 'black', 
  },
  bookinginfo:{
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  bookinginfo_text:{
    fontSize: 16,
    color: 'black', 
  },
  separator: {
    height: 1, 
    backgroundColor: '#ccc', 
    marginHorizontal: 20, 
    marginVertical: 10, 
    // backgroundColor:'red'
  },
})

export default BookingDetails