import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Platform, Animated, Easing} from 'react-native';
import Navbar from '../../components/Navbar'
import FontText from '../../components/FontText';
import CreditMainTitle from '../../components/CreditMainTitle'
import Navigation from '../../components/Navigation'
import CreditInput from '../../components/CreditInput'
import Description from '../../components/Description'
import { StackNavigator } from 'react-navigation';

class CheckCreditScore5 extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
        this.anims = this.anims || [1,2,3].map( () => new Animated.Value(0) );
    }

    componentDidMount(){
        var timing = Animated.timing;
        const cycleAnimation = () => {
            Animated.sequence([
                Animated.stagger(300,
                    this.anims.map((anim) => timing(
                        anim, {
                            toValue: 55,
                            easing: Easing.ease,
                            duration: 300,
                            delay: 1
                        }
                    ))
                ),
                Animated.stagger(200,
                    this.anims.map((anim) => timing(
                        anim, {
                            toValue: 220,
                            easing: Easing.ease,
                            duration: 200
                        }
                    )).concat(
                        this.anims.map((anim) => timing(
                            anim, {
                                toValue:-106,
                                easing: Easing.ease,
                                duration: 0
                            }
                        ))
                    )
                )

            ]).start();
        }

        const animation = () => {
            Animated.sequence([
                timing(
                    this.state.fadeAnim,
                    { toValue: 220,
                        duration: 2000,
                    }),

            timing(
                this.state.fadeAnim,
                { toValue: -106,
                    duration: 0
                })

            ]).start(() =>{
                animation()
            })

        }
        animation()




        // animation()
        // setInterval(() => {
        //     animation()
        // }, 1000)

        cycleAnimation()
        setInterval(() => {
            cycleAnimation()
        }, 2200)

        setTimeout(() =>{
            Actions.takingLonger()
        }, 5000)
    }

    render(){
      const { navigate } = this.props.navigation;
        const leftButton = (
            <View>

            </View>
        );
        return(
            <View style={styles.mainContainer}>
                <View style={[styles.statusBar, { backgroundColor: "#ed018c"}]}>
                    <StatusBar backgroundColor="#ed018c" barStyle="light-content"/>
                </View>
                <Navbar leftButton={leftButton}/>
                <ScrollView>
                    <CreditMainTitle/>
                    <Navigation active='2'/>
                    <View style={styles.mainContentWrapper}>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:15}}>
                            <FontText style={styles.titleText}>Please wait while we </FontText>
                            <FontText style={styles.titleText}>assess your credit score</FontText>
                            <Image style={styles.contentImage}
                                   source={require('../../assets/images/bank-building.png')}/>
                            <View style={styles.spinner}>
                                {

                                    [2,1,0].map((ii,item)=>{
                                       return ( <Animated.View key={item} style={[styles.loadBlock, {left:this.anims[ii],right:106}]}></Animated.View>)
                                    })
                                }
                            </View>
                            <View style={[styles.spinner,{overflow:"hidden"}]}>
                                <Animated.View style={{right:106, left:this.state.fadeAnim,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                    <View  style={[styles.loadBlock]}></View>
                                    <View  style={[styles.loadBlock]}></View>
                                    <View  style={[styles.loadBlock]}></View>
                                </Animated.View>

                            </View>
                        </View>
                        <Description padding={50}/>
                        </View>
                    </ScrollView>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'white'
    },
    mainContentWrapper:{
        margin:25,
        marginTop:20
    },
    leftButton: {
        marginTop:15,
        width: 20,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    titleText:{
        color:'#666666',
        fontSize:17
    },
    contentImage:{
        marginTop:35,
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    spinner:{
        overflow:'hidden',
        marginTop:40,
        width:225,
        height:28,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#dcdcdc',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    loadBlock:{
        width:30,
        height:27,
        backgroundColor:'#66cc00',
        marginLeft:5
    }
})

export default CheckCreditScore5
