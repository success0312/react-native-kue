import React, {Component} from 'react'
import {StyleSheet, Image, View} from 'react-native';
import NavigationBar from 'react-native-navbar';

class Navbar extends Component {
    render(){
        const rightIconConfig = this.props.title ||
        <View style={styles.iconWrapper}>
            <Image style={styles.iconTitle} source={require("../assets/images/ic_launcher.png")}/>
        </View>

        // const title = this.props.title ||
        //     <View style={styles.iconWrapper}>
        //         <Image style={styles.iconTitle} source={require("../assets/splashScreen.png")}/>
        //     </View>
        return (
            <NavigationBar  rightButton={rightIconConfig}
                            style={styles.navbar}
                            leftButton={this.props.leftButton}/>
        )
    }
}

const styles = StyleSheet.create({
    navbar:{
        backgroundColor:"#ed018c",
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'lightgrey',
        height:70,
        paddingLeft:10,
        padding:0,
        marginTop:-20
    },
    iconTitle:{
        resizeMode:'contain',
        width:100,
        height:60,
        marginTop:6
    },
    iconWrapper:{
        alignSelf:"flex-start"
    }

});

export default Navbar
