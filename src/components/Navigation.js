import React, {Component} from 'react'
import Triangle from 'react-native-triangle'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontText from './FontText';

class Navigation extends Component {
    render(){
        return(
            <View style={styles.navigationContainer}>
                <View style={{flexDirection:'row'}}>
                    <View style={[styles.navigateBlock, {backgroundColor:(this.props.active === '1') ? '#ed018c' : '#f9abd9'}]}>
                        <FontText style={styles.contentText}>About you</FontText>
                    </View>
                    <Triangle
                        width={12}
                        height={40}
                        color={(this.props.active === '1') ? '#ed018c' : '#f9abd9'}
                        direction={'right'}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={[styles.navigateBlock, {backgroundColor:(this.props.active === '2') ? '#ed018c' : '#f9abd9', justifyContent:'flex-start'}]}>
                        <Triangle
                            width={12}
                            height={40}
                            color={'white'}
                            direction={'right'}
                        />
                        <View style={styles.centerNavTextWrap}>
                            <FontText style={[styles.contentText, {marginLeft:10}]}>Apply for</FontText>
                            <FontText style={[styles.contentText, {marginLeft:14}]}> credit limit</FontText>
                        </View>
                    </View>
                    <Triangle
                        width={12}
                        height={40}
                        color={(this.props.active === '2') ? '#ed018c' : '#f9abd9'}
                        direction={'right'}
                    />
                </View>
                <View style={[styles.navigateBlock, {backgroundColor:'#f9abd9', justifyContent:'flex-start'}]}>
                    <Triangle
                        width={12}
                        height={40}
                        color={'white'}
                        direction={'right'}
                    />
                    <FontText style={[styles.contentText, {marginLeft:11}]}>Complete</FontText>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navigationContainer:{
        marginTop:18,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    navigateBlock:{
        width:115,
        height:40,
        backgroundColor:'#ed018c',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    contentText:{
        fontWeight:'bold',
        color:'white',
        fontSize:11
    },
    centerNavTextWrap:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
})

export default Navigation

