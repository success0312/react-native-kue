import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform} from 'react-native';
import Navbar from '../components/Navbar'
import FontText from '../components/FontText';
import CreditMainTitle from '../components/CreditMainTitle'
import Navigation from '../components/Navigation'
// import {Actions} from 'react-native-redux-router'
import Unbolted from '../components/Unbolted'
import Description from '../components/Description'


class AcceptOffer extends Component {

    constructor(props) {
        super(props);
        this.state={
            confirmFacts: false,
            confirmCredit:false
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
                    <CreditMainTitle/>
                    <Navigation active='2'/>
                    <View style={styles.mainContentWrapper}>
                        <FontText style={styles.contentTitle}>My Offer</FontText>

                        <FontText style={styles.explanation}>We have logged this request and will follow up
                            to see if we can find a suitable lender. </FontText>
                        <Unbolted/>
                        <View style={styles.creditContainer}>
                            <View style={styles.creditWrapper}>
                                <FontText style={styles.innerText}>Credit Limit: £3,000</FontText>
                                <FontText style={styles.innerText}>Interest rate: 17.9%</FontText>
                            </View>
                            <View style={{flex:4}}>
                                <TouchableOpacity>
                                    <FontText style={{textDecorationLine: 'underline', fontSize:18 }}>Change Limit</FontText>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FontText style={{fontSize:14, marginTop:18, color:'black'}}>
                            Unbolted is a trading name of Open Access Finance Limited,
                            which is authorised and regulated by the Financial Conduct Authority (FCA), with interim permission to
                            conduct peer-to-peer lending platform activity, under firm reference number 663780. Its registered office is at
                            6, Lloyds Avenue, London EC3N 3AX.
                        </FontText>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:35}}>
                            <TouchableOpacity>
                                <View style={styles.buttonSupport}>
                                    <FontText style={{color:'white', fontSize:24}}>Key Facts</FontText>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({confirmFacts:true})}>
                                <Image style={styles.successImage}
                                       source={this.state.confirmFacts ? require('../assets/images/select-icon-credit.png') :
                                       require('../assets/images/rounded-black-square-shape.png')}/>
                            </TouchableOpacity>
                        </View>


                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:30}}>
                            <TouchableOpacity>
                                <View style={styles.buttonSupport}>
                                    <FontText style={{color:'white', fontSize:24}}>Credit Agreement</FontText>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({confirmCredit:true})}>
                                <Image style={styles.successImage}
                                       source={this.state.confirmCredit ? require('../assets/images/select-icon-credit.png') :
                                       require('../assets/images/rounded-black-square-shape.png')}/>
                            </TouchableOpacity>
                        </View>
                        <FontText style={[styles.explanation, {marginTop:40}]}>By accepting the offer, upon a successful final credit check,
                            you are agreeing to the key facts and credit agreement.</FontText>

                        <View style={[styles.buttonWrapper, {justifyContent:'center', alignItems:'center'}]}>
                            {
                                (this.state.confirmCredit && this.state.confirmFacts) ?
                                    (
                                        <TouchableOpacity onPress={Actions.launch} style={{marginTop:55}}>
                                            <View style={styles.signUpBtn}>
                                                <FontText style={styles.signUpText}>Accept Offer</FontText>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                    :
                                    (
                                        <View style={[styles.signUpBtn, {marginTop:55}]}>
                                            <FontText style={styles.signUpText}>Accept Offer</FontText>
                                        </View>
                                    )
                            }

                        </View>
                        <Description padding={55}/>
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
    creditContainer: {
        flexDirection: 'row',
        marginTop:17,
        alignItems:'flex-start'
    },
    creditWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 7
    },
    innerText:{
        color: '#10225b',
        fontSize:23
    },
    buttonSupport:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#666666',
        height:50,
        width:180,
        borderRadius:12,
        marginRight:5
    },
    successImage:{
        height: 50,
        width:50,
        resizeMode: 'contain',
        marginLeft:5
    },
    buttonWrapper: {

    },
    signUpBtn: {
        width: 160,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 13,
        alignItems: 'center',
        backgroundColor: '#ed018c',

    },
    signUpText: {
        color: '#f8fcff',
        fontSize: 23
    },
});

export default AcceptOffer
