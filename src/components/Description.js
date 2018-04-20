import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';


class Description extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View style={{paddingTop:this.props.padding}}>
                <FontText style={{fontWeight:'bold', color:'black'}}>
                    Kue Credit Application
                </FontText>
                <FontText style={{color:'black'}}>
                    The credit arranger, Zeal Online Limited trading as Kue,
                    acts solely as a credit broker and provides credit products
                    from selected credit providers and is authorised and regulated
                    by the Financial Conduct Authority with number xxxx. Registered office: 71-75 Shelton
                    Street, Covent Garden, London, England, WC2H 9JQ. Registered in England and Wales.
                    Registered number: 10114487.
                </FontText>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})

export default Description