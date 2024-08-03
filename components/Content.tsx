import { View, Text, Button, Alert } from 'react-native';
import { stylesPractice} from '../styles/styles';
import React from "react";


interface ContextProps {
    message: string;
    fullName: string;
};

const Content = ({message, fullName}:ContextProps): React.JSX.Element => {
  const [displayFullname, setDisplayFullname] = React.useState('');

  const handleButtonClick = () =>{
    setDisplayFullname(fullName);
    Alert.alert("Hello", `Input your fullname : ${fullName}`);
  };
  return (
    <View style={stylesPractice.content}>
        <Text style={stylesPractice.text}>{message}</Text>
        <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button
        title="Click Me"
        onPress={handleButtonClick}
        color="orange"
        />
    </View>
  );
};

export default Content;

