import React, { useState } from 'react'
import { View ,Text,StyleSheet,TouchableOpacity,TextInput,Button,Platform } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { useEffect } from 'react';
import * as Calendar from 'expo-calendar';

const AddBooking = () => {
  const navigation = useNavigation();
  const [openingDate, setOpeningDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || openingDate;
    setOpeningDate(currentDate);
  };
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
       <ScrollView>
        <View style={styles.chipContainer}>
        <View style={styles.chip}>
          <TouchableOpacity>
            <Text>Walk-in</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.chip}>
        <TouchableOpacity>
          <Text>On-Call</Text>
          </TouchableOpacity>
        </View>
        </View>
        <Text style={styles.textside}>Opening Date:</Text>
        <View style={styles.dateConatiner}>
       
        <Button title="Create a new calendar" onPress={createCalendar} />

      <DatePicker
        modal
        open={openDatePicker}
        date={openingDate}
        onConfirm={(date) => {
          setOpenDatePicker(false);
          setOpeningDate(date);
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
        </View>
        <Text style={styles.textside}>time Slot</Text>
        <Picker
          style={styles.picker}
        ></Picker>
        <Text style={styles.textside}>Meal Type* (Select Time Slot to update)</Text>
        <Picker
          style={styles.picker1}
        ></Picker>
        <Text style={styles.textside}>Number of Guests*</Text>
        <TextInput
                  style={styles.input}
                  placeholder="Enter Number of Guests"
                />
                <Text style={styles.textside}>Mobile Number*</Text>
        <TextInput
                  style={styles.input}
                  placeholder="Enter Mobile Number"
                />
                <Text style={styles.textside}>First Name*</Text>
        <TextInput
                  style={styles.input}
                  placeholder="Enter First Name "
                />
        <Text style={styles.textside}>Last Name*</Text>
        <TextInput
                  style={styles.input}
                  placeholder="Enter Last Name"
                />
        <Text style={styles.textside}>Email*</Text>
        <TextInput
                  style={styles.input}
                  placeholder=" Enter Email"
                />
         <Text style={styles.textside}>Time Duration (in minute)*</Text>
        <TextInput
                  style={styles.input}
                  placeholder="Time Duration"
                />
        <Text style={styles.textside}>Dietary Request</Text>
        <TextInput
                  style={styles.input}
                  placeholder=" Enter Dietary Request(if any) "
                />
        <Text style={styles.textside}>Special Request</Text>
        <TextInput
                  style={styles.input}
                  placeholder="Special Request(if any) "
                />   
        <Text style={styles.textside}>Notes</Text>
        <TextInput
                  style={styles.input}
                  placeholder="Write Somthing(if any) "
                />    
        <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={ 'red'} />
        <Text style={styles.checkboxText}>Customer wishes special offers to be sent via e-mail.</Text> 
        </View>  
        <View style={styles.checkboxContainer}> 
        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} color={ 'red'} /> 
        <Text style={styles.checkboxText}>Customer wishes special offers to be sent via e-mail.</Text>
        </View>
          <TouchableOpacity style={styles.btn1}>
                <Text style={styles.login}>Create Booking</Text>
              </TouchableOpacity>

       </ScrollView>
       
    </View>
  )
}
async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === 'android'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar' };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: 'Expo Calendar',
    color: 'blue',
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textside:{
    padding:10,
  },
  picker:{
    backgroundColor:'white',
    width:'20%',
    height:40,
    padding:10,
    margin:10,
    borderRadius:25
  },
  picker1:{
    backgroundColor:'white',
    padding:10, 
    margin:10,
    borderRadius:25,
    height:40,
  },
  input:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    // borderRadius: 10,
    elevation: 20,
    height: 50,
  },
  dateConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    margin: 10,
    // padding: 10,
    // marginVertical: 10,
    // paddingHorizontal: 10,
    backgroundColor: 'white',
    // elevation: 20,
    // height: 50,
  },
  btn1: {
    width: '95%',
    // height: 50,
    padding:10,
    margin:10,
    // justifyContent: 'center',
    // paddingVertical: 10,
    elevation: 20,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  login: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',

  } ,
  checkbox: {
    
  },
  checkboxText: {
    marginLeft: 5,
  },
})

export default AddBooking