import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform} from 'react-native';
import Navbar from '../../components/Navbar'
import FontText from '../../components/FontText';
import CreditMainTitle from '../../components/CreditMainTitle'
import Navigation from '../../components/Navigation'
import CreditInput from '../../components/CreditInput'
import SignUpInput from '../../components/SignUpInput'
import { StackNavigator } from 'react-navigation';


class AddAdress3 extends Component {

  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };

    constructor(props) {
        super(props);
    }
    validateField = (name) => {
        if (name) {
            return true
        }
        else {
            return false
        }
    }
    render(){
        const { navigate } = this.props.navigation;
        const leftButton = (
            <View>

            </View>
        );
        return(
            <View  style={styles.mainContainer}>
                <View style={[styles.statusBar, { backgroundColor: "#ed018c"}]}>
                    <StatusBar backgroundColor="#ed018c" barStyle="light-content" />
                </View>
                <Navbar leftButton={leftButton}/>
                <ScrollView>
                    <View style={styles.mainContentWrapper}>
                        <FontText style={styles.mainTitle}>Add address</FontText>
                        <SignUpInput titleName="Move in date" validate={this.validateField}/>
                        <SignUpInput titleName="Country" validate={this.validateField}/>
                        <SignUpInput titleName="Address line 1" validate={this.validateField}/>
                        <SignUpInput titleName="Address line 2" validate={this.validateField}/>
                        <SignUpInput titleName="City" validate={this.validateField}/>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity>
                                <View style={styles.addBtn}>
                                    <FontText style={styles.addText}>Add</FontText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={Actions.thirdCredit} style={styles.cancelBtn}>
                                <FontText style={{color:'#544c44',textDecorationLine:'underline', fontSize:17}}>Cancel</FontText>
                        </TouchableOpacity>
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
    mainContentWrapper:{
        margin:25,
        marginTop:30
    },
    mainTitle: {
        color:'#26206f',
        fontWeight:'bold',
        fontSize:22
    },
    buttonWrapper:{
        justifyContent:'center',
        alignItems:'center',
        height:114
    },
    addBtn: {
        width: 150,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 7,
        alignItems: 'center',
        backgroundColor: '#ed018c'
    },
    addText: {
        color: '#f8fcff',
        fontSize: 16
    },
    cancelBtn:{
        alignSelf:'center'
    },
    cancelText:{

    }


})
export default AddAdress3
