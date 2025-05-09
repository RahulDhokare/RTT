import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const BookingDiary = () => {
  const peoplecount = 0;
  const bookingCount = 0;

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      {/* Chips */}
      <View style={styles.chipContainer}>
        <TouchableOpacity style={styles.chip}>
          <Text style={styles.chipText}>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chip}>
          <Text style={styles.chipText}>Lunch</Text>
        </TouchableOpacity>
      </View>

      {/* Header Summary */}
      <View style={styles.container}>
        <Text style={styles.total}>Total Guests:</Text>
        <Ionicons name="people-outline" size={24} color="black" />
        <Text style={styles.count}>{peoplecount}</Text>
        <Text style={styles.bookingText}>({bookingCount} Booking)</Text>
      </View>

      {/* Booking Details */}
      <View style={styles.bookingDetails}>
        <Text style={styles.bookingItem}>12 Rahul | 2 Guests</Text>
        <Text style={styles.bookingItem}>98255555555</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  chipContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
  },
  chip: {
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderRadius: 20,
    elevation: 2,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
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
  bookingDetails: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 1,
  },
  bookingItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default BookingDiary;
