import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Logo from '../../assets/playstore-icon.png';
import Header from '../MainScreen/Header';
import { showMessage } from "react-native-flash-message";



const Login = ({ navigation }) => {
  const [emailfocus, setEmailFocus] = useState(false);
  const [passwordfocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const signIn = () => {                        
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

    if (!strongRegex.test(email)) {
        showMessage({
            message: "Invalid Email",
            description: "Please enter a valid email address.",
            type: "danger",
        });
        return false;
    } else if (password.length < 8) {
        showMessage({
            message: "Weak Password",
            description: "Password must be at least 8 characters long.",
            type: "danger",
        });
        return false;
    }
}

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
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.form_field}>
        <TextInput
          placeholder="Password"
          style={styles.inputPassword}
          secureTextEntry={showPassword === false ? true : false}
          onChangeText={(password) => setPassword(password)}
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
      {/* <TouchableOpacity onPress={() => signIn()} */}
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
    // backgroundColor: '#dbeafe', // Softer background for better contrast
    backgroundColor:'#b0bec5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: '50%',
    height: '20%',
    marginVertical: 20,
    alignItems: 'center',
  },
  logo1: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ensures logo fits well
    borderRadius: 10,
  },
  text: {
    fontSize: 18, // Increased for readability
    color: '#333', // Darker text for better contrast
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15, // Added space below text
  },
  form_field: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 5, // Reduced elevation for subtle depth
    height: 55, // Slightly increased height for better touch target
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16, // Larger font for readability
    color: '#333',
  },
  inputPassword: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  picker: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  btn1: {
    width: '90%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d32f2f', // Darker red for better contrast
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 20,
  },
  login: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1, // Improves legibility
  },
});

export default Login;
