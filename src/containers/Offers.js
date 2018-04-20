import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform} from 'react-native';
import Navbar from '../components/Navbar'
import FontText from '../components/FontText';
import CreditMainTitle from '../components/CreditMainTitle'
import Navigation from '../components/Navigation'
// import {Actions} from 'react-native-redux-router'
import Unbolted from '../components/Unbolted'
import Description from '../components/Description'

class Offers extends Component {

    constructor(props) {
        super(props);
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
                    <CreditMainTitle/>
                    <Navigation active='2'/>
                    <View style={styles.mainContentWrapper}>
                        <FontText style={styles.contentTitle}>Exclusive Offers</FontText>
                        <FontText style={styles.explanation}>After choosing your exclusive offer, you will be able to
                            change the credit limit.</FontText>
                        <Unbolted/>
                        <View style={styles.creditContainer}>
                            <View style={styles.creditWrapper}>
                                <FontText style={styles.innerText}>Credit Limit: £3,000</FontText>
                                <FontText style={styles.innerText}>Interest rate: 17.9%</FontText>
                            </View>
                            <View style={{flex:4}}>
                                <TouchableOpacity onPress={() => Actions.noOffers()}>
                                    <View style={styles.buttonChoose}>
                                        <FontText style={styles.btnText}>Choose</FontText>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FontText style={{textDecorationLine: 'underline', fontSize:18, marginTop:12}}>Legal Notice</FontText>
                        <View style={{backgroundColor:'#797979', height:1, marginTop:13}}></View>

                        <Unbolted/>
                        <View style={styles.creditContainer}>
                            <View style={styles.creditWrapper}>
                                <FontText style={styles.innerText}>Credit Limit: £4,000</FontText>
                                <FontText style={styles.innerText}>Interest rate: 19.9%</FontText>
                            </View>
                            <View style={{flex:4}}>
                                <TouchableOpacity onPress={() => Actions.noOffers()}>
                                    <View style={styles.buttonChoose}>
                                        <FontText style={styles.btnText}>Choose</FontText>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FontText style={{textDecorationLine: 'underline', fontSize:18, marginTop:12}}>Legal Notice</FontText>
                        <View style={{backgroundColor:'#797979', height:1, marginTop:13}}></View>
                        <Description padding={30}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContentWrapper: {
        margin: 25,
        marginTop: 30
    },
    contentWrapper: {
        marginRight: 20,
        marginTop: 23,
        marginLeft: 15
    },
    contentTitle: {
        color: '#10225b',
        fontWeight: 'bold',
        fontSize: 22
    },
    explanation: {
        color: '#10225b',
        fontSize: 14,
        marginTop: 2,
        fontWeight: 'bold'
    },
    creditContainer: {
        flexDirection: 'row',
        marginTop:17
    },
    creditWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 7
    },
    buttonChoose: {
        backgroundColor: 'rgba(237, 1, 140, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        borderRadius:10
    },
    btnText: {
        color:'white',
        fontSize:22
    },
    innerText:{
        color: '#10225b',
        fontSize:20
    }
})

export default Offers
