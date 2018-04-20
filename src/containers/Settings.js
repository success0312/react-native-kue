/**
 * Created by Evgeniy on 03.10.2016.
 */

import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Navbar from '../components/Navbar'
// import { Actions } from 'react-native-redux-router'
class Settings extends Component {
    render() {

        const leftBtn = {
            title:'Back',
            handler:Actions.pop
        };
        const title = {
            title:"Settings"
        };
        return (
            <View style={{flex:1, backgroundColor:'blue'}}>
                <Navbar leftButton={leftBtn} title={title}/>
                <View>
                    <Text>Setting view</Text>
                </View>
            </View>
        )
    }
}

export default Settings;
