import React,{useState} from 'react';
import {onChangeText,Text,View,Image,ImageBackground,TouchableOpacity,TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';
import { Sum2Number, multiply2Number, subtract2Number } from '../ulities/calculator';
import {images,icons,FormatFont} from '../constants';
import {Buttons} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react/cjs/react.production.min';
import { isValidEmail, isValidPassword } from '../ulities/Validation';
import ensureNativeModuleAvailable from 'react-native-vector-icons/dist/lib/ensure-native-module-available';

function Login(props){
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const isValidationOK = () => Email.length > 0 && Password.length > 0
        && isValidEmail(Email) == true
        && isValidPassword(Password) == true
    //nnavigate function
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    //main
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
                        onChangeText={(text)=>{
                            setErrorEmail(isValidEmail(text) == true ?
                             ' ' : 'Email not in correct format')
                            setEmail(text)
                        }}
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
                    <Text style={{color:'rgb(236, 100, 100)',fontSize:FormatFont.normal}}>{errorEmail}</Text>

                    <Text style={{
                        textTransform: 'capitalize',
                        marginBottom: 10,
                        fontSize: FormatFont.normal,
                        marginTop: 20,
                        color: 'white'
                    }}>Password:</Text>

                    <TextInput
                    onChangeText={(text)=>{
                        setErrorPassword(isValidPassword(text)==true ?
                        '':'7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter')
                        setPassword(text)
                    }}
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
                    <Text style={{color:'rgb(236, 100, 100)',fontSize:FormatFont.normal}}>{errorPassword}</Text>

                    <TouchableOpacity 
                    disabled={isValidationOK()==false}
                    onPress={() => {
                        navigate('Tabs')
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
                paddingTop: 455,
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