import { Image, StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ilustration3, Logo } from '../../assets/images'
import Button from '../../components/Button'
import Gap from '../../components/Gap'
import axios from 'axios';

const Login = ({navigation}: any) => {
    const [nik, setNik] = useState('')
    const [password, setPassword] = useState('')
    
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    
    const imageWidth = screenWidth * 1;
    const imageHeight = imageWidth * (2 / 1);
    
    const url = 'http://192.168.88.208:3001/api/auth/login'; //local
    const data = {
        "nik": nik,
        "password": password
    };
    const headers = {
        'Content-Type': 'application/json'
    };

    const handleClickLogin = () => {
        axios.post(url, data, {headers})
        .then(function (response) {
            navigation?.replace('Tabs');
            console.log('test')
        })
        .catch(function (error) {
            console.log('error:',error);
            Alert.alert(
                'NIK/Password tidak sesuai!',
                'Pastikan NIK dan Password di isi dengan benar.',
                [
                    {
                        text: 'OK',
                        style: 'default',
                    },
                ],
            )
        });
    };

    return (
        <SafeAreaView style={styles.page}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={Ilustration3} style={{width: imageWidth, height: imageHeight, position: 'absolute'}} />
                    <Image source={Logo} style={styles.logo} />
                    <Text style={styles.text}>RSUD DR SAM RATULANGI TONDANO</Text>
                    <Gap height={93}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNik}
                        value={nik}
                        placeholder='NIK'
                        keyboardType='numeric'
                        />
                    <Gap height={76}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder='Kata Sandi'
                        />
                    <Gap height={82}/>
                    <Button title="Log in" onPress={handleClickLogin}/> 
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
    container:{
        alignItems: 'center',
        paddingBottom: '30%'
    },
    logo:{
        height: 115,
        width: 88,
        marginTop: 120
    },
    text:{
        fontSize: 17,
        color: '#293030',
        marginTop: 30
    },
    input:{
        height: 40,
        width: 320,
        borderBottomWidth: 2,
        borderColor: '#4E7674',
    }
})