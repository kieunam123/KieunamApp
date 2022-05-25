import * as React from 'react'
import {FoodList,Login,Profile,WelcomeScreen} from '../screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import {images,icons,FormatFont} from '../constants';
  import {Buttons} from '../components';
const Tab = createBottomTabNavigator();
export default function Tabs(props){
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={WelcomeScreen} />
            <Tab.Screen name={"Menu"} component={FoodList} />
            <Tab.Screen name={"Profile"} component={Profile} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }

})
