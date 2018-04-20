import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import FloatLabelTextField from './FlabelTextfield'

class CreditInput extends Component{
    constructor(props) {
        super(props);

        this.state = {
            color: 'green',
            labelColor: 'green',
            focused: false,
            empty: true,
            upperCase: false,
            lowerCase: false,
            numerical: false,
            specialCharacter: false,
            countOfCharacters: false
        }
    }

    validate = () => {
            this.setState({color: '#50b950', labelColor: '#50b950', empty: false})

    }
    onClickInput = () =>{
        this.setState({color: '#50b950', labelColor: '#50b950', empty: false})
    }

    render(){
        const {color, labelColor} = this.state;
        const {onClick} = this.props
        return(
            <View>
            <FloatLabelTextField
                editable={this.props.enabled}
                flabelPadding={13}
                flabelActivePadding={3}
                autoCorrect={false}
                underlineColorAndroid={'rgba(0,0,0,0)'}
                placeholder={this.props.titleName}
                value={this.props.text ? this.props.text : this.props.defaultValue}
                style={[styles.input, {borderColor:color ? color : '#dcdcdc'}]}
                wrapperStyle={{marginTop: 15, backgroundColor:'white'}}
                activeColor={color ? color : '#50a1d6'}
                inactiveColor={labelColor ? labelColor : 'dimgrey'}
                onFocus={() => {this.setState({color:'#50a1d6', focused:true, empty:false})
                onClick(); }}
                onBlur={() => {
                     this.setState({focused:false})
                    this.validate()
                    }}
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
        paddingTop: 0,
        fontSize: 18,
        paddingBottom: -5
    },
    crossImg: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        marginLeft: 10
    },
    error: {
        color: '#e78787',
        marginLeft: 5,
        fontSize:15
    },
})

export default CreditInput