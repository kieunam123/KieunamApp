/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {WelcomeScreen,Login, FoodItem, FoodList} from './screen';
import React from "react";
import {Text} from "react-native"
let Phone=[
    {
        productName: 'iphone X',
        price : 100,
        quantity: 5
    },
    {
        productName: 'iphone XR',
        price: 120,
        quantity : 3
    },
    {
        productName: 'iphone 11 pro max',
        price: 200,
        quantity : 1
    },
]

AppRegistry.registerComponent(appName, () => ()=><FoodList

    x={5}
    y={223131}
    appname={'KieuNamApp'}
    person={{
        name: 'Kieu Nam',
        age : 22,
        email: 'kieunam011@gmail.com',

    }}
    products={Phone}
    
/>);
