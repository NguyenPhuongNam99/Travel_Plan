
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,ImageBackground
} from 'react-native';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../asses/b1.png')} style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={require('../asses/b2.png')}
          resizeMode='center'
        />
        </ImageBackground>
       
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
     flex:1
 },
 image:{
     flex:1
 },
 tinyLogo:{
     flex:1,
     width:'100%',
     height:'100%'
 }
});

export default SecondScreen;
