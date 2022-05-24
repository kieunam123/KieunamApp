import React,{useState,useEffect} from 'react';
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
import users from '../respositories/users';
export default function Profile(props){

    const[user,setUser] = useState({})
    
    useEffect(()=>{
        users.getUserDetail().then(responseUser => setUser(responseUser))
    },[])
    const {name,email,phone,gender,age,regdate,national,city}=user
    // debugger
    // users.getUserDetail()
    return(
        <View style={styles.container}>
            <Text style={styles.text}>mail:{email}</Text>
            <Text style={styles.text}>name:{name}</Text>
            <Text style={styles.text}>age:{age}</Text>
            <Text style={styles.text}>national:{national}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:FormatFont.h2
    }
});

