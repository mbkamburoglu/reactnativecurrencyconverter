import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import axios from 'axios';

class Converter extends Component {
  constructor(props){
    super(props);
    this.state = {
      tl: '',
      usd: '',
      gbp: '',
      btc: '',
      eur: '',
      input: '',
      rates: []
    }
    this.getRates= this.getRates.bind(this);
  }

  getRates(){
    axios.get('http://data.fixer.io/api/latest?access_key=3bd5ca4c93f8d0038bacf0aaf33fbfef&symbols=EUR,TRY,USD,GBP,BTC')
     .then(response => {
       const rates = response.data.rates;
       this.setState({
         rates
       })
     })
  }

  componentDidMount(){
    this.getRates();
  }

  render(){
    const {converterWrapper, inputStyle, textStyle} = styles;
    const {input, tl, usd, gbp, btc, eur, rates} = this.state;

    return(
      <View style={converterWrapper}>
        <TextInput placeholder='Enter EUR Value'
                   placeholderTextColor="#455a64"
                   style={inputStyle}
                  keyboardType = 'numeric'
                   onChangeText={(text) => {
                     const i = parseInt(text) || 0;
                     this.setState({
                       input: text,
                       tl: (i * rates['TRY']).toFixed(3),
                       usd: (i * rates['USD']).toFixed(3),
                       gbp: (i * rates['GBP']).toFixed(3),
                       btc: (i * rates['BTC']).toFixed(3),
                       eur: (i * rates['EUR']).toFixed(3),
                     })
                   }}
                   value={input} />

        <Text style= {textStyle}> TRY : {tl}</Text>
        <Text style= {textStyle}> USD : {usd}</Text>
        <Text style= {textStyle}> GBP : {gbp}</Text>
        <Text style= {textStyle}> BTC : {btc}</Text>
        <Text style= {textStyle}> EUR : {eur}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  converterWrapper: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'


  },
  inputStyle: {

    width: 200,
    height: 40,
    paddingBottom:10,
    borderColor: '#455a64',
    borderWidth:0.5,
    color:'blue'
  },
  textStyle:{
    width: 170,
    height: 50,
    fontWeight:'bold'
  },



});

export default Converter;
