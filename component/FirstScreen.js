
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

const FirstScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/logo.png')}
                        resizeMode='center'
                    />
                    <Image
                        style={styles.header_title}
                        source={require('../assets/ok.png')}
                        resizeMode='contain'
                    />
                    <Image
                        style={styles.map}
                        source={require('../assets/map.png')}
                        resizeMode='stretch'
                    />
                    <Image
                        style={styles.cloud1}
                        source={require('../assets/cloud.png')}
                        resizeMode='stretch'
                    />
                    <Image
                        style={styles.cloud2}
                        source={require('../assets/map3.png')}
                        resizeMode='stretch'
                    />
                    <Image
                        style={styles.group}
                        source={require('../assets/Group.png')}

                    />
                    <Image
                        style={styles.home}
                        source={require('../assets/home.png')}

                    />
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    tinyLogo: {
        position: 'absolute',
        top: '-4%',
        left: '12%',
        width: '80%'

    },
    header_title: {
        position: 'absolute',
        top: '16%',
        left: '42%',

    },
    map: {
        position: 'absolute',
        top: '35%',
        left: '1%',
        width: '100%'
    },
    group: {
        position: 'absolute',
        top: '26%',
        left: '1%',
        width: '100%'
    },
    home: {
        position: 'absolute',
        top: '67%',
        left: '1%',
        width: '100%'
    },
    cloud1: {
        position: 'absolute',
        top: '18%',
        left: '5%'
    }, cloud2: {
        position: 'absolute',
        top: '5%',
        right: '1%'
    }
});

export default FirstScreen;
