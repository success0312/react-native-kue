import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform, Dimensions} from 'react-native';
import FloatLabelTextField from './FlabelTextfield'
const { height, width } = Dimensions.get('window');

class PaymentInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            color: null,
            labelColor: null,
            focused: false,
            empty: true,
            upperCase: false,
            lowerCase: false,
            numerical: false,
            specialCharacter: false,
            countOfCharacters: false
        }
    }

    hasLowerCase = (str) => {
        return str.toUpperCase() != str;
    }
    hasUpperCase = (str) => {
        return str.toLowerCase() != str;
    }
    hasNumeric = (myString) => {
        return /\d/.test(myString);
    }
    hasSpecialCharacter = (str) => {
        let regularExpression = /^(?=.*[!@%&$*()])/;
        return regularExpression.test(str)
    }
    validatePassword = () => {
        const {text} = this.state
        let validated = this.hasLowerCase(text) && this.hasUpperCase(text) && this.hasNumeric(text)
            && this.hasSpecialCharacter(text) && (text.length >= 8) && (text.indexOf(' ') === -1);
        if (validated) {
            this.setState({color: '#009900', labelColor: '#009900', empty: false})
        } else this.setState({color: '#cc0000', labelColor: '#cc0000', empty: false})
    }
    validate = () => {

        if (this.state.text === '') {
            this.setState({color: '#dcdcdc', labelColor: 'dimgrey', empty: true})
        }
        else if (this.props.titleName.indexOf('Password') !== -1) {
            this.validatePassword()
        }
        else if (this.props.validate(this.state.text)) {
            this.setState({color: '#009900', labelColor: '#009900', empty: false})
        }
        else {
            this.setState({color: '#cc0000', labelColor: '#cc0000', empty: false})
        }

    }
    validateText = (text) => {

        if (this.hasLowerCase(text)) {
            this.setState({lowerCase: true})
        } else this.setState({lowerCase: false})

        if (this.hasUpperCase(text)) {
            this.setState({upperCase: true})
        } else this.setState({upperCase: false})

        if (this.hasNumeric(text)) {
            this.setState({numerical: true})
        } else this.setState({numerical: false})

        if (this.hasSpecialCharacter(text)) {
            this.setState({specialCharacter: true})
        } else this.setState({specialCharacter: false})

        if (text.length >= 8) {
            this.setState({countOfCharacters: true})
        } else this.setState({countOfCharacters: false})
    }

    render() {
        const {color, text, labelColor, focused, upperCase, lowerCase, numerical, specialCharacter, countOfCharacters} = this.state;
        return (
            <View>
                <FloatLabelTextField
                    flabelPadding={14}
                    flabelActivePadding={7}
                    autoCorrect={false}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={this.props.titleName}
                    onChangeText={(text) => {
                        this.setState({text : text})
                    }}
                    value={text}
                    style={[styles.input, {borderColor:color ? color : 'gray'}]}
                    wrapperStyle={{backgroundColor:'white', width: width/2}}
                    activeColor={color ? color : '#031B5B'}
                    inactiveColor={labelColor ? labelColor : 'dimgrey'}
                    onFocus={() => {this.setState({color:'#ed018c', focused:true})} }
                    onBlur={() => {
                     this.setState({focused:false})
                     this.validate()
                    }}
                    secureTextEntry={this.props.titleName === 'Password' ? true : false}
                    empty={this.state.empty}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'gray',
        height: 50,
        padding: 10,
        paddingTop: 12,
        paddingLeft: 11,
        fontSize: 18,
        paddingBottom: -5
    },
    error: {
        color: '#ca0813',
        marginLeft: 3,
        fontSize:12
    },
    crossImg: {
        height: 9,
        width: 9,
        resizeMode: 'contain',
        marginLeft: 7,
        borderRadius:(Platform.OS === 'ios') ? 2 : 10
    },
})

export default PaymentInput
