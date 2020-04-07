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
/*import {
  Header,
} from 'react-native/Libraries/NewAppScreen';*/
import Colors from './src/components/colors';
import Header from './src/components/header';
import Datos from './src/components/datos-generales';
import API from './utils/api';
import CountryList from './src/components/countries-list';

type Props = {};
class App extends Component<Props> {
  state = {
    mundialList: [],
    countriesListNA: [],
    countriesListSA: [],
  }
  async componentDidMount() {
    const mundial = await API.getMundial();
    const countries = await API.getCountries();
    //console.log(codesCountries(Codes.norteamerica, countries));
    this.setState({
      mundialList: mundial[0],
      countriesListNA: codesCountries(Codes.norteamerica, countries),
      countriesListSA: codesCountries(Codes.sudamerica, countries),
    })
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <Header />
            <Datos list={this.state.mundialList}/>
            <CountryList list={this.state.countriesListNA} title='Norteamérica'/>
            <CountryList list={this.state.countriesListSA} title='Sudamérica'/>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

function codesCountries(codes, countries){
  const arrayReturn = [];
  const nort = countries.map((dato) => {
    if (codes[0]==dato.CountryCode || codes[1]==dato.CountryCode || codes[2]==dato.CountryCode) {
      arrayReturn.push(dato)
    }
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
 */
export default App;
