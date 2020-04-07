import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    ImageBackground, 
} from 'react-native';

function Countries(props) {
    return (
        <ImageBackground 
            style={styles.wrapper}
            source = {
            //    uri: '' 
               // source={require('')};
               require('../../assets/images/mundo.jpg')
            }
        >    
            <Text style={styles.genre}>
                {props.Country}
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        opacity: 0.5,
        width: 100,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    genre: {
        color: 'blue',
        fontSize: 15,
        fontWeight: 'bold',
        textShadowColor: 'blue',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 0,        
    }
})
export default Countries;