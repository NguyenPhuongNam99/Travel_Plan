
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image, ImageBackground, TextInput
} from 'react-native';

const SecondScreen = () => {
    return (
        
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('../asses/b1.png')}
            />
            <Image
                style={styles.tinyLogo}
                source={require('../asses/b2.png')}
            />
            <Image
           
                style={styles.Logo}
                source={require('../asses/logo.png')}
            />
            <TextInput  style={styles.input} keyboardType='numeric'/>
        </View>
     
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1, resizeMode: 'stretch', width: '100%', height: '100%'
    },
    tinyLogo: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    Logo: {
        position: 'absolute',
        top: '10%',
        left: '33%',
       width:132,
       height:169
    },
    input:{
       
        position:'absolute',
        top:'50%',
        left:'7%',
        borderWidth:1,
        width:'88%',
        borderRadius:30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
});

export default SecondScreen;
