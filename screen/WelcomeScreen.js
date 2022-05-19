import React from 'react';
import {Text,View,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { Sum2Number, multiply2Number, subtract2Number } from '../utilies/calculation';
import {images,icons} from '../constants';

function WelcomeScreen(props){
    const {appname}=props
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
                        tintColor:'white'

                    }}
                        source={icons.flame} />
                    <Text style={{
                        color: 'white',
                        fontSize: 25,
                        textTransform:'uppercase',
                        // paddingLeft:10,
                        fontWeight:'800'

                    }}>

                        {appname}

                    </Text>
                    <Text style={{ flex: 1 }}></Text>
                    <Image style={{
                        maxWidth: 30,
                        maxHeight: 30,
                        marginRight: 10,
                        tintColor: 'white',
                        // fontWeight:'900'
                    }}

                        source={icons.information} />
                </View>
        </View>     
        
        <View 
        style={{
            flex:20,
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            //more styles here
        }}
        >
            <Text style={{marginBottom:10,color:'white'}}>
                Welcome to 
            </Text>
            <Text style={{marginBottom:10,color:'white',fontSize:20,fontWeight:'900'}}>
                {appname}
            </Text>
            <Text style={{marginBottom:10,color:'white'}}>
                Vui lòng lựa chọn dịch vụ
            </Text>
        </View>
        <View
        style={{
            flex:40,
            
            //more styles here
        }}
        >
            <TouchableOpacity style={{
                borderColor : 'white',
                height: 45,
                borderRadius: 6,
                borderWidth:1,
                marginHorizontal:23,
                justifyContent:'center',
                alignItems:'center',
                
            }}>
                <Text style={{
                    color:'white',
                    textTransform:'capitalize'
                }}>
                    đăng nhập
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{
                borderColor : 'white',
                height: 40,
                borderRadius: 6,
                borderWidth:1,
                marginVertical:10,
                marginHorizontal:23,
                justifyContent:'center',
                alignItems:'center',
                
            }}>
                <Text style={{
                    color:'white',
                    textTransform:'capitalize'
                }}>
                    đăng ký tài khoản
                </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={{
                borderColor : 'white',
                height: 40,
                borderRadius: 6,
                borderWidth:1,
                marginBottom:10,
                marginHorizontal:23,
                justifyContent:'center',
                alignItems:'center',
                
            }}>
                <Text style={{
                    color:'white',
                    textTransform:'capitalize'
                }}>
                    tra cứu dịch vụ
                </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={{
                borderColor : 'white',
                height: 40,
                borderRadius: 6,
                borderWidth:1,
                marginBottom:10,
                marginHorizontal:23,
                justifyContent:'center',
                alignItems:'center',
                
            }}>
                <Text style={{
                    color:'white',
                    textTransform:'capitalize'
                }}>
                    thoát
                </Text>

            </TouchableOpacity>
        </View>
        <View
        style={{
            flex:20,
            //more styles here
        }}
        >
           
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