import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    Platform,
    Dimensions
} from 'react-native';
import Navbar from '../components/Navbar'
import PaymentInput from '../components/PaymentInput' //the floating text buttons
import FloatLabelTextField from '../components/FlabelTextfield'
// import {Actions} from 'react-native-redux-router'
import FontText from '../components/FontText';
import CreditMainTitle from '../components/CreditMainTitle'
import Navigation from '../components/Navigation'
import Description from '../components/Description'
import {StackNavigator} from 'react-navigation'
import ActionSheet from '@yfuks/react-native-action-sheet'

import Bottom from './Bottom'
var CANCEL_INDEX = 6;

var Slider = require('react-native-slider');
const {height, width} = Dimensions.get('window');
const int_perc = 18;

class Payment extends Component {

    static navigationOptions = {
        // title: 'Welcome',
        headerMode: 'none',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            value: 24,
            text: '',
            focused: false,
            color: null,
            clicked: 'none'
        }
    }
    componentDidMount() {
        this.setState({
            BUTTONS: [
                '12 months - £'+this.PMT(int_perc / 100 / 12, 12, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '18 months - £'+this.PMT(int_perc / 100 / 12, 18, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '24 months - £'+this.PMT(int_perc / 100 / 12, 24, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '36 months - £'+this.PMT(int_perc / 100 / 12, 36, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '48 months - £'+this.PMT(int_perc / 100 / 12, 48, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '60 months - £'+this.PMT(int_perc / 100 / 12, 60, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                'Cancel',
            ]
        })
    }

    validateAmount = (amount) => {
        if (amount) {
            return true
        } else {
            return false
        }
    }

    PMT(ir, np, pv, fv) {
        /*
            ir - interest rate per month
            np - number of periods (months)
            pv - present value
            fv - future value (residual value)
        */
        pmt = (((pv * Math.pow((1 + ir), np)) - fv) * ir) / (Math.pow((1 + ir), np) - 1);
        return pmt;
    }

    convert(text) {
        var convertedText = this.removeComma(text);
        if(convertedText == '') {
            this.setState({text: ''})
            this.setState({color: null})
        }

        else {
            var n = convertedText.indexOf(".");
            if (n != -1) {
                var secondString = convertedText.substr(n + 1);
                var firstString = convertedText.substr(0, n);
                this.setState({text: '£' + String(firstString).replace(/(.)(?=(\d{3})+$)/g,'$1,') + "." + secondString})
            } else {
                this.setState({text: '£' + String(convertedText).replace(/(.)(?=(\d{3})+$)/g,'$1,')})
            }
            this.setState({color: '#ed018c'})
        }
    }
    removeComma(text) {
        var temp = '';
        for(var i = 0; i  < text.length; i++) {
            if(text[i] != ',' && text[i] != '£'){
                temp += text[i]
            }
        }
        return temp;
    }
    addComma(string) {
        var n = string.indexOf(".");
        if (n != -1) {
            var secondString = string.substr(n + 1);
            var firstString = string.substr(0, n);
            return String(firstString).replace(/(.)(?=(\d{3})+$)/g,'$1,') + "." + secondString
        } else {
            return String(string).replace(/(.)(?=(\d{3})+$)/g,'$1,')
        }
    }

    showActionSheet() {
        ActionSheet.showActionSheetWithOptions({
            options: [
                '12 months - £'+this.PMT(int_perc / 100 / 12, 12, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '18 months - £'+this.PMT(int_perc / 100 / 12, 18, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '24 months - £'+this.PMT(int_perc / 100 / 12, 24, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '36 months - £'+this.PMT(int_perc / 100 / 12, 36, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '48 months - £'+this.PMT(int_perc / 100 / 12, 48, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                '60 months - £'+this.PMT(int_perc / 100 / 12, 60, this.removeComma(this.state.text), 0).toFixed(2) +' per month',
                'Cancel',
            ],
            cancelButtonIndex: CANCEL_INDEX,
            tintColor: '#031B5B'
        },
        (buttonIndex) => {
            console.log(buttonIndex);
            if(buttonIndex != 6) {
                let selectedItem = parseInt(this.state.BUTTONS[buttonIndex]);
                this.setCircleVale(selectedItem);
            }
        });
    };

    setCircleVale(value) {
        this.setState({value: value})           
    }

    render() {
        const {color} = this.state;
        const {navigate} = this.props.navigation;
        const leftButton = (
            <TouchableOpacity>
                <Image
                    style={styles.leftButton}
                    source={require('../assets/images/hamburger.png')}/>
            </TouchableOpacity>
        );
        return (
            <ScrollView>
                <View style={styles.mainContainer}>
                    <View
                        style={[
                        styles.statusBar, {
                            backgroundColor: '#ed018c'
                        }
                    ]}>
                        <StatusBar backgroundColor='#ed018c' barStyle='light-content'/>
                    </View>
                    <Navbar leftButton={leftButton}/>
                    <View style={styles.contentWrapper}>
                        <FontText
                            style={{
                            color: '#ed018c',
                            fontWeight: 'bold',
                            fontSize: 20,
                            fontFamily: 'Roboto'
                        }}>Kue Loan</FontText>
                        <View style={styles.creditView}>
                            <FontText
                                style={{
                                color: '#ed018c',
                                fontWeight: 'bold',
                                fontSize: 18,
                                fontFamily: 'Roboto'
                            }}>£2,000
                            </FontText>
                            <FontText
                                style={{
                                color: '#ed018c',
                                fontWeight: 'normal',
                                fontSize: 14,
                                fontFamily: 'Roboto'
                        }}>Available Credit</FontText>
                        </View>
                    </View>
                    <View
                        style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        paddingRight: 20
                    }}>
                        <View style={styles.monthEarningView}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                paddingTop: 4
                            }}>
                                <View>
                                    <FontText
                                            style={{
                                            color: '#ffffff',
                                            fontWeight: 'bold',
                                            fontSize: 34,
                                            fontFamily: 'Roboto'
                                        }}>
                                        £{this.PMT(int_perc / 100 / 12, this.state.value, this.removeComma(this.state.text), 0).toFixed(2)}                                        
                                    </FontText>
                                </View>
                                <View>
                                    <FontText
                                        style={{
                                        color: '#ffffff',
                                        fontWeight: 'bold',
                                        fontSize: 14,
                                        fontFamily: 'Roboto'
                                    }}>per month
                                    </FontText>
                                </View>
                            </View>
                        </View>
                        <View style={styles.acceptBtn}>
                            <TouchableOpacity style={{}}>
                                <View style={styles.signUpBtn}>
                                    <FontText style={styles.signUpText}>Accept</FontText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        </View>
                        <View style={{
                            width: width - 60,
                            marginLeft: 30
                        }}>
                            <View style={styles.loadAmountView}>
                                <FloatLabelTextField
                                    keyboardType="numeric"
                                    keyboardAppearance='dark'
                                    returnKeyType='done'
                                    flabelPadding={18}
                                    flabelActivePadding={7}
                                    autoCorrect={false}
                                    underlineColorAndroid={'rgba(0,0,0,0)'}
                                    placeholder="Loan Amount"
                                    onChangeText={(text) => {
                                        this.setState({text: text})
                                    }}
                                    value={this.state.text}
                                    style={styles.input}
                                    wrapperStyle={{
                                        backgroundColor: '#ffffff'
                                    }}
                                    activeColor={'#ed018c'}
                                    inactiveColor={color ? color: '#dcdcdc'}

                                    onFocus={() => {
                                        this.setState({text: '£'})
                                    }}
                                    onBlur={() => {
                                        this.setState({focused: false})
                                        this.convert(this.state.text)
                                    }}
                                />
                            </View>
                            <View style={styles.valueView}>
                                <FontText
                                    style={{
                                    color: '#ed018c',
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    fontFamily: 'Roboto',
                                    paddingLeft: 5
                                }}>
                                    For how many months?
                                </FontText>
                                <View>
                                    <Text 
                                        onPress={()=>this.showActionSheet()}
                                        style = {styles.setValue}
                                    >
                                        {this.state.value} months
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.selectValuetView}>
                                <View style={styles.sliderWrapper}>
                                    <View style={styles.startView}>
                                        <FontText style={styles.slideComment}>12</FontText>
                                    </View>
                                    <Slider
                                        style={styles.customSlider}
                                        minimumValue={12}
                                        maximumValue={60}
                                        step={1}
                                        maximumTrackTintColor='#ed018c'
                                        minimumTrackTintColor='#ed018c'
                                        thumbStyle={thumbStyles.thumb}
                                        trackStyle={thumbStyles.track}
                                        value={this.state.value}
                                        thumbTintColor='#ed018c'
                                        onValueChange={(value) => this.setState({value})}/>
                                    <View style={styles.endView}>
                                        <FontText style={styles.slideComment}>60</FontText>
                                    </View>
                                    <FontText
                                        style={{
                                        color: '#ed018c',
                                        fontWeight: 'normal',
                                        fontSize: 12,
                                        fontFamily: 'Roboto',
                                        position: 'absolute',
                                        top: 42,
                                        right: 0
                                    }}>Months</FontText>
                                </View>
                            </View>
                            <View style={styles.infoEntireView}>
                                <View style={styles.infoView}>
                                    <FontText style = {styles.infoItem}>Interest Rate </FontText>
                                    <FontText style = {styles.infoItem}>18%</FontText>
                                </View>
                                <View style={styles.infoView}>
                                    <FontText style = {styles.infoItem}>Total Repayable </FontText>
                                    <FontText style = {styles.infoItem}>
                                        £{this.addComma((this.PMT(int_perc / 100 / 12, this.state.value, this.removeComma(this.state.text), 0) * this.state.value).toFixed(2))}
                                    </FontText>
                                </View>
                                <View style={styles.infoView}>
                                    <FontText style = {styles.infoItem}>Total Interest</FontText>
                                    <FontText style = {styles.infoItem}>
                                        £{this.addComma((this.PMT(int_perc / 100 / 12, this.state.value, this.removeComma(this.state.text), 0) * this.state.value - this.removeComma(this.state.text)).toFixed(2))}
                                    </FontText>
                                </View>
                            </View>
                            <View style={styles.commentView}>
                                <FontText
                                    style={{
                                    color: '#333333',
                                    fontSize: 14,
                                    fontFamily: 'Roboto'
                                }}>
                                    Kue is a trading name of Zeal Online Limited, which is authorised and regulated
                                    by the Financial Conduct Authority (FCA), with permission to conduct activity as
                                    a Credit Provider and Credit Broker. The firm's FCA reference number is 749545,
                                    Registered office: 71-75 Shelton Street, Covent Garden, London, England, WC2H
                                    9JQ. Registered in England and Wales. Registered number: 10114487.
                                </FontText>
                            </View>
                        </View>

                        <Bottom />
                </View>
            </ScrollView>

        )
    }
}

const thumbStyles = StyleSheet.create({
    thumb: {
        width: 38,
        height: 38,
        borderRadius: 20,
        top: 24
    },
    track: {
        height: 2,
        borderRadius: 0
    }
})

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    leftButton: {
        marginTop: 15,
        width: 20,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    contentWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        width: width - 60,
        marginLeft: 30,
        justifyContent: 'space-between'
    },
    creditView: {
        alignItems: 'flex-end'
    },
    monthEarningView: {
        flex: 0.5,
        height: 70,
        backgroundColor: '#ed018c',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    loadAmountView: {
        height: 50,
        marginTop: 20
    },
    signUpBtn: {
        width: 110,
        height: 70,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed018c'
    },
    signUpText: {
        color: '#f8fcff',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    selectValuetView: {
        marginTop: 10
    },
    customSlider: {
        height: 50,
        width: width - 105,
        zIndex: 999
    },
    sliderWrapper: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    startView: {
        marginRight: 5
    },
    endView: {
        marginLeft: 5
    },
    slideComment: {
        color: '#ed018c',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Roboto',
        zIndex: 999
    },
    infoEntireView: {
        marginTop: 30
    },
    infoView: {
        width: width / 2 + 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    infoItem: {
        color: '#ed018c',
        fontWeight: 'normal',
        fontSize: 15,
        fontFamily: 'Roboto'
    },
    commentView: {
        marginTop: 60
    },
    valueView: {
        marginTop: 20,
        paddingLeft: 10,
        paddingTop: 10,
        flex: 1,
        flexDirection: 'column',        
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 7,
        height: 70
    },
    input: {
        color: '#031B5B',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#cccccc',
        height: 55,
        padding: 10,
        paddingTop: 18,
        fontSize: 22,
        paddingBottom: -10,
        fontWeight: 'bold',
        fontFamily: 'arial'
    },
    acceptBtn: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    setValue:{
        fontSize: 22,
        color:'#031B5B',
        fontWeight: 'bold',
        padding: 5
    }

})

export default Payment
