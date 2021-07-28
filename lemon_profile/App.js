import 'react-native-gesture-handler';
import React from 'react';
import Start from "./Start";
import Main from "./Main";
import Chatbot from './Chatbot';
import Weekly from './Weekly';
import Came from './Came';
import Vitamin from './Vitamin';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

// bottombar
function TabStack(){
  return(
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:'#F4F4F4', inactiveBackgroundColor:'#F4F4F4'}}
    screenOptions={({route})=>({
      tabBarIcon: ()=>{
      if (route.name==='Home'){
        return <Entypo name="home" size={28} color='#000000'/>;
      }else if (route.name==='Weekly'){
        return <FontAwesome5 name="calendar-alt" size={28} color='#000000'/>
      } else if (route.name==='Camera'){
        return <MaterialCommunityIcons name="camera-iris" size={28} color='#000000'/>
      }
    },
    })}>
       <Tab.Screen name="Home" component={Main}/>
       <Tab.Screen name="Weekly" component={Weekly}/>
       <Tab.Screen name="Camera" component={Came} />
    </Tab.Navigator>
  )
}

// page 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Main" component={TabStack}/>
        <Stack.Screen name="Weekly" component={Weekly}/>
        <Stack.Screen name="Vitamin" component={Vitamin}/>
        <Stack.Screen name="Chatbot" component={Chatbot}/>
        <Stack.Screen name="Camera" component={Came}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

