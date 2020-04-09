import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Alert, 
} from 'react-native';

function Countries(props) {
    return (
        <TouchableOpacity onPress={() => showAlert(props)}>
            <ImageBackground 
                style={styles.wrapper}
                source = {
                //uri: '' source={require('')};
                require('../../assets/images/mundo.jpg')
                }
            >    
                <Text style={styles.genre}>
                    {props.Country}
                </Text>
            </ImageBackground>
        </TouchableOpacity>  
    )
}
const showAlert = (data) =>
    //console.log('Holaaaaaaaaa')
    Alert.alert(
        data.Country,
      "Total de casos : " + data.TotalConfirmed + "\nTotal muertes : " + data.TotalDeaths + 
      "\nNuevos casos : " + data.NewConfirmed + "\nMuertes hoy: " + data.NewDeaths +
      "\nTotal recuperados : " + data.TotalRecovered, 
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
const styles = StyleSheet.create({
    buttonContainer: {  
        margin: 20  
    },  
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
/*<TouchableOpacity onPress = {showAlert}> */