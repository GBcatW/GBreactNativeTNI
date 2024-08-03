import { View, Text } from 'react-native';
import { stylesPractice} from '../styles/styles';
import React from "react";

interface AppHeaderProps  {
  fullName: string;
  message: string;
};

const AppHeader = ({message, fullName}: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={stylesPractice.header}>
      <Text style={stylesPractice.headerText}>Input your fullname : </Text>
      <Text style={stylesPractice.headerText}>{fullName}</Text>
      <Text style={stylesPractice.subtitleText}>{message}</Text>
    </View>
  );
};

export default AppHeader;

