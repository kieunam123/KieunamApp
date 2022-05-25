import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

//FROM THIS PROJECT=====================================================
  import Tabs from './Tabs'                                             
  import {FoodList,Login,Profile,WelcomeScreen} from '../screen' 
//======================================================================

  const Stack = createNativeStackNavigator();
  export default function App(props){
      return <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name={"Home"} component={WelcomeScreen}/>
                <Stack.Screen name={"Menu"} component={FoodList}/>
                <Stack.Screen name={"Profile"} component={Profile}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"Tabs"} component={Tabs}/>
          </Stack.Navigator>
      </NavigationContainer>

  }