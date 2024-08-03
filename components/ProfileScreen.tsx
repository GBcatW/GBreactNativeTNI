import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import {styles} from "../styles/styles";

const ProfileSrceen = (): React.JSX.Element => {
  const [name, setName] = useState("Nattawut Worraratphaisarn");
  const [ProfileImage, setImg] = useState(require("../assets/Profile_1.jpg"));  
   const Img1 = require("../assets/Profile_1.jpg")
   const Img2 = require("../assets/Profile_2.png")
  const handleChangeName = () => {
    setName(name == "New Name" ? "Nattawut Worraratphaisarn" : "New Name");
  };
  const handleChangeImg = () => {
    setImg(
        ProfileImage == Img2
        ? Img1
        : Img2  
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleChangeName} />
          <Text></Text>
          <Button title="CHANGE IMAGE" onPress={handleChangeImg} />
        </View>
      </View>
    </View>
  );
};

export default ProfileSrceen;