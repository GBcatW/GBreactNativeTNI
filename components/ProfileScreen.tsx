import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import { stylesProfile } from '../styles/styles' // เรียกใช้สไตล์จากไฟล์ styles.ts
import Login from "./Login";

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
    <View style={stylesProfile.container}>
      <View style={stylesProfile.profileContainer}>
        <Image source={ProfileImage} style={stylesProfile.profileImage} />
        <View>
          <Text style={stylesProfile.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleChangeName} />
          <Text></Text>
          <Button title="CHANGE IMAGE" onPress={handleChangeImg} />
        </View>
      </View>
      <Login/>
    </View>
  );
};

export default ProfileSrceen;