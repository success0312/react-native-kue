import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform} from 'react-native';
import Navbar from '../components/Navbar'
import FontText from '../components/FontText';
import CreditMainTitle from '../components/CreditMainTitle'
import Navigation from '../components/Navigation'
// import {Actions} from 'react-native-redux-router'
import CreditInput from '../components/CreditInput'
import Description from '../components/Description'

class TakingLonger extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        setTimeout(() =>{
            Actions.checkingScoreDone()
        }, 5000)
    }

    render(){
        const leftButton = (
            <View>

            </View>
        );
        return(
            <View style={styles.mainContainer}>
                <View style={[styles.statusBar, { backgroundColor: "#ed018c"}]}>
                    <StatusBar backgroundColor="#ed018c" barStyle="light-content"/>
                </View>
                <Navbar leftButton={leftButton}/>
                <ScrollView>
                    <CreditMainTitle/>
                    <Navigation active='2'/>
                    <View style={styles.mainContentWrapper}>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <FontText style={styles.titleText}>It is taking longer than normal to asses </FontText>
                            <FontText style={styles.titleText}>your credit score. We will notify you of </FontText>
                            <FontText style={styles.titleText}>next steps by email or text message.</FontText>
                            <Image style={styles.contentImage}
                                   source={require('../assets/images/bank-building.png')}/>
                                <Image style={styles.clockIcon}
                                       source={require('../assets/images/clock.png')}/>
                        </View>
                        <Description padding={50}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'white'
    },
    mainContentWrapper:{
        margin:25,
        marginTop:20
    },
    leftButton: {
        marginTop:15,
        width: 20,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    titleText:{
        color:'#666666',
        fontSize:16
    },
    contentImage:{
        marginTop:35,
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    loadBlock:{
        width:30,
        height:27,
        backgroundColor:'#66cc00',
        marginLeft:5
    },
    clockIcon:{
        marginTop:20,
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
})

export default TakingLonger
