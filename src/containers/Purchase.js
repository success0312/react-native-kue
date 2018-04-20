import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform} from 'react-native';
import Navbar from '../components/Navbar'
import FontText from '../components/FontText';
import CreditMainTitle from '../components/CreditMainTitle'
import Navigation from '../components/Navigation'
// import {Actions} from 'react-native-redux-router'
import Unbolted from '../components/Unbolted'
import Description from '../components/Description'
import SignUpInput from '../components/SignUpInput'

var Slider = require('react-native-slider');


class Purchase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 36
        }
    }
    validateField = (name) => {
        if (name) {
            return true
        }
        else {
            return false
        }
    }

    render() {
        const leftButton = (
            <View>
            </View>
        );
        return (
            <View style={styles.mainContainer}>
                <View style={[styles.statusBar, { backgroundColor: "#ed018c"}]}>
                    <StatusBar backgroundColor="#ed018c" barStyle="light-content"/>
                </View>
                <Navbar leftButton={leftButton}/>
                <ScrollView>

                        <FontText style={styles.contentTitle}>Purchase</FontText>

                       <View style={styles.headerBlock}>
                            <View style={{flexDirection:'column', alignItems:'center'}}>
                                <FontText style={{fontSize:33, color:'white', fontWeight:'bold', marginTop:-5}}>£20.00</FontText>
                                <FontText style={{fontSize:22, color:'white', marginTop:-10}}>per month</FontText>
                            </View>
                           <TouchableOpacity>
                               <View style={styles.acceptBtn}>
                                   <FontText style={{color:'white', fontSize:19}}>Accept</FontText>
                               </View>
                           </TouchableOpacity>
                        </View>

                    <View style={styles.contentWrapper}>
                        <FontText style={{fontSize:17, color:'#999999'}}>Pay back period</FontText>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.rangeBlock}></View>
                            <Slider
                                style={{flex:45}}
                                minimumValue={12}
                                maximumValue={60}
                                step={1}
                                maximumTrackTintColor="#031B5B"
                                minimumTrackTintColor="#031B5B"
                                thumbStyle={thumbStyles.thumb}
                                trackStyle={thumbStyles.track}
                                value={this.state.value}
                                thumbTintColor="#031B5B"
                                onValueChange={(value) => this.setState({value})}/>
                            <View style={styles.rangeBlock}></View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <FontText style={{color:'#031B5B'}}>12</FontText>
                            <FontText style={{color:'#031B5B'}}>60</FontText>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
                            <FontText style={{opacity:0}}>Months</FontText>
                            <FontText style={{color:'#031B5B', fontSize:23}}>{this.state.value}</FontText>
                            <FontText style={{color:'#031B5B'}}>Months</FontText>
                        </View>
                        <SignUpInput titleName="£ Amount needed"
                                     validate={this.validateField}/>
                        <View style={{marginTop:15}}>
                        <FontText style={styles.info}>Interest Rate: 17.9% </FontText>
                        <FontText style={styles.info}>Total Repayable: £1,200</FontText>
                        <FontText style={styles.info}>Total Interest: £200</FontText>
                            </View>
                        </View>
                    <View style={styles.mainContentWrapper}>
                        <FontText style={{color:'black', fontWeight:'bold'}}>Credit Provider</FontText>
                        <FontText style={{color:'black'}}>
                            Unbolted is a trading name of Open Access Finance Limited, which is authorised and regulated by the
                            Financial Conduct Authority (FCA), with interim permission to conduct peer-to-peer lending platform
                            activity, under firm reference number 663780. Its registered office is at 6, Lloyds Avenue, London EC3N 3AX.
                        </FontText>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const thumbStyles = StyleSheet.create({
    thumb: {
        width: 22,
        height: 40
    },
    track: {
        height: 2,
        borderRadius: 0
    }
})

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContentWrapper: {
        margin: 25,
        marginTop: 30
    },
    contentTitle: {
        color: '#10225b',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 25,
        marginTop: 40
    },
    rangeBlock: {
        flex: 1,
        height: 20,
        backgroundColor: '#031B5B'
    },
    headerBlock:{
        backgroundColor:'#272167',
        height:67,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:15

    },
    acceptBtn:{
        backgroundColor:'#169BD5',
        justifyContent:'center',
        alignItems:'center',
        height:41,
        width:115,
        borderRadius:10
    },
    contentWrapper:{
        margin:45,
        marginTop:15
    },
    info:{
        color:'#031B5B',
        fontSize:19
    }
})

export default Purchase
