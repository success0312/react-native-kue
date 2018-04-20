import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Modal, Platform, TouchableWithoutFeedback, DatePickerAndroid, DatePickerIOS} from 'react-native';
import Navbar from '../../components/Navbar'
import FontText from '../../components/FontText';
import CreditMainTitle from '../../components/CreditMainTitle'
import Navigation from '../../components/Navigation'
import CreditInput from '../../components/CreditInput'
import Description from '../../components/Description'
import SignUpInput from '../../components/SignUpInput'
import Dropdown from '../../components/Dropdown'
import moment from 'moment'
import MobileInput from '../../components/MobileInput'
import { StackNavigator } from 'react-navigation';


class Credit2 extends Component {
    static navigationOptions = {
      // title: 'Welcome',
      headerMode: 'none',
      header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            simpleDate: new Date(),
            simpleText: '',
            editable:false,
            date: new Date(),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
            setDate: false,
            iosDate: ''
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
    showPicker = async (stateKey, options) => {
        try {
            var newState = {};
            const {action, year, month, day} = await
                DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            }
            else {
                var date = new Date(year, month, day); newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        }
        catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        } };

    iosModal = () => {
         this.setState({modalVisible:true})
    }

    onDateChange = (date) => {
    this.setState({date: date});
  };

    render() {
        const { navigate } = this.props.navigation;
        const {date, setDate, iosDate} = this.state

        let dateIOS = setDate ? moment(iosDate).format('YYYY/MM/DD') : ''

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
                    <Navigation active='1'/>
                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => 1}
                    >
                        <View style={styles.container}>
                            <View style={[styles.innerContainer]}>

                         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{alignItems:'center', justifyContent:'center', marginTop:10, marginBottom:10}}>
        <TouchableOpacity onPress={() => this.setState({modalVisible:false})}>
                   <View style={{ padding:10, alignItems:'center'}}>
                   <FontText style={{alignSelf:'center', fontSize:20, color:'dimgrey'}}>cancel</FontText>
                   </View>
        </TouchableOpacity>
        </View>

        <View style={{alignItems:'center', justifyContent:'center', marginTop:10, marginBottom:10}}>
        <TouchableOpacity onPress={() => this.setState({modalVisible:false, setDate:true, iosDate:this.state.date})}>
                   <View style={{ padding:10, alignItems:'center'}}>
                   <FontText style={{alignSelf:'center', fontSize:20, color:'#4eba6e'}}>select</FontText>
                   </View>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{backgroundColor:'rgba(152, 155, 153, 0.5)', height:1}}></View>

         <DatePickerIOS
          date={this.state.date}
          mode="date"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />

                                </View>
                            </View>
                        </Modal>
                    <View style={styles.mainContentWrapper}>
                        <SignUpInput titleName="Country" validate={this.validateField}/>
                        <SignUpInput titleName="City" validate={this.validateField}/>
                        <View style={{flexDirection:'row', alignItems:'center', flex:1}}>
                            <View style={styles.flagBlock}>
                                <Image style={styles.flagIcon} source={require('../../assets/images/UK-Union-Flag.png')}/>
                                <Image style={styles.arrowIcon} source={require('../../assets/images/down-arrow.png')}/>
                            </View>
                        <MobileInput titleName="Mobile" validate={this.validateField}/>
                            </View>

                         <View style={{ marginTop:25}}>
                        <Dropdown onClick={(Platform.OS === 'ios') ? this.iosModal : this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}
                                  text={(Platform.OS === 'ios') ? dateIOS : this.state.simpleText}
                                  placeholder="Birth Date"/>
                           </View>


                        <View style={styles.btnWrapper}>
                            <TouchableOpacity onPress={() => navigate('Creditlink1')}>
                                <FontText style={{color:'#544c44',textDecorationLine:'underline', fontSize:17}}>Back</FontText>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('Creditlink3')}>
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
    leftButton: {
        marginTop:15,
        width: 20,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    mainContentWrapper:{
       margin:25,
       marginTop:20
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
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems:'center'
    },
    innerContainer: {
        width:320,
        borderRadius: 10,
        backgroundColor:'rgba(300, 300, 300, 0.8)'
    },
    flagBlock:{
        flex:1,
        borderColor: '#dcdcdc',
        height: 50,
        marginTop:25,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius:7,
        borderWidth: 1,
        borderRightWidth:0,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:20
    },
    flagIcon:{
        marginLeft:5,
     width:25,
        height:15,
        resizeMode: 'cover'
    },
    arrowIcon:{
        width:20,
        height:10,
        resizeMode: 'cover'
    }
})

export default Credit2
