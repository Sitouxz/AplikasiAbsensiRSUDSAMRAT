import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Logo } from '../../assets/images'

const SplashScreen = ({navigation}: any) => {

    setTimeout(() => {
        navigation.replace('Login')
    }, 3000);
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.screenContainer}>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.text}>ABSENSI TENAGA HARIAN LEPAS RSUD DR SAM RATULANGI TONDANO</Text>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#4ABEBB',
    },
    screenContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        height: 127,
        width: 97,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffff',
        textAlign: 'center',
        width: 289,
        marginTop: 10,
    },
})