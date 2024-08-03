import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice} from './styles/styles';
import { useState, useEffect, Component } from "react";

function App(): React.JSX.Element {
  const [fullName, setFullname] = useState('');
  const [message, setMessage] = useState('Message from App.tsx');
  const [footerMessage, setFooterMessage] = useState('Thai-Nichi Institute of Technology');

  useEffect(()=>{
    console.log("Component has mounted")
  },[]);

  useEffect(()=>{
    console.log(`Fullname has changed to : ${fullName}`);
  },[fullName]);//This will run whenever 'fullname' changes

  return (
    <View style={styles.container}>
      <AppHeader fullName = {fullName} message={message}/>
      <Content  message = {message} fullName = {fullName}/>
      <AppFooter footerMessage ={footerMessage} />
      <TextInput
      style = {stylesPractice.input}
      placeholder = "Enter your fullname"
      value={fullName}
      onChangeText={setFullname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent:"space-between"
  },
});

export default App;