import React, { useState } from 'react';
import { HeaderButtonsProvider } from 'react-navigation-header-buttons';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';

import CreatePostScreen from './screens/CreatePostScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen';
import Toast from 'react-native-toast-message';




  const HomeStack = createNativeStackNavigator();
  const ProductStack = createNativeStackNavigator();
  const LoginStack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  function HomeStackScreen(){
    return (
    <HomeStack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        //headerStyle:{backgroundColor:'#ffbefa'},
       // headerTintColor:'#e333d5',
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
      </HomeStack.Navigator>
    )
  }
  function ProductStackScreen(){
    return (
    <ProductStack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        //headerStyle:{backgroundColor:'#ffbefa'},
       // headerTintColor:'#e333d5',
        headerTitleStyle:{fontWeight:'bold'},
        }} 
      >  
          <ProductStack.Screen name="Products" component={ProductScreen}/>
          <ProductStack.Screen name="Details" component={DetailScreen}/>
      </ProductStack.Navigator>
    )
  }
  function LoginStackScreen(){
    return (
    <LoginStack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerTitleStyle:{fontWeight:'bold'},
        headerShown:false,
        }} 
      >  
          <LoginStack.Screen name="Login" component={LoginScreen}/>
      </LoginStack.Navigator>
    )
  }
  const App = (): React.JSX.Element => {
    const [isLogin] = useState(false);


  return (
    <>
     <SafeAreaProvider>
      <NavigationContainer>
       <HeaderButtonsProvider stackType='native'>
       {isLogin ? (
        <Drawer.Navigator 
        screenOptions={{headerShown: false}}
         drawerContent={(props) => <MenuScreen{...props}/>}
         >
         <Drawer.Screen name = "HomeStack" component={HomeStackScreen}/>
         <Drawer.Screen name = "ProductStack" component={ProductStackScreen}/>
         </Drawer.Navigator>
       )
        : (
          <LoginStackScreen/>
        )
      }
       </HeaderButtonsProvider>
      </NavigationContainer>
    </SafeAreaProvider>
    <Toast/>
    </>
  );
}

export default App;