
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import FirstScreen from './component/FirstScreen'
import SecondScreen from './component/SecondScreen'
import ConfirmOTP from './component/ConfirmOTP'
import  {assests}from './assests/fonts'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     {/* <FirstScreen /> */}
     <ConfirmOTP />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});

export default App;
