import React,{useState} from 'react';
import {Text,View,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { Sum2Number, multiply2Number, subtract2Number } from '../ulities/calculator';
import {images,icons} from '../constants';
import {Buttons} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';


function WelcomeScreen(props){
    const {appname}=props
    const[chooseOptions,setChooseOptions] = useState([
        {
            name: 'đăng nhập',
 
        },
        {
            name: 'đăng ký',

        },
        {
            name: 'tra cứu thông tin',

        },
        {
            name: 'liên hệ',
 
        },
        
    ])
    return <View style={{
        backgroundColor: 'black',
        flex:1,
        
    }}>
       <ImageBackground 
       source={images.background}
       style={{
           flex:1,

       }}
       >
        <View style={{
            flex: 20,
            // backgroundColor: '#cccc',
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    height: 65,

                }}
                >
                    <Image style={{
                        maxWidth: 35,
                        maxHeight: 50,
                        marginHorizontal: 20,
                        tintColor: 'white'

                    }}
                        source={icons.flame} />
                    <Text style={{
                        color: 'white',
                        fontSize: 25,
                        fontWeight: '800'

                    }}>

                        {appname.toUpperCase()}

                    </Text>
                    <Text style={{ flex: 1 }}></Text>
                    <Icon name={'ios-information-circle-outline'} size={30} style={{
                        marginRight: 15,
                        color: 'white',
                    }}></Icon>

                </View>
        </View>     
        
            <View
                style={{
                    flex: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    //more styles here
                }}
            >
                <Text style={{ marginBottom: 10, color: 'white' }}>
                    Welcome to
                </Text>
                <Text style={{ marginBottom: 10, color: 'white', fontSize: 20, fontWeight: '900' }}>
                    {appname}
                </Text>
                <Text style={{ marginBottom: 10, color: 'white' }}>
                    Vui lòng lựa chọn dịch vụ
                </Text>
            </View>
            <View
                style={{
                    flex: 40,

                    //more styles here
                }}
            >
                {chooseOptions.map(chooseOption => <Buttons
                    onPress={() => {
                        let newchooseOptions = chooseOptions.map(eachchooseOption =>{
                            return {
                                ...eachchooseOption,
                                isSelected : eachchooseOption.name == chooseOption.name,
                                // eachchooseOption == chooseOption[0].name ?  alert('1') : null
                            }
                            
                        })
                        setChooseOptions(newchooseOptions);
                        //more function here...
                    }}
                    title={chooseOption.name}
                    isSelected={chooseOption.isSelected}
                />)}
               
            </View>
            <View
                style={{
                    flex: 20,
                    //more styles here
                }}
            >
                <Buttons title={'thoát'}></Buttons>
            </View>

        </ImageBackground>
    </View>
}

export default WelcomeScreen






// ----------------------
//  BAI 1
// const WelcomeScreen = (props) => {
    
//     const {x,y}=props
//     const {person}=props
//     const {name, age, email} = person
//     const {appname}=props
//     const {products}=props
//     const soluongmua=2

//     // debugger
//     alert(`Welcome to ${appname}, press OK to continue.`)
//     return <View 
//     style={{
        
//     }}
//     >
//         <Text>This is home screen</Text>
//         <Text>Gioi thieu ban than :
//             Ten : {name}
//             , Tuoi : {age}
//             , email : {email}
//         </Text>
        
//         <Text>
//             {name} da mua san pham {products[1].productName}, so luong : {soluongmua} 
//         </Text>

     
//         <Text>
//              Tong thanh toan : {Sum2Number(2,products[1].price)}
        
//         </Text>
//         <Text>Gia khuyen mai da giam</Text>
//         <Text>Danh sach san pham</Text>
//         {products.map(danhsachsp => 
//             <Text>{danhsachsp.productName} : {danhsachsp.price} $ , so luong kho : {subtract2Number(danhsachsp.quantity,soluongmua)} </Text>
            
//             )}
//     </View>
    
    
// }