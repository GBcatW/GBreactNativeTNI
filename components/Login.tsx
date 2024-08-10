import { View, Text, Button, Alert, TextInput } from 'react-native';
import { stylesLogin} from '../styles/styles';
import React, { useState } from "react";


const Login = (): React.JSX.Element => {
  
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const validateEmail = (email:string):boolean=>{
      const recheckEmail = /\S+@\S+\.\S+/;
      return recheckEmail.test(email);
    }

    const handlesubmit = () => {
      /* if(!(name || email)){
        Alert.alert("Error","Please Enter Name\nPlease Enter Email",[{text:"OK"}]);
        return;
      } */
     let errorMessage="";
      if(!name){
        /* Alert.alert("Alert","Please Enter Name",[{text:"OK"}]);
        return; */
        errorMessage +="Please Enter Name\n";
      }
      if(!email){
       /*  Alert.alert("Alert","Please Enter Email",[{text:"OK"}]);
        return; */
        errorMessage +="Please Enter Email\n"
      }else if(!validateEmail(email)){
        errorMessage +="Invalid Email Format\n";
      }
      if(!password){
         errorMessage +="Please Enter Password"
       }else if(password.length<6){
         errorMessage +="Password must be at least 6 characters"
       }
      if(errorMessage){
        Alert.alert("Error",errorMessage,[{text:"OK"}]);
        return;
      }
      Alert.alert("Alert","Success",[{text:"OK"}])
    };

    return (
      <View style={stylesLogin.container}>
          <TextInput style={stylesLogin.input} 
          placeholder = "Enter Name"
          value={name}
          onChangeText={setName}
          />
          <TextInput style={stylesLogin.input} 
          placeholder = "Enter Email"
          value={email}
          onChangeText={setEmail}
          />
          <TextInput style={stylesLogin.input} 
          placeholder = "Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          />
        <Button
          title="Submit" onPress={handlesubmit}
          />
      </View>
    );
  };
  
  export default Login;
  
  