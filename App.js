/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  
} from 'react-native';
import Header from './src/components/header';
import Converter from './src/components/converter';


export default class App extends Component {



  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
          />
        <Header headerText='Currency Converter'/>
        <Converter />


      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F3F3F3',
    flex: 1,
    flexDirection: 'column'
    },


});
