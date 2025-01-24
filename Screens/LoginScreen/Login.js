import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Logo from '../../assets/playstore-icon.png';
import Header from '../MainScreen/Header';


const Login = ({ navigation }) => {
  const [emailfocus, setEmailFocus] = useState(false);
  const [passwordfocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logo1} />
      </View>
      <Text style={styles.text}>Login To Your Account</Text>
      <View style={styles.form_field}>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
      </View>
      <View style={styles.form_field}>
        <TextInput
          placeholder="Password"
          style={styles.inputPassword}
          secureTextEntry={showPassword === false ? true : false}
        />
        <Octicons
          name={showPassword == false ? "eye-closed" : "eye"}
          size={20}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={styles.form_field}>
        <Picker
          selectedValue={selectedRole}
          onValueChange={(itemValue) => setSelectedRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Role" value="" />
          <Picker.Item label="Restaurant Owner" value="Admin" />
          <Picker.Item label="Restaurant Manager" value="Managerger" />
          <Picker.Item label="Supervisor" value="Supervisor" />
        </Picker>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('heder')}
        style={styles.btn1} >
        <Text style={styles.login}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '40%',
    height: '20%',
    marginVertical: 20,
    alignItems: 'center',
  },
  logo1: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  form_field: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 20,
    height: 50, // Ensures all fields have the same height
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%', // Matches the parent's height
  },
  inputPassword: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%', // Matches the parent's height
  },
  picker: {
    flex: 1,
    height: '100%', // Matches the parent's height
    paddingHorizontal: 10, // Adds padding for consistency
  },
  btn1: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    paddingVertical: 10,
    elevation: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  login: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
