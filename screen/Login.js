import React,{useState} from 'react';
import {Text,View,Image,ImageBackground,TouchableOpacity,TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';
import { Sum2Number, multiply2Number, subtract2Number } from '../ulities/calculator';
import {images,icons,FormatFont} from '../constants';
import {Buttons} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react/cjs/react.production.min';

function Login(props){
    const [validEmail,unvalidEmail] = useState('')
    const [validPassword,unvalidPassword] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
     //let & const here
    return <View style={{
        flex:1,
        //more style here...
    }}>
        <ImageBackground
            source={images.background}
            style={{
                flex: 1,
            }}>
            <View style={{
                flex: 15,
                // more styles here...
            }}>

            </View>

            <View style={{
                flex: 90,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: FormatFont.h2,
                    textTransform: 'uppercase',
                    fontWeight: '800',
                    color: 'white',
                }}>Đăng Nhập</Text>

                <View style={{
                    // margin:1,
                    width: '100%',
                    padding: 20,
                }}>
                    <Text style={{
                        textTransform: 'capitalize',
                        marginBottom: 10,
                        fontSize: FormatFont.normal,
                        color: 'white',
                    }}>Email:</Text>

                    <TextInput
                        placeholder='example@gmail.com'
                        placeholderTextColor={'white'}
                        style={{
                            borderWidth: 1,
                            height: 40,
                            borderRadius: 20,
                            borderStyle: 'solid',
                            padding: 10,
                            borderColor: 'white'
                        }}
                    />

                    <Text style={{
                        textTransform: 'capitalize',
                        marginBottom: 10,
                        fontSize: FormatFont.normal,
                        marginTop: 20,
                        color: 'white'
                    }}>Password:</Text>

                    <TextInput
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        placeholderTextColor={'white'}
                        style={{
                            borderWidth: 1,
                            height: 40,
                            borderColor: 'white',
                            borderRadius: 20,
                            borderStyle: 'solid',
                            padding: 10
                        }}>

                    </TextInput>

                    <TouchableOpacity onPress={() => {
                        return {
                            //function here...
                        }
                    }} style={{
                        marginTop: 30,
                        alignSelf: 'center',
                        borderWidth: 1,
                        height: 40,
                        width: '40%',
                        borderColor: 'white',
                        borderRadius: 20,
                        borderStyle: 'solid',
                        padding: 10
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'white',
                            //more styles here.... 
                        }}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                alignItems: 'center',
                paddingTop: 490,
                paddingHorizontal: 62,
                position: 'absolute'
                // backgroundColor:'green',
            }}>
                <Text style={{
                    color: 'white',
                    textTransform: 'capitalize',
                    fontSize: FormatFont.normal,
                    paddingBottom: 10
                }}>Don't have account? Sign in with</Text>
                <View style={{
                    flexDirection: 'row',
                    paddingLeft:10
                }}>
                    <TouchableOpacity><Icon name={'facebook-square'} size={40} style={{ color: '#3b5998', paddingHorizontal: 20 }} /></TouchableOpacity>
                    <TouchableOpacity><Icon name={'google'} size={40} style={{ color: '#DB4437' }} /></TouchableOpacity>
                    <TouchableOpacity><Icon name={'twitter'} size={40} style={{ color: '#1D9BF0', paddingHorizontal: 20 }} /></TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    </View>
};

export default Login