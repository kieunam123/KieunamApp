import React,{useState} from 'react';
import {StyleSheet,onChangeText,Text,View,Image,ImageBackground,TouchableOpacity,TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';
import {images,icons,FormatFont} from '../constants';
// import FoodList from './FoodList';

export default function FoodItem(props){
    let {name,img,status,price}=props.food
    return(
        <View style={styles.container}>
            
            <Image source={{uri:img}} style={styles.img}/>
            <View style={styles.name}><Text style={styles.name} >{name}</Text></View>
            <Text style={styles.status}>{status}</Text>
            <Text>{price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        height:150,
        paddingTop:20,
        paddingStart:10,
    },

    img:{
        width:100,
        height:100,
        resizeMode:'cover',
        borderRadius:10,
        marginRight:15,
    },
    name:{
        flex:1,
        fontWeight:'bold',
        fontSize:FormatFont.h3,
    },
    status : {
        flex:1,
        
    },

})