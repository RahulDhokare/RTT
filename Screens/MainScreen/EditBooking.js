import React, { useState,useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox'; // or from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import ShimmerUi from './ShimmerUi';
import { DayTime , MealType } from '../../Constant';
import { updateBooking } from './../../Api/BookingService';
import { fetchBookings,deleteBooking } from "./../../Api/BookingService";




export default function EditBookingForm({route}) {
      const { bookingId } = route.params;
  console.log("Received Booking ID:", bookingId);
  const navigation = useNavigation();
  useEffect(() => {
      loadBookings();
    }, []);

    

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [isChecked, setChecked] = useState(true);
  const [isChecked1, setChecked1] = useState(false);
  const [ischeckBox, setIscheckBox] = useState(false);
  const [ischeckBox1, setIscheckBox1] = useState(false);
  const [guests, setGuests] = useState('');
  const [mobile, setMobile] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [duration, setDuration] = useState('');
  const [dietary, setDietary] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});
  const timeOptions = Object.entries(DayTime[0]);
  const mealOptions = Object.entries(MealType[0]);
   const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
      try {
        const response = await fetchBookings();
        const Booking = response.data;
        const editBokking = Booking.find((item) => item.id === bookingId);
        console.log("Edit Booking:", editBokking);
        setBookings(editBokking);
        setEmail(editBokking.email);
        setFirstName(editBokking.firstName);
        setLastName(editBokking.lastName);
        setMobile(editBokking.mobile);
        setGuests(editBokking.guests);
        setDuration(editBokking.duration);
        setDietary(editBokking.dietary);
        setSpecialRequest(editBokking.specialRequest);
        setNotes(editBokking.notes);
        setSelectedValue(editBokking.timeSlot);
        setSelectedValue1(editBokking.mealType);
        setDate(new Date(editBokking.date));
        setChecked(editBokking.visitType === 'Walk-in');
        setChecked1(editBokking.visitType === 'On-Call');
        setIscheckBox(editBokking.specialOffers);
        setIscheckBox1(editBokking.marketingConsent);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };


  const handleSubmit = async () =>  {
    if (!selectedValue) return alert('Please select a time slot');
    if (!selectedValue1) return alert('Please select a meal type');
    if (!guests) return alert('Please enter number of guests');
    if (!mobile) return alert('Please enter mobile number');
    if (!firstName) return alert('Please enter first name');
    if (!lastName) return alert('Please enter last name');
    if (!email) return alert('Please enter email');
    if (!duration) return alert('Please enter time duration');

    const bookingData = {
      
      visitType: isChecked ? 'Walk-in' : 'On-Call',
      date,
      timeSlot: selectedValue,
      mealType: selectedValue1,
      guests,
      mobile,
      firstName,
      lastName,
      email,
      duration,
      dietary,
      specialRequest,
      notes,
      specialOffers: ischeckBox,
      marketingConsent: ischeckBox1,
    };

    console.log('Booking Data:', bookingData);
     try {
    await updateBooking(bookingId,bookingData);
    alert('Booking updated successfully!')
    navigation.navigate("heder");
      } catch (error) {
    console.error('Error submitting booking:', error);
    alert('Error submitting booking. Please try again.');
  }

    // alert('Form submitted successfully!');
    // navigation.navigate('SuccessScreen', { bookingData });
  };

  const validationGuest = () => {
    const newErrors = { ...errors };
    // Validate guests
  if (!guests.trim()) {
    newErrors.guests = 'Guests is required';
  }
  //  else if (!/^\d{1}$/.test(guests)) {
  //   newErrors.guests = 'Enter a valid number (1–99)';
  // }
   else {
    delete newErrors.guests;
  }
  setErrors(newErrors);
  };

  const validationMobile = () => {
    const newErrors = { ...errors };
    // Validate mobile
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{1,10}$/.test(mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    } else {
      delete newErrors.mobile;
    }
    setErrors(newErrors);
  };
  const validationEmail = (email) =>{
    console.log("email",email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const newErrors = { ...errors };
    // Validate Email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid Email';
    } else {
      delete newErrors.email;
    }
    setErrors(newErrors);
  }
  const validationFirstName = () =>{
    const newErrors = { ...errors };
    // Validate First Name
  if (!firstName.trim()) {
    newErrors.firstName = 'First Name is required';
  }else {
    delete newErrors.firstName;
  }
  setErrors(newErrors);
  }
  const validationLastName = () =>{
    const newErrors = { ...errors };
    // Validate Last Name
   if (!lastName.trim()) {
    newErrors.lastName = 'Last Name is required';
  } else {
    delete newErrors.lastName;
  }
  setErrors(newErrors);
  }
  const validationDuration = () =>{
    const newErrors = { ...errors };
     // Validate Duration
     if (!duration.trim()) {
      newErrors.duration = 'Time Duration is required';
    }else {
      delete newErrors.duration;
    }
    setErrors(newErrors);
  }
  const validationMealType = () =>{
    const newErrors = { ...errors };
    
    // Validate meal type
    // if (!mealOptions.trim()) {
    //   newErrors.mealOptions = 'Meal Type is required';
    // } else {
    //   delete newErrors.mealOptions;
    // }
    setErrors(newErrors);
  }
  const validationTimeSlot = () =>{
    const newErrors = { ...errors };
     // Validate timeslot
    // if (!timeOptions.trim()) {
    //   newErrors.timeOptions = 'Time Slot is required';
    // } else {
    //   delete newErrors.timeOptions;
    // }
    setErrors(newErrors);
  }
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., checking auth, fetching configs)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return<ShimmerUi/>
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.chipContainer}>
          <TouchableOpacity
            style={[styles.chip, isChecked && styles.chipSelected]}
            onPress={() => setChecked(true)}
          >
            <Text>Walk-in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chip, !isChecked && styles.chipSelected]}
            onPress={() => setChecked(false)}
          >
            <Text>On-Call</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textside}>Opening Date:</Text>
        <View style={styles.input}>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Text> {date.toDateString()}</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <Text style={styles.textside}>Time Slot<Text style={{color:'red'}}>*</Text></Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Select time slot" value="" />
            {timeOptions.map(([key, value]) => (
              <Picker.Item key={key} label={value} value={value} />
            ))}
          </Picker>
        </View>

        <Text style={styles.textside}>
          Meal Type<Text style={{color:'red'}}>*</Text> 
        </Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedValue1}
            onValueChange={(itemValue) => setSelectedValue1(itemValue)}
          >
            <Picker.Item label="Select meal type" value="" />
            {mealOptions.map(([key, value]) => (
              <Picker.Item key={key} label={value} value={key} />
            ))}
          </Picker>
        </View>

        <Text style={styles.textside}>Number of Guests<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={[styles.input, errors.guests && { borderColor: "red" }]}
          placeholder="Enter Number of Guests"
          keyboardType="numeric"
          value={guests}
          onChangeText={(text) => {
            setGuests(text);
             validationGuest(text); 
          }}
          onBlur={() => validationGuest(guests)}
        />
        {errors.guests && <Text style={styles.errorText}>{errors.guests}</Text>}

        <Text style={styles.textside}>Mobile Number<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={[styles.input, errors.mobile && { borderColor: "red" }]}
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={(text) => {
            setMobile(text);
             validationMobile(text); 
          }}
          onBlur={() => validationMobile(mobile)}
        />
        {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

        <Text style={styles.textside}>First Name<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={[styles.input, errors.firstName && { borderColor: "red" }]}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={(text) => {
            setFirstName(text);
            if (errors.firstName) validationFirstName(text); 
          }}
          onBlur={() => validationFirstName(firstName)}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        )}

        <Text style={styles.textside}>Last Name<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={[styles.input, errors.lastName && { borderColor: "red" }]}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={(text) => {
            setLastName(text);
            if (errors.lastName) validationLastName(text); 
          }}
          onBlur={() => validationLastName(lastName)}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        )}

        <Text style={styles.textside}>Email<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={[styles.input, errors.email && { borderColor: "red" }]}
          placeholder="Enter Email"
          keyboardType="email-address"
          value={email}
          // onChangeText={setEmail}
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) validationEmail(text); 
          }}
          onBlur={() => validationEmail(email)}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.textside}>Time Duration (in minutes)<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={[styles.input, errors.duration && { borderColor: "red" }]}
          placeholder="Time Duration"
          keyboardType="numeric"
          value={duration}
          onChangeText={(text) => {
            setDuration(text);
            if (errors.duration) validationDuration(text); 
          }}
          onBlur={() => validationDuration(duration)}
        />
        {errors.duration && (
          <Text style={styles.errorText}>{errors.duration}</Text>
        )}

        <Text style={styles.textside}>Dietary Request</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Dietary Request (if any)"
          value={dietary}
          onChangeText={setDietary}
        />

        <Text style={styles.textside}>Special Request</Text>
        <TextInput
          style={styles.input}
          placeholder="Special Request (if any)"
          value={specialRequest}
          onChangeText={setSpecialRequest}
        />

        <Text style={styles.textside}>Notes</Text>
        <TextInput
          style={styles.input}
          placeholder="Write Something (if any)"
          value={notes}
          onChangeText={setNotes}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={ischeckBox}
            onValueChange={setIscheckBox}
            color={"red"}
          />
          <Text style={styles.checkboxText}>
            Customer wishes special offers to be sent via email.
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={ischeckBox1}
            onValueChange={setIscheckBox1}
            color={"red"}
          />
          <Text style={styles.checkboxText}>
            Customer agrees to receive marketing communications.
          </Text>
        </View>

        <TouchableOpacity style={styles.btn1} onPress={handleSubmit}>
          <Text style={styles.login}>Edit Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 16 
    },

  chipContainer: { 
    flexDirection: 'row',
     marginVertical: 10 
    },

  chip: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
    borderColor: 'gray',
  },
  chipSelected: {
    backgroundColor: 'red',
  },
  textside: { 
    marginTop: 10,
     fontWeight: 'bold' 
    },
  dateContainer: {
     marginVertical: 10 ,

    },

  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  selectInput: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxText: {
     marginLeft: 10
     },
  btn1: {
    backgroundColor: 'tomato',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  login: {
    color: 'white',
    fontWeight: 'bold',
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 45, // Same as your TextInput height
    justifyContent: 'center',
    marginVertical: 5,
  },
  picker: {
    width: '100%',
  },

  errorText: {
    color: 'red',
    marginLeft: 5,
    fontSize: 12,
  }
  
  
});
