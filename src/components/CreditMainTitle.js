import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import FontText from './FontText';


class CreditMainTitle extends Component{
    
    render(){
        return(
            <View style={styles.mainTitleWrapper}>
                <FontText style={styles.mainTitle}>Kue Card - Apply for credit</FontText>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainTitleWrapper: {
        marginLeft:15,
        marginTop:15
    },
    mainTitle: {
        color:'#26206f',
        fontWeight:'bold',
        fontSize:22
    } 
    
})

export default CreditMainTitle
