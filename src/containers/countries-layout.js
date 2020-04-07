import React from 'react';

import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    requireNativeComponent
} from 'react-native';

function CountriesLayout(props) {
    return (
        <ImageBackground
            //source={require('../../assets/images/health1.jpg')}
            style={styles.container}
        >
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        //opacity: 0.1,
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
    }
})

export default CountriesLayout;