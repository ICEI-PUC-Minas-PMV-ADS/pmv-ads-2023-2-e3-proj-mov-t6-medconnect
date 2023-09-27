import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {View, Text} from 'react-native';
import { StackNavigation } from './src/navigation/StackNavigation';

const App = () => {
  return (
   <NavigationContainer>
    <StackNavigation />
   </NavigationContainer>
  );
};

export default App;
