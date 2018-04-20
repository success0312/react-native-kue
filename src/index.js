import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

// import Settings from './containers/Settings'
// import MainView from './containers/MainView'

// --------- Credit Application process ---------
import SignUp from './containers/user/SignUp'
import Credit1 from './containers/credit_application/1_Credit'
import Credit2 from './containers/credit_application/2_Credit'
import Credit3 from './containers/credit_application/3_Credit'
import AddAdress3 from './containers/credit_application/3_AddAddress'
import EditAdress3 from './containers/credit_application/3_EditAddress'
import Finance4 from './containers/credit_application/4_Financial'
import CheckCreditScore5 from './containers/credit_application/5_CheckCreditScore'
import Payment from './containers/Payment'
// import './containers/test/chat'
 // import HomeScreen from './containers/test/homescreen'
 // import ChatScreen from './containers/test/chat'
// import Credit from './containers/Credit'
// import SecondCredit from './containers/SecondCredit'
// import ThirdCredit from './containers/ThirdCredit'
// import AddAddress from './containers/AddAddress'
// import EditAddress from './containers/EditAddress'
// import Financial from './containers/Financial'
// import CheckingScore from './containers/CheckingScore'
// import TakingLonger from './containers/TakingLonger'
// import CheckingScoreDone from './containers/CheckingScoreDone'
// import Offers from './containers/Offers'
// import NoOffers from './containers/NoOffers'
// import AcceptOffer from './containers/AcceptOffer'
// import Purchase from './containers/Purchase'


const App = StackNavigator({
  // settings: {screen: Settings},
  // launch: {screen: MainView},
  //

  signUp: {screen: SignUp},
  Creditlink1 : {screen: Credit1},
  Creditlink2 : {screen: Credit2},
  Creditlink3 : {screen: Credit3},
  AddAdress3 : {screen: AddAdress3},
  EditAdress3 : {screen: EditAdress3},
  Financelink4 :{screen : Finance4},
  CheckCreditScorelink5 : {screen : CheckCreditScore5 },
  Payment : {screen: Payment}
  // Home: {screen: HomeScreen},
  // Chat: {screen: ChatScreen},
}
);

AppRegistry.registerComponent('Kue', () => App);

export default class Application extends Component {
    render () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
