/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import Codes from './src/components/countries-code';
import Colors from './src/components/colors';
import Header from './src/components/header';
import Datos from './src/components/datos-generales';
import API from './utils/api';
import CountryList from './src/components/countries-list';

type Props = {};
class App extends Component<Props> {
  state = {
    globalList: [],
    countriesListNA: [],
    countriesListSA: [],
    countriesListCA: [],
    countriesListCR: [],
    countriesListEU: [],
    countriesListAS: [],
    countriesListAF: [],
  }
  async componentDidMount() {
    const global = await API.getGlobal();
    const countries = await API.getCountries();
    this.setState({
      globalList: global,
      countriesListNA: codesCountries(Codes.norteamerica, countries),
      countriesListSA: codesCountries(Codes.sudamerica, countries),
      countriesListCA: codesCountries(Codes.centroamerica, countries),
      countriesListCR: codesCountries(Codes.caribe, countries),
      countriesListEU: codesCountries(Codes.europa, countries),
      countriesListAS: codesCountries(Codes.asia, countries),
      countriesListAF: codesCountries(Codes.africa, countries),
    })
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <Header />
            <Datos list={this.state.globalList}/>
            <CountryList list={this.state.countriesListNA} title='Norteamérica'/>
            <CountryList list={this.state.countriesListSA} title='Sudamérica'/>
            <CountryList list={this.state.countriesListCA} title='Centroamérica'/>
            <CountryList list={this.state.countriesListCR} title='Caribe'/>
            <CountryList list={this.state.countriesListEU} title='Europa'/>
            <CountryList list={this.state.countriesListAS} title='Asia'/>
            <CountryList list={this.state.countriesListAS} title='África'/>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

function codesCountries(codes, countries){
  const arrayReturn = [];
  const nort = countries.map((dato) => {
      const code = codes.map((cod) => {
          if (cod==dato.CountryCode){
              arrayReturn.push(dato)
          }
        }
      )
      }
  ); 
  return arrayReturn;
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
/*
<View style={styles.body}>
              <View style={styles.sectionContainer}>
                   
              </View>
            </View>
            /*if (codes[0]==dato.CountryCode || codes[1]==dato.CountryCode || codes[2]==dato.CountryCode) {
        arrayReturn.push(dato)
      }
           
 */
export default App;
