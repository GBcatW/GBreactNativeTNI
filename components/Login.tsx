import { View, Text, Button, Alert, TextInput } from 'react-native';
import { stylesLogin} from '../styles/styles';
import React from "react";


const Login = (): React.JSX.Element => {
  
    return (
      <View style={stylesLogin.container}>
          <TextInput style={stylesLogin.input} placeholder = "Enter Name"/>
          <TextInput style={stylesLogin.input} placeholder = "Enter Email"/>
        <Button
          title="Submit"
          />
      </View>
    );
  };
  
  export default Login;
  
  