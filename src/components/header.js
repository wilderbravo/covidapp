/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import Colors from './colors';
import { Dimensions } from "react-native";
//import type {Node} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import React from 'react';
//var width = Dimensions.get('window').width; //full width
const Header = (): Node => (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={[styles.box, styles.box1]}>
              <Text style={styles.text}>Datos Covid-19</Text>
              
          </View>
        </View>
      </View>
      
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'flex-start', //replace with flex-end or center
    borderBottomWidth: 2,
    borderBottomColor: '#abc'
  },
  box: {
    width: '100%',
    backgroundColor: '#5dc6f7',
    height: 50
  },
  box1: {
    backgroundColor: '#5dc6f7'
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.black,
    flexDirection: 'row',
    paddingVertical: 10,
    flex: 5,
  },
});

export default Header;
