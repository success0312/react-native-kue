import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform} from 'react-native';
import Navbar from '../../components/Navbar'
import FontText from '../../components/FontText';
import CreditMainTitle from '../../components/CreditMainTitle'
import Navigation from '../../components/Navigation'
import Description from '../../components/Description'
import { StackNavigator } from 'react-navigation';


class Credit3 extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };

    constructor(props) {
        super(props);

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
                    <CreditMainTitle/>
                    <Navigation active='2'/>
                    <View style={styles.mainContentWrapper}>
                        <FontText style={styles.contentTitle}>Address history - last 3 years</FontText>
                        <View style={styles.infoWrapper}>
                            <View style={styles.leftInfo}>
                                <FontText style={styles.infoText}>Oct 2016 -</FontText>
                                <FontText style={styles.infoText}>Current</FontText>
                            </View>
                            <View style={styles.rightInfo}>
                                <FontText style={styles.infoText}>100 High Tower,</FontText>
                                <FontText style={styles.infoText}>33 High Street, London,</FontText>
                                <FontText style={styles.infoText}>E14 7YY, United Kingdom</FontText>
                            </View>
                        </View>
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity >
                                <View style={[styles.getStartedBtn, {backgroundColor:'#ff0000', width:83}]}>
                                    <FontText style={styles.getStartedText}>Remove</FontText>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('EditAddress3')}>
                                <View style={[styles.getStartedBtn, {backgroundColor:'#f90', width:83}]}>
                                    <FontText style={styles.getStartedText}>Edit</FontText>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('AddAddress3')} >
                                <View style={[styles.getStartedBtn, {backgroundColor:'#090', width:120}]}>
                                    <FontText style={styles.getStartedText}>Add Address</FontText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:1, borderColor:'#adadad', marginTop:20}}>

                        </View>
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity onPress={() => navigate('Creditlink2')}>
                                <FontText style={{color:'#544c44',textDecorationLine:'underline', fontSize:17}}>Back</FontText>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('Financelink4')} >
                                <View style={styles.btnNext}>
                                    <FontText style={{color:'white', fontSize:18}}>Next</FontText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Description padding={30}/>
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
    contentTitle:{
        color:'#10225b',
        fontWeight:'bold',
        fontSize:19
    },
    infoWrapper:{
        flexDirection:'row',
        marginTop:15
    },
    leftInfo:{
        flexDirection:'column'
    },
    rightInfo:{
        flexDirection:'column',
        marginLeft:20
    },
    infoText:{
        color:'#12215d'
    },
    btnWrapper:{
        marginTop:35,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    getStartedBtn:{
       justifyContent:'center',
       alignItems:'center',
        borderRadius:8,
        height:40
    },
    getStartedText:{
     color:'white',
     fontSize:16
    },
    btnNext:{
        width:120,
        height:35,
        backgroundColor:'#ed018c',
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Credit3
