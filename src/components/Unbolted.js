import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform} from 'react-native';

class Unbolted extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                    <Image style={styles.unboltedImage}
                           source={require('../assets/images/unbolted.png')}/>
                <View style={[styles.textContainer]}>
                    <FontText style={styles.textItem}>Unbolted</FontText>
                    <FontText style={styles.textItem}>Open Access Finance Limited</FontText>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:15
    },
    textContainer: {
        marginTop:1,
        flexDirection: 'column',
        right:25
    },
    unboltedImage: {
        height: 47,
        width:110,
        resizeMode: 'contain',
     borderWidth:1,
    },
    textItem: {
        fontSize:14,
        fontWeight:'bold',
        color: '#10225b'
    }
})

export default Unbolted