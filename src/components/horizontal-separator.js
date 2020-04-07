import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

function HorizontalSeparator(props) {
    return (
        <View style={[
            styles.separator,
            {
                borderTopColor: (props.color) ? props.color : '#eaeaea'
            }
            ]}> 
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        marginHorizontal: 5,
        flex: 1,
    }
})

export default HorizontalSeparator;