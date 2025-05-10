import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import Logo from "../../assets/playstore-icon.png";
import { loginEmail, loginPassword, Roles } from "../../Constant";

const Login = ({ navigation }) => {
  const [emailfocus, setEmailFocus] = useState(false);
  const [passwordfocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState(Roles[0].role);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});


  const signIn = () => {
//     const newErrors = {};

//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//     }

//     if (!password.trim()) {
//       newErrors.password = "Password is required";
//     }

//     if (!selectedRole) {
//       newErrors.inValid = "Please select a role";
//     }

//    if (email !== loginEmail.email || password !== loginPassword.password) {
//     console.log("invalid", email);
//     newErrors.inValid = "Invalid email or password";
// }
navigation.navigate("heder");

    // if (Object.keys(newErrors).length === 0) {
    //   navigation.navigate("heder");
    // }

    // setErrors(newErrors);
  };

  const validationEmail = (email) => {
    const newErrors = { ...errors };
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      delete newErrors.email;
    }
    setErrors(newErrors);
  };

  const validationPassword = (password) => {
    const newErrors = { ...errors };
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else {
      delete newErrors.password;
    }
    setErrors(newErrors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logo1} />
      </View>
      <Text style={styles.text}>Login To Your Account</Text>

      {/* Email Field */}
      <View
        style={[
          styles.form_field,
          errors.email && { borderColor: "red", borderWidth: 1 },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) validationEmail(text);
          }}
          onBlur={() => validationEmail(email)}
        />
      </View>
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      {/* Password Field */}
      <View
        style={[
          styles.form_field,
          errors.password && { borderColor: "red", borderWidth: 1 },
        ]}
      >
        <TextInput
          placeholder="Password"
          style={styles.inputPassword}
          secureTextEntry={!showPassword}
            onChangeText={(text) => {
            setPassword(text);
            if (errors.password) validationPassword(text);
          }}
          onBlur={() => validationPassword(password)}
        />
        <Octicons
          name={!showPassword ? "eye-closed" : "eye"}
          size={20}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      {/* Role Picker */}
      <View
        style={[
          styles.form_field,
          !selectedRole &&
            errors.inValid && { borderColor: "red", borderWidth: 1 },
        ]}
      >
        <Picker
          selectedValue={selectedRole}
          onValueChange={(itemValue) => setSelectedRole(itemValue)}
          style={styles.picker}
        >
          {Roles.map((role) => (
            <Picker.Item key={role.id} label={role.role} value={role.id} />
          ))}
        </Picker>
      </View>
      {errors.inValid && <Text style={styles.errorText}>{errors.inValid}</Text>}

      {/* Submit Button */}
      <TouchableOpacity onPress={() => signIn()} style={styles.btn1}>
        <Text style={styles.login}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0bec5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: "50%",
    height: "20%",
    marginVertical: 20,
    alignItems: "center",
  },
  logo1: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },
  form_field: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 5,
    height: 55,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  inputPassword: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  picker: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  btn1: {
    width: "90%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d32f2f",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 20,
  },
  login: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: -8,
    marginBottom: 5,
    marginLeft: 25,
    alignSelf: "flex-start",
  },
});

export default Login;
