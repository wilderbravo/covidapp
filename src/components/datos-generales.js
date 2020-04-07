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
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import React from 'react';

function DatosGenerales(props) {
    return (
        <View>
            <View style={styles.containerInfo}>
                <View />
                    <Image 
                        source={require('../../assets/images/coronavirus.png')}    
                        style={styles.logo}
                    />
                <View>
                    <Text style={styles.unityName}>Total de casos: {props.list.total_cases}</Text>
                    <Text style={styles.subInfo}>Total muertes: {props.list.total_deaths}  -  Muertes hoy: {props.list.total_new_deaths_today}</Text>
                    <Text style={styles.subInfo}>Recuperados: {props.list.total_recovered}   -  Casos hoy: {props.list.total_new_cases_today}</Text>
                    <Text style={styles.subInfo}></Text>
                </View>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    containerProducts:{
        paddingTop: 40,
        paddingLeft: 15,
        flexDirection: 'row',
    },
    productName: {
          alignSelf: 'flex-start',
    },
    minus:{
          width: 20,
          height: 20,
          borderRadius: 20/2,
          backgroundColor: 'red',
    },
    containerInfo:{
          paddingTop:15,
          flexDirection:'row',
          paddingLeft: 15,
    },
    unityName:{
          fontWeight: 'bold',
          paddingLeft: 15,
    },
    subInfo:{
          color: 'gray',
          paddingLeft: 15,
    },
    circle: {
          width: 50,
          height: 50,
          borderRadius: 50/2,
          backgroundColor: 'red',
          justifyContent: 'flex-end',
    },
    logo: {
        // opacity: 0,
         overflow: 'visible',
         resizeMode: 'cover',
         height: 50,
         width: 50,
         flexDirection: 'row',
         //paddingVertical: 10,
      },
      /*
      <View style={styles.containerProducts}>
                <Text style={styles.productName}>1x 42 - Coca Cola 2L</Text>
                <View style={styles.minus}></View>
            </View>
       */
});

export default DatosGenerales;
