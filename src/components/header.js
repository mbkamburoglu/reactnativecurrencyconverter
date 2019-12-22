import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component{
  render(){
    const {header, headerText} = styles;
    return (
        <View style={header}>
          <Text style={headerText}> {this.props.headerText} </Text>
        </View>

      )
    }
}

const styles = StyleSheet.create({
   header :{
     backgroundColor: '#455a64',
     height: 60,
     alignItems: 'center',
     justifyContent: 'center',
   },
   headerText :{
      color: '#ffffff',
      fontSize:26,
   }
})
