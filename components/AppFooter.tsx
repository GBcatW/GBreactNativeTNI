import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppFooter = (): React.JSX.Element => {
  const hello = "Hello TNI Footer";
  const hello2 = <Text>Hello JSX</Text>;
  const isLogin = false;
  return (
    <View>
      <Text style={styles.mytext}>
        {hello} Date:{new Date().toLocaleDateString()}
      </Text>
      {hello2}
      {isLogin && <Text>Welcome to my world renew your defination</Text>}
      {isLogin ? <Text>Welt come to my</Text> : <Text>ยังไม่ได้ Login</Text>}
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  mytext: {
    color: "red",
  },
});
