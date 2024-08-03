import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <AppHeader text="Message from App.tsx" fullName="Nattawut Worraratphaisarn"/>
      <Content text="Message from App.tsx" name="Nattawut Worraratphaisarn" />
      <StatusBar style="auto" />
      <AppFooter text="Thai-Nichi Institute of Technology"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
