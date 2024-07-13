import {StyleSheet, View, Text, Button, Alert } from "react-native";
import React from "react";

const onClickMe = () => {
    Alert.alert("Hello", "Input your fullname");
  };

type ContextProps ={
    text:string;
};

const Content = ({text}:ContextProps): React.JSX.Element => {
  return (
    <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
      <Button
        title="Click Me"
        onPress={onClickMe}
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
