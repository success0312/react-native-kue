import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform, Button} from 'react-native';
import Navbar from '../../components/Navbar'
import FontText from '../../components/FontText';
import SignUpInput from '../../components/SignUpInput' //the floating text buttons
// import {Actions} from 'react-native-redux-router'
import Description from '../../components/Description'
import { StackNavigator } from 'react-navigation';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

class SignUp extends React.Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };

  // static navigationOptions = {
  //     title: 'Home',
  //     header:{ visible:false }
  //   };

    constructor(props) {
        super(props);

        this.state = {}
    }

    validateName = (name) => {
        if (name) {
            return true
        }
        else {
            return false
        }
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    validatePassword = () => {

    }

    //navigation:
  //   static navigationOptions = {
  //   title: 'Kue Signup',
  // };

    render() {
        const { navigate } = this.props.navigation;
        const leftButton = (
            <View>
            </View>
        );
        return (
            <View style={{flex:1,backgroundColor:'#f8fcff'}}>
               <View style={[styles.statusBar, { backgroundColor: "#ed018c"}]}>
                    <StatusBar backgroundColor="#ed018c" barStyle="light-content" />
                </View>
               <Navbar leftButton={leftButton}/>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <FontText style={styles.titleText}>Sign Up</FontText>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={{marginTop:22}}>
                                <View style={[styles.signButton, styles.googleBtn, {flexDirection:'row', justifyContent:'space-around'}]}>
                                    <Image style={styles.socialIcon} source={require('../../assets/images/google-plus.png')}/>
                                    <FontText style={styles.googleText}>Sign up with Google</FontText>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{marginTop:22}}>
                                <View style={[styles.signButton, styles.facebookBtn, {flexDirection:'row', justifyContent:'space-around'}]}>
                                    <Image style={styles.socialIcon} source={require('../../assets/images/facebook-icon.png')}/>
                                    <FontText style={styles.facebookText}>Sign up with Facebook</FontText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems:'center', marginTop:25}}>
                            <View style={styles.line}></View>
                            <View><FontText style={styles.or}>OR</FontText></View>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.inputWrapper}>
                            <SignUpInput titleName="Name"
                                         validate={this.validateName}
                                         error="Name is empty"/>
                            <SignUpInput titleName="Surname"
                                         validate={this.validateName}
                                         error="Surname is empty"/>
                            <SignUpInput titleName="Email"
                                         validate={this.validateEmail}
                                         error="Incorrect email"/>
                            <SignUpInput titleName="Password"
                                         validate={this.validateName}
                                         error="Incorrect password"/>
                        </View>
                        <View style={[styles.buttonWrapper, {justifyContent:'center', alignItems:'center'}]}>
                            <TouchableOpacity style={{marginTop:55}} onPress={() => navigate('Creditlink1')} >
                                <View style={styles.signUpBtn}>
                                    <FontText style={styles.signUpText}>Sign Me Up</FontText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.buttonWrapper, {justifyContent:'center', alignItems:'center'}]}>
                            <TouchableOpacity style={{marginTop:10}} onPress={() => navigate('Payment')} >
                                <View style={styles.signUpBtn}>
                                    <FontText style={styles.signUpText}>Payment</FontText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Description padding={55}/>
                    </View>
                </ScrollView>
            </View>

        )
    }
}



const styles = StyleSheet.create({
	container: {
    marginTop: 0,
    flex: 1,
  },

  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
    mainContainer: {
        margin: 35,
        marginTop: 19
    },
    leftButton: {
        marginTop:15,
        width: 20,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    titleText: {
        fontSize: 24,
        color: '#262164',
        fontWeight: 'bold',
    },
    buttonWrapper: {

    },
    inputWrapper: {},
    signButton: {
        flex:1,
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius: 10,
        alignItems: 'center',
    },
    googleBtn: {
        backgroundColor: '#d53e25'
    },
    facebookBtn: {
        backgroundColor: '#3e599f'

    },
    googleText: {
        color: 'white',
        fontSize: 19,
        marginRight:50
    },
    facebookText: {
        color: 'white',
        fontSize: 19,
        marginRight:20
    },
    line: {
    	flex:5,
        height: 1,
        backgroundColor: 'silver'
    },
    or: {
    	flex:1,
        fontSize: 15,
        color: 'silver',
        paddingLeft: 3,
        paddingRight: 3

    },
    signUpBtn: {
        width: 140,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 7,
        alignItems: 'center',
        backgroundColor: '#ed018c',

    },
    signUpText: {
        color: '#f8fcff',
        fontSize: 23
    },
    socialIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    }

})

export default SignUp
