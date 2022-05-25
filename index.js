/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './navigation/App';
import {name as appName} from './app.json';
import React from "react";
import Tabs from './navigation/Tabs';


AppRegistry.registerComponent(appName, () => ()=><App/>);
