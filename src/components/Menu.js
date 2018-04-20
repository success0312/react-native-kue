import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Platform} from 'react-native';
// import {Actions} from 'react-native-redux-router'
// import PushNotification from '../lib/pushNotification';
import FontText from './FontText';

class Menu extends Component {
    sendLocalNotification = () =>{
        let date = new Date(Date.now() + 5000);

        if (Platform.OS === 'ios'){
            date = date.toISOString();
        }
        PushNotification.localNotificationSchedule({
            largeIcon: "ic_launcher",
            smallIcon: "ic_notification",
            bigText: "£2.55 spent at Costa Coffee",
            color: "red",
            vibrate: true,
            vibration: 300,

            title: "New notification",
            message: "£2.55 spent at Costa Coffee",
            date: date
    });

    };
    render(){
        const menuOptions = [
            {text:"Purchases", route: Actions.purchase, path:'../assets/purchases.png'},
            {text:"Card", route: Actions.settings, path:'../assets/credit-card.png'},
            {text:"My Account", route: this.props.onOpenModal, path:'../assets/accounts.png'},
            {text:"Messages", route: Actions.settings, path:'../assets/message.png'},
            {text:"Support", route: Actions.settings, path:'../assets/support.png'},
            {text:"Log out", route:()=> this.sendLocalNotification(), path:'../assets/log-out.png'}
        ];
        return (
            <View style={styles.container}>
                <View style={[styles.avatarWrapper, {alignItems:'center'}]}>
                    <Image source={require('../assets/images/avatar.png')} style={styles.avatar}/>
                    <FontText style={{paddingTop:10,fontSize:17,color:'white'}}>Jessica Jones</FontText>
                </View>
                <View style={styles.menuList}>
                    <TouchableOpacity onPress={Actions.purchase}>
                        <View style={styles.menuItem}>
                            <Image  style = {styles.icon} source = {require('../assets/images/purchases.png')}></Image>
                            <FontText style={styles.menuItemText}>Purchases</FontText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Actions.credit}>
                        <View style={styles.menuItem}>
                            <Image  style = {styles.icon} source = {require('../assets/images/credit-card.png')}></Image>
                            <FontText style={styles.menuItemText}>Card</FontText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onOpenModal}>
                        <View style={styles.menuItem}>
                            <Image  style = {styles.icon} source = {require('../assets/images/accounts.png')}></Image>
                            <FontText style={styles.menuItemText}>My Account</FontText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Actions.settings}>
                        <View style={styles.menuItem}>
                            <Image  style = {styles.icon} source = {require('../assets/images/message.png')}></Image>
                            <FontText style={styles.menuItemText}>Messages</FontText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Actions.settings}>
                        <View style={styles.menuItem}>
                            <Image  style = {styles.icon} source = {require('../assets/images/support.png')}></Image>
                            <FontText style={styles.menuItemText}>Support</FontText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Actions.signUp}>
                        <View style={styles.menuItem}>
                            <Image  style = {styles.icon} source = {require('../assets/images/log-out.png')}></Image>
                            <FontText style={styles.menuItemText}>Log out</FontText>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const MenuItem = ({text,route, path}) =>
    <TouchableOpacity onPress={route}>
         <View style={styles.menuItem}>
             <Image source = {require('../assets/images/avatar.png')}></Image>
             <FontText style={styles.menuItemText}>{text}</FontText>
          </View>
    </TouchableOpacity>;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#031b5b',
        justifyContent:'flex-start',
        paddingTop:10
    },
    menuList:{
        justifyContent:'flex-start',
        borderBottomWidth:1,
        borderColor:"#394594",
    },
    avatar:{
        width:124,
        height:124,
        alignSelf:'center',
        borderRadius: 62
    },
    avatarWrapper:{
        alignSelf:'center',
        marginBottom:32,
        marginTop:35
    },
    menuItem:{
        borderColor:"#394594",
        borderTopWidth:1,
        padding:1,
        justifyContent:'flex-start',
        height:43,
        paddingLeft:25,
        flexDirection:'row',
        alignItems:'center'
    },
    menuItemText:{
        fontSize:17, color:'white'
    },
    icon:{
        height:20,
        width:20,
        resizeMode:'contain',
        marginRight:10
    }
});

export default Menu;
