import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform} from 'react-native';
import FloatLabelTextField from './FlabelTextfield'



class SignUpInput extends Component {

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
                    if(this.props.titleName.indexOf('Password') !== -1) { this.validateText(text) }
                    this.setState({text : text
                    })}}
                    value={text}
                    style={[styles.input, {borderColor:color ? color : '#dcdcdc'}]}
                    wrapperStyle={{marginTop: 25, backgroundColor:'white'}}
                    activeColor={color ? color : '#50a1d6'}
                    inactiveColor={labelColor ? labelColor : 'dimgrey'}
                    onFocus={() => {this.setState({color:'#0076c3', focused:true})} }
                    onBlur={() => {
                     this.setState({focused:false})
                     this.validate()
                    }}
                    secureTextEntry={this.props.titleName === 'Password' ? true : false}
                    empty={this.state.empty}
                />
                {
                    color === "#cc0000" ?
                        (<View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', marginTop:5}}>
                            <Image style={styles.crossImg}
                                   source={require('../assets/images/red-cross.png')}/>
                            <FontText style={styles.error}>{this.props.error}</FontText>
                        </View>)
                        :
                        null
                }
                {
                    (this.props.titleName.indexOf('Password') !== -1) && !!focused &&
                    (<View style={[styles.passwordValidation,{flexDirection:'column'}]}>
                        <View style={{marginLeft:7, marginBottom:7}}><FontText style={{fontWeight:'bold',color:'#2d3d6a', fontSize:11}}>Password strength</FontText></View>

                        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginBottom:7}}>
                            <Image style={styles.crossImg}
                                   source={ upperCase ? require('../assets/images/success.png') : require('../assets/images/red-cross.png')}/>
                            <FontText style={{color:'#2d3d6a', marginLeft:5, fontSize:11}}>Upper case letter</FontText></View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginBottom:7}}>
                            <Image style={styles.crossImg}
                                   source={ lowerCase ? require('../assets/images/success.png') : require('../assets/images/red-cross.png')}/>
                            <FontText style={{color:'#2d3d6a', marginLeft:5, fontSize:11}}>Lower case letter</FontText></View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginBottom:7}}>
                            <Image style={styles.crossImg}
                                   source={ numerical ? require('../assets/images/success.png') : require('../assets/images/red-cross.png')}/>
                            <FontText style={{color:'#2d3d6a', marginLeft:5, fontSize:11}}>Numerical</FontText></View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start', marginBottom:7}}>
                            <Image style={styles.crossImg}
                                   source={ specialCharacter ? require('../assets/images/success.png') : require('../assets/images/red-cross.png')}/>
                            <View style={{marginLeft:5, flexDirection:'column', marginTop:(Platform.OS === 'ios') ? -4 : -5}}>
                                <FontText style={{color:'#2d3d6a', fontSize:11}}>Special character</FontText>
                                <FontText style={{color:'#2d3d6a', fontSize:11}}>!@%&*()$</FontText>
                            </View>

                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                <Image style={styles.crossImg}
                                       source={ countOfCharacters ? require('../assets/images/success.png') : require('../assets/images/red-cross.png')}/>
                            <FontText style={{color:'#2d3d6a', marginLeft:5, fontSize:11}}>8 Characters</FontText></View>

                    </View>)
                }
            </View>
        )
    }

}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#dcdcdc',
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
    passwordValidation: {
        padding: 10,
        paddingLeft: 0,
        paddingTop:5,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        backgroundColor: 'white',
        width: (Platform.OS === 'ios') ? 120 : 125,
        marginLeft: 6
    }
})

export default SignUpInput
