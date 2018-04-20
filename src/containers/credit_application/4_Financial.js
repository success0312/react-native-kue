import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform, Modal, Dimensions, Picker, Alert, AlertIOS} from 'react-native';
import Navbar from '../../components/Navbar'
import FontText from '../../components/FontText';
import CreditMainTitle from '../../components/CreditMainTitle'
import Navigation from '../../components/Navigation'
import CreditInput from '../../components/CreditInput'
import Description from '../../components/Description'
import SignUpInput from '../../components/SignUpInput'
import Dropdown from '../../components/Dropdown'
import { StackNavigator } from 'react-navigation';


import ModalDropdown from '../../components/ModalDropdown'

const Item = Picker.Item;
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
    'catalysts for change. Dynamically revolutionize.';

const employmentSelect = ['Full time employed', 'Part time employed', 'Contractor employed', 'Self employed', 'Unemployed', 'Retired', 'Housewife or househusband']
const rentSelect = ['Own my home, no mortgage', 'Own my home with mortgage', 'Rent my home']
class Finance4 extends Component {

  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };


    constructor(props) {
        super(props);
        this.state={
            text: '',
            rentText:'',
            active1:false,
            active2:false,
            modalVisible: false,
            selected1: 'key1',
            arraySelect:[],
            modalRentVisible:false,
            enabled: true
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



    iosModal = () => {
        AlertIOS.prompt(
            'Select',
            null,
            employmentSelect.map((item, index) => ({
                text: item,
                onPress: () => this.setState({text: item})
            })).concat([{text: 'Cancel', onPress: () => {}, style: 'cancel'}])

        )
    }
    iosRentModal = () => {
        AlertIOS.alert(
            'Select',
            null,
            rentSelect.map((item, index) => ({
                text: item,
                onPress: () => this.setState({rentText: item})
            }))
        )
    }

    androidModal = () => {
        this.setState({modalVisible: true, enabled:false})
    }
    androidRentModal = () => {
        this.setState({modalRentVisible: true})
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
        const { navigate } = this.props.navigation;
        const leftButton = (
            <View>

            </View>
        );
        const {active1, active2} = this.state
        return (
            <View style={styles.mainContainer}>
                <View style={[styles.statusBar, { backgroundColor: "#ed018c"}]}>
                    <StatusBar backgroundColor="#ed018c" barStyle="light-content"/>
                </View>
                <Navbar leftButton={leftButton}/>
                <ScrollView>
                    <CreditMainTitle/>
                    <Navigation active='2'/>
                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => 1}
                    >
                        <View style={styles.container}>
                            <View style={[styles.innerContainer]}>

                                    <ScrollView >
                                    {
                                        employmentSelect.map((item,key) => {
                                            return(
                                                <TouchableOpacity style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0)'}} onPress={() => this.setState({modalVisible: false, enabled:true, text:item})}>
                                                    <View style={[styles.item, {borderTopLeftRadius:key === 0 ? 10 : 0,
                                                    borderTopRightRadius:key === 0 ? 10: 0, borderBottomLeftRadius:key === 6 ? 10 : 0, borderBottomRightRadius:key === 6 ? 10 : 0}]}>
                                                        <FontText style={styles.itemText}>{item}</FontText>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                        </ScrollView>
                            </View>
                        </View>
                    </Modal>

                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={this.state.modalRentVisible}
                        onRequestClose={() => 1}
                    >
                        <View style={styles.container}>
                            <View style={[styles.innerContainer]}>

                                <ScrollView >
                                    {
                                        rentSelect.map((item,key) => {
                                            return(
                                                <TouchableOpacity style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0)'}} onPress={() => this.setState({modalRentVisible: false, rentText:item})}>
                                                    <View style={[styles.item, {borderTopLeftRadius:key === 0 ? 10 : 0,
                                                    borderTopRightRadius:key === 0 ? 10: 0, borderBottomLeftRadius:key === 2 ? 10 : 0, borderBottomRightRadius:key === 2 ? 10 : 0}]}>
                                                        <FontText style={styles.itemText}>{item}</FontText>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </ScrollView>


                            </View>
                        </View>
                    </Modal>
                    <View style={styles.mainContentWrapper}>


                        <Dropdown onClick={(Platform.OS === 'ios') ? this.iosModal : this.androidModal}
                                  text={this.state.text}
                                  placeholder="Employment"/>
                        <SignUpInput titleName="Annual income before tax" validate={this.validateField}/>
                        <SignUpInput titleName="Monthly rent or mortgage amount" validate={this.validateField}/>
                        <View style={{marginTop:25}}>
                        <Dropdown onClick={(Platform.OS === 'ios') ? this.iosRentModal : this.androidRentModal}
                                  text={this.state.rentText}
                                  placeholder="Rent my home"/>
                        </View>
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity onPress={() => navigate('Creditlink3')}>
                                <FontText style={{color:'#544c44',textDecorationLine:'underline', fontSize:17}}>Back</FontText>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('CheckCreditScorelink5')}>
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
    leftButton: {
        marginTop:15,
        width: 20,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    mainContainer:{
        flex:1,
        backgroundColor:'white'
    },
    mainContentWrapper:{
        margin:25,
        marginTop:20
    },
    dropDown: {
        marginTop:15,
        borderColor: '#c5c5c5',
        borderWidth: 1,
        padding: 5
    },
    listStyle:{
        marginTop:5,
        marginLeft:-6,
        width:310,
        borderWidth:1
    },
    textStyle:{
        color:'#1e3266',
        fontSize:20
    },
    btnWrapper: {
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    btnNext:{
        width:120,
        height:35,
        backgroundColor:'#ed018c',
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems:'center'
    },
    innerContainer: {
        width:250,
        borderRadius: 10,
        backgroundColor:'rgba(300, 300, 300, 0.5)'
    },
    modalHeader: {
        height: 30,
        flexDirection: 'row'
    },
    modalText: {
        color: '#312a70',
        fontSize: 20,
        fontWeight: '500'
    },
    icon:{
        width:20,
        height:20,
        borderRadius: 10
    },
    picker: {
        width: 100
    },
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
    item:{
        height:50,
        borderWidth:1,
        borderBottomWidth:0,
        borderColor:'rgba(200, 200, 200, 0.1)',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(300, 300, 300, 0.9)'
    },
    itemText:{
        fontSize:18,
        color:'#084ECF'
    }
})

export default Finance4
