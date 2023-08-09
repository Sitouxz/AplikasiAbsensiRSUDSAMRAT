import { StyleSheet, Text, View, Button, Alert, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ProfilePicture } from '../../assets/images'

const Profile = ({navigation}: any) => {
    const [picture, setPicture] = useState(ProfilePicture);
    const [name, setName] = useState('Leonardo Polandos S.Kom');
    const [id, setId] = useState('19740516 199705 1 001');
    const [division, setDivision] = useState('Unit Pengelolah Teknologi & Informasi Rumah Sakit Front-End Developer');
    const [agency, setAgency] = useState('Pemerintah Provinsi Sulawesi Utara');
    const [office, setOffice] = useState('RSUD DR Sam Ratulangi Tondano');
    const [eselon, setEselon] = useState('III - a');
    const [rankAndClas, setRankAndClass] = useState('Pembina Tk. I / IV - B');
    const [appVersion, setAppVersion] = useState('v.2.3.0');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image
                        source={picture}
                        style={{width: 86, height: 86}}
                    />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.id}>{id}</Text>
                    <Text style={styles.division}>{division}</Text>
                </View>
                <View style={styles.descContainer}>
                    <View>
                        <Text style={styles.title}>Data Pegawai</Text>
                        <View style={styles.descWrapper}>
                            <Text style={styles.text}>Instansi</Text>
                            <Text style={styles.text}>{agency}</Text>
                        </View>
                        <View style={{...styles.descWrapper, marginTop: 22}}>
                            <Text style={styles.text}>Kantor</Text>
                            <Text style={styles.text}>{office}</Text>
                        </View>
                        <View style={{...styles.descWrapper, marginTop: 22}}>
                            <Text style={styles.text}>Eselon</Text>
                            <Text style={styles.text}>{eselon}</Text>
                        </View>
                        <View style={{...styles.descWrapper, marginTop: 22}}>
                            <Text style={styles.text}>Pangkat/Gol</Text>
                            <Text style={styles.text}>{rankAndClas}</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 44, borderColor: '#C4C4C4', borderTopWidth: 2, paddingTop: 26}}>
                        <Text style={styles.title}>Pengaturan</Text>
                        <View style={{...styles.descWrapper, paddingBottom: 170}}>
                            <Text style={styles.text}>App Version</Text>
                            <Text style={styles.text}>{appVersion}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header:{
        backgroundColor: '#01A7A3',
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        paddingTop: 56,
        paddingBottom: 5,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        shadowColor: '#000000',
        shadowOffset: {width:5, height:5},
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    name:{
        fontSize: 15,
        fontWeight: '500',
        color: '#4D4D4D',
        marginTop: 5
    },
    id:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#F5F5F5',
        marginTop: 13
    },
    division:{
        fontSize: 11,
        fontWeight: '500',
        color: '#4D4D4D',
        textAlign: 'center',
        width: 166,
    },
    descContainer:{
        flex: 1,
        paddingTop: 83,
        paddingLeft: 11,
        paddingRight: 13
    },
    title:{
        fontSize: 15,
        color: '#0F0F0F',
        marginBottom: 15
    },
    descWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 32,
    },
    text:{
        fontSize: 13,
        color: '#4D4D4D',
        opacity: 0.9
    },
})