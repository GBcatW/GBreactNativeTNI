import {StyleSheet, View, Text, Button, Alert } from "react-native";
import React from "react";


type ContextProps ={
    name?: string;
    text?: string;
};

const Content = ({text, name}:ContextProps): React.JSX.Element => {
  return (
    <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
      <Button
        title="Click Me"
        onPress={()=> Alert.alert("Hello", name)}
        color="orange"
        />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
