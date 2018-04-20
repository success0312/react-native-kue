import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, Dimensions, WebView} from 'react-native';
import Drawer from 'react-native-drawer'

import Menu from '../components/Menu'
import Navbar from '../components/Navbar';
import ShopItem from '../components/ShopItem';
import FontText from '../components/FontText';

// import urls from '../config';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {modalVisible: false};
    }
    render() {
        const leftButton = (
            <View>
                <TouchableOpacity onPress={() => this._drawer.open()}>
                    <Image style={styles.leftButton}
                           source={require('../assets/images/hamburger.png')}/>
                </TouchableOpacity>
            </View>
        );

        return (
            <Drawer
                openDrawerOffset={.35}
                panThreshold={.4}
                panOpenMask={.3}
                tapToClose={true}
                ref={(ref) => this._drawer = ref}
                type="static"
                content={<Menu onOpenModal={()=> {
                    this.setState({modalVisible:true});
                    this._drawer.close();
                }}/>}
            >
                <View style={{flex:1,backgroundColor:'white'}}>
                    <Navbar leftButton={leftButton}/>
                    <ScrollView style={styles.scrollableContent}>
                        <Modal
                            animationType={'slide'}
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => 1}
                        >
                            <View style={styles.container}>
                                <View style={styles.innerContainer}>
                                    <View style = {styles.modalHeader}>
                                        <View style={{flex:2}}>
                                        <FontText style={styles.modalText}>Apply for credit</FontText>
                                            </View>
                                        <View style={{flex:1, alignItems: 'flex-end'}}>
                                            <TouchableOpacity onPress = {()=> this.setState({modalVisible: false})}>
                                                <Image style={styles.icon} source={require('../assets/images/cross.png')}/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style = {{flex: 1}}>
                                    <WebView
                                        source={{uri: urls.webView}}
                                        style={styles.webView}
                                    />
                                        </View>
                                </View>
                            </View>
                        </Modal>
                        <View style={styles.headerItems}>
                            <View style={styles.item}>
                                <FontText style = {styles.accountInfoText}>Account: 1234567</FontText>
                                <FontText style = {[styles.accountInfoText, {paddingBottom:15}]}>Sort Code: 12-23-60</FontText>
                                <FontText style = {styles.accountInfoText}>Credit Balance: £750</FontText>
                            </View>
                            <View style={style = {marginTop: -5}}>
                                <FontText style={styles.headerItemText}>£2,042</FontText>
                                    <FontText style={styles.headerItemDateText}>Balance</FontText>
                            </View>

                        </View>


                        <View>
                            <FontText style={styles.itemMonthText}>August 2016</FontText>
                        </View>
                        <View>
                            {[1, 2, 3, 4].map((n,i,arr) => <ShopItem isLastItem={i === arr.length-1} key={n}/>)}
                        </View>

                        <View>
                            <FontText style={styles.itemMonthText}>July 2016</FontText>
                        </View>
                        <View>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((n,i,arr) => <ShopItem isLastItem={i === arr.length-1} key={n}/>)}
                        </View>


                    </ScrollView>
                </View>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    scrollableContent: {
        //flex:1,
        //paddingTop: 5
    },
    icon:{
        width:20,
        height:20,
        borderRadius: 10
    },
    shopItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'lightgrey',
        borderBottomWidth: 1,
        padding: 15
    },
    headerItems: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: "space-between",
        padding: 20,
        paddingTop: 25
    },
    headerItemText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#312a70'
    },
    headerItemDateText: {
        fontSize: 16,
        alignSelf: 'flex-end',
        color: '#312a70',

    },
    itemMonthText: {
        fontSize: 16,
        color: '#312a70',
        fontWeight:"500",
        paddingLeft: 20,
        backgroundColor: '#f2f2f2',
        padding: 1
    },
    accountInfoText: {
        fontSize: 16,
        color: '#312a70',
    },
    leftButton: {
        marginTop:15,
        width: 20,
        height: 25,
        marginLeft:5,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',


    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        height: Dimensions.get('window').height - 100,
    },
    modalHeader: {
        height: 30,
        flexDirection: 'row'
    },
    modalText: {
        color: '#312a70',
        fontSize: 20,
        fontWeight: '500'
    },
    webView: {
        height: Dimensions.get('window').height - 200,
        width: Dimensions.get('window').width - 80,
    }
});


export default MainView;
