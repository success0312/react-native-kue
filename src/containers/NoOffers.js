import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform} from 'react-native';
import Navbar from '../components/Navbar'
import FontText from '../components/FontText';
import CreditMainTitle from '../components/CreditMainTitle'
import Navigation from '../components/Navigation'
// import {Actions} from 'react-native-redux-router'
import Unbolted from '../components/Unbolted'
import Description from '../components/Description'


class NoOffers extends Component {

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
                        <FontText style={styles.contentTitle}>No Offers</FontText>

                        <FontText style={styles.explanation}>Unfortunately none of our lenders have come back with any offers.
                            This could be because of automated credit checking that doesn't meet their criteria.</FontText>
                        <FontText style={styles.explanation}>We have logged this request and will follow up
                            to see if we can find a suitable lender. </FontText>
                        <FontText style={styles.explanation}>As this is a manual process, it may take some time.
                            If you have any questions send us a support ticket here:</FontText>

                        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:60}}>
                            <TouchableOpacity onPress={() => Actions.acceptOffer()}>
                                <View style={styles.buttonSupport}>
                                    <FontText style={{color:'white', fontSize:24}}>Support</FontText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Description padding={165}/>
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
        marginTop: 10,
        fontWeight: 'bold'
    },
    buttonSupport:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#666666',
        height:50,
        width:160,
        borderRadius:10
    }
})

export default NoOffers
