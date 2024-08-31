import React from 'react';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const App = (): React.JSX.Element => {

  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#ffbefa'},
        headerTintColor:'#e333d5',
        headerTitleStyle:{fontWeight:'bold'},
        }} 
      >  
        <HomeStack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{title:'หน้าหลัก'}} />
        <HomeStack.Screen 
          name='About' 
          component={AboutScreen}
        /*  options={{
            title:'เกี่ยวกับเรา',
            headerStyle:{backgroundColor:'#ffbefa'},
            headerTintColor:'#e333d5',
            headerTitleStyle:{fontWeight:'bold'},
            headerTitleAlign:'center'
            }} */
        /> 
        <HomeStack.Screen name='CreatePost' component={CreatePostScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;