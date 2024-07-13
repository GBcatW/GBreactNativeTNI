import { StyleSheet, View, Text } from "react-native";
import React from "react";

type AppHeaderProps = {
    text: string;
};

const AppHeader = ({text}:AppHeaderProps): React.JSX.Element => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
        <Text style={styles.subtitleText}>Message from App.ts</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});
