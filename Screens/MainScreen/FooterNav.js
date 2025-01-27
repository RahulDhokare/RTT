import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const FooterNav = ({ onChangeScreen, activeScreen }) => {
  return (
    <View style={styles.container}>
      {/* Glance Button */}
      <View style={styles.footer1}>   
        <TouchableOpacity
          style={[
            styles.button,
            activeScreen === 'glance' && styles.activeButton, // Highlight active button
          ]}
          onPress={() => onChangeScreen('glance')}
        ><FontAwesome6  style={styles.icon}name="grip-lines" size={24} color="black" />
          <Text style={styles.buttonText}> At a Glance</Text>
        </TouchableOpacity>
      </View>

      {/* Booking Diary Button */}
      <View style={styles.footer1}>
        
        <TouchableOpacity
          style={[
            styles.button,
            activeScreen === 'bookingDiary' && styles.activeButton, // Highlight active button
          ]}
          onPress={() => onChangeScreen('bookingDiary')}
        ><Feather style={styles.icon} name="book-open" size={24} color="black" />
          <Text style={styles.buttonText}>Booking Diary</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '35%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 20,
    // marginVertical: '100%',
    // backgroundColor:'green'
  },
  footer1: {
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  button: {
    padding: 5,
    borderRadius: 5,
  },
  // activeButton: {
  //   backgroundColor: '#007bff', // Highlight the active button
  // },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  icon:{
    marginHorizontal:25,
    
  }
});

export default FooterNav;
