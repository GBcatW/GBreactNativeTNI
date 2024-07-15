import { StyleSheet, View, Text } from "react-native";
import React from "react";

type AppHeaderProps = {
  fullName?: string;
  text?: string;
};

const AppHeader = ({text, fullName}: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{fullName}</Text>
      <Text style={styles.subtitleText}>{text}</Text>
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
