import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const BookingDetails = () => {
  const peoplecount = 0;
  const bookingCount = 0;

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.total}>Total Expected:</Text>
        <Ionicons name="people-outline" size={24} color="black" />
        <Text style={styles.count}>{peoplecount}</Text>
        <Text style={styles.bookingText}>({bookingCount} Booking)</Text>
      </View>

      <View style={styles.bookingInfo}>
        <Ionicons name="information-circle-outline" size={24} color="black" />
        <Text style={styles.bookingInfoText}>
          There is no booking for selected date.
        </Text>
      </View>

      <View style={styles.separator} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  total: {
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
  bookingInfo: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bookingInfoText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default BookingDetails;
