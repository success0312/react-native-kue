import React, {Component} from "react";
import {Text} from 'react-native';

export default  FontText = ({style,children}) =>
    <Text style={[style,{
        fontFamily: 'Roboto'
    }]}>{children}</Text>;