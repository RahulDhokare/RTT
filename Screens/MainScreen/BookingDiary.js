import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const BookingDiary = () => {
    const peoplecount= 0;
  const bookingCount = 0;
  return (
    <View style={styles.mainConatiner}>
         <View style={styles.chipContainer}>
                <View style={styles.chip}>
                  <TouchableOpacity>
                    <Text>Dinner</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.chip}>
                <TouchableOpacity>
                  <Text>Lunch</Text>
                  </TouchableOpacity>
                </View>
         </View>
    <View style={styles.container}>
    <Text style={styles.total}>Total Guests: </Text>
    <Ionicons name="people-outline" size={24} color="black" />
    <Text style={styles.count}>{peoplecount}</Text>
    <Text style={styles.bookingText}> ({bookingCount} Booking)</Text>
    </View>

    <View style={styles.BookingDetails}>
        <Text>12 Rahul | 2 Guests</Text>
        <Text>98255555555</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainConatiner:{
        // backgroundColor:'red',
        height:'71%'
    },
    chipContainer:{
        flexDirection:'row',
        margin:10,
      },
      chip:{
        backgroundColor:'white',
        padding:10,
        margin:10,
        borderRadius:15
      },
      container: {
        // flex: 1, 
        padding: 20,
        flexDirection: 'row', 
        // justifyContent: 'center',
        // alignItems: 'center',
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
      BookingDetails: {
        // width: '100%',
        height:'30%',
        // backgroundColor: 'red',
      },
})

export default BookingDiary