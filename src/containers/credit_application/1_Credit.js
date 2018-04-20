import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform} from 'react-native';
import Navbar from '../../components/Navbar'
// import {Actions} from 'react-native-redux-router'
import FontText from '../../components/FontText';
import CreditMainTitle from '../../components/CreditMainTitle'
import Navigation from '../../components/Navigation'
import Description from '../../components/Description'
import { StackNavigator } from 'react-navigation';


class Credit1 extends Component{

  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };

    constructor(props) {
        super(props);
    }

    render() {
      const { navigate } = this.props.navigation;
        const leftButton = (
            <View>
            </View>
        );
        return (
            <View  style={styles.mainContainer}>
                <View style={[styles.statusBar, { backgroundColor: "#ed018c"}]}>
                    <StatusBar backgroundColor="#ed018c" barStyle="light-content" />
                </View>
                <Navbar leftButton={leftButton}/>
                <ScrollView>
                <CreditMainTitle/>

                <View style={styles.contentWrapper}>
                  <FontText style={{color:'#2f4795', fontWeight:'bold'}}>Welcome Jessica, let's start paying monthly!</FontText>
                    <FontText style={{color:'#2f4795', marginTop:15}}>Upon successful application, you will receive a credit limit for all your future monthly payment shopping.</FontText>
                    <FontText style={{color:'#2f4795' , marginTop:10}}>Providing information below does not impact your credit score. A "Soft Search" with a credit bureau determines your rate and credit limit.</FontText>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => navigate('Creditlink2')} >
                        <View style={styles.getStartedBtn}>
                            <FontText style={styles.getStartedText}>Get Started</FontText>
                        </View>
                    </TouchableOpacity>
                </View>
                    <View style={{margin:15}}>
                        <Description padding={0}/>
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
    leftButton: {
        marginTop:15,
        width: 20,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    contentWrapper:{
        marginRight:20,
        marginTop:23,
        marginLeft:15
    },
    buttonWrapper:{
        justifyContent:'center',
        alignItems:'center',
        height:114
    },
    getStartedBtn: {
        width: 126,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 7,
        alignItems: 'center',
        backgroundColor: '#ed018c'
    },
    getStartedText: {
        color: '#f8fcff',
        fontSize: 19
    },
    footerTextWrapper:{
      marginTop:0

    },
    footerText:{
        color:'#554683'
    },
    triangle:{
        width:0,
        height:0,
        borderRightWidth:10,
        borderBottomWidth:20,
        borderTopWidth:15,
        borderLeftWidth:20,

        borderColor:'#ed018c'
    }

})

export default Credit1
