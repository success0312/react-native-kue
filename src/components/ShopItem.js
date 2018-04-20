
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';
import FontText from './FontText';

class ShopItem extends Component {
    render(){
        const lastItemStyles = this.props.isLastItem ? {borderBottomWidth:0, paddingBottom: 15}:{};
        return (
            <View style={[styles.shopItem,lastItemStyles]}>
                <View>
                    <FontText style={styles.shopItemTextLarge}>Shop1</FontText>
                    <FontText style={[styles.shopItemTextSmall, {color:"#312a70"}]}>19 Aug 2016</FontText>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <FontText style={[styles.shopItemTextLarge, {fontWeight:"bold"}]}>£20.78</FontText>
                        <FontText style={styles.shopItemTextSmall}>£220.78</FontText>
                    </View>
                    <Image style={styles.shopArrow} source={require('../assets/images/arrowDown.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    shopItem : {
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'lightgrey',
        borderBottomWidth:1,
        padding:7,
        paddingLeft:20,
        paddingRight:20
    },
    shopItemTextLarge:{
        fontSize:19,
        color:'#312a70'
    },
    shopItemTextSmall:{
        fontSize:13,
        color:'#666666',
        textAlign:"right"
    },
    shopArrow:{
        marginLeft:10,
        marginTop:3,
        width:17,
        height:17
    }
});

export default ShopItem;