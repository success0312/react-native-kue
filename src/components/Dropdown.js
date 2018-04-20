import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform} from 'react-native';


class Dropdown extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const top = (Platform.OS === 'ios') ? -2 : 2;
        const {onClick} = this.props;
        const margin = (Platform.OS === 'ios') ? 9 : 13
        return (
            <TouchableOpacity onPress={() => onClick()}>
                <View style={[styles.dropdownComponent, {borderColor: this.props.text ? '#009900' : '#dcdcdc' }]}>
                    <FontText
                        style={[styles.upperText, {color: this.props.text ? '#009900' : 'dimgrey', fontWeight:'bold' }]}>{this.props.text ? this.props.placeholder : ''}</FontText>
                    <FontText
                        style={[styles.innerText, {color: this.props.text ? 'black' : 'dimgrey', marginLeft: this.props.text ? 9 : margin, marginTop: this.props.text ? 0 : top }]}>{this.props.text ? this.props.text : this.props.placeholder}</FontText>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    dropdownComponent: {
        height: 50,
        borderRadius: 7,
        borderWidth: 1,
        flexDirection: 'column'
    },
    innerText: {
        fontSize: 18
    },
    upperText: {
        marginTop: 2,
        fontSize: 12,
        marginLeft: 10
    }
})

export default Dropdown