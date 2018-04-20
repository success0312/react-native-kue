import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    Platform,
    Dimensions
} from 'react-native';

var {FBLogin, FBLoginManager} = require('react-native-facebook-login'); 

const {height, width} = Dimensions.get('window');

class Bottom extends Component {
    
    render() {
        const _this = this
        return (
            <View style={styles.bottomView}>
                <View style={styles.iconView}>
                    <FBLogin style={{ marginBottom: 10, }}
                        permissions={["email","user_friends"]}
                        onLogin={function(data){
                            console.log("Logged in!");
                            console.log(data);
                            _this.setState({ user : data.credentials });
                        }}
                        onLogout={function(){
                            console.log("Logged out.");
                            _this.setState({ user : null });
                        }}
                        onLoginFound={function(data){
                            console.log("Existing login found.");
                            console.log(data);
                            _this.setState({ user : data.credentials });
                        }}
                        onLoginNotFound={function(){
                            console.log("No user logged in.");
                            _this.setState({ user : null });
                        }}
                        onError={function(data){
                            console.log("ERROR");
                            console.log(data);
                        }}
                        onCancel={function(){
                            console.log("User cancelled.");
                        }}
                        onPermissionsMissing={function(data){
                            console.log("Check permissions!");
                            console.log(data);
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomView: {
        width: width,
        height: 70,
        marginTop: 20,
        backgroundColor: '#ed018c'
    },

    iconView: {
        width: width - 60,
        height: 70,
        marginLeft: 20,
        backgroundColor: '#ed018c',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },

    socialIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginLeft: 10
    },
})

export default Bottom