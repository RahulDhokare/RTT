import React, { useState } from 'react'
import { View,Text ,StatusBar,StyleSheet,TouchableOpacity} from 'react-native'
import BookingDate from './BookingDate'
import BookingDetails from './BookingDetails'
import FooterNav from './FooterNav'
import AddBooking from './AddBooking'
import RestaurantName from './RestaurantName'
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import BookingDiary from './BookingDiary';
const Header = () => {
    const navigation = useNavigation();
    const [activeScreen, setActiveScreen] = useState('glance');
    
  return (
    <View style={styles.conainer}>
      <View style={styles.content}>
        <RestaurantName/>
        <StatusBar />
        <BookingDate />
        {activeScreen === 'glance' ? <BookingDetails /> : <BookingDiary />}
        </View>
        <View style={styles.addBookingContainer}>
        <TouchableOpacity 
         onPress={() => navigation.navigate('Add New Booking')}>
        <AntDesign name="pluscircle" size={60} color="red" />    
        {/* <AddBooking />  */}
        </TouchableOpacity>
        
      </View>
      
        <View>
        <FooterNav style={styles.footer} onChangeScreen={setActiveScreen} activeScreen={activeScreen} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  conainer:{
    flex:1,
    // backgroundColor:'white'
  },
  
  addBookingContainer: {
    position: 'absolute',
    bottom: 120, 
    right: 20, 
    // zIndex: 10, 
  },
  // footer:{
  //   position: 'absolute',
  //   bottom: 0,
  //   // width: '100%',
  // }
})

export default Header