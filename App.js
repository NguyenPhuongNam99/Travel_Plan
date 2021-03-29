
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
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     {/* <FirstScreen /> */}
     <SecondScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});

export default App;
