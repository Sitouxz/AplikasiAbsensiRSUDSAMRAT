import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, Dimensions } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import { ScreenWidth } from 'react-native-elements/dist/helpers';

const History = ({navigation}: any) => {
    const screenWidht = Dimensions.get('window').width;

    const status = 'Check-In Pagi (WFO)';
    const location = 'RSUD DR SAM RATULANGI TONDANO, Kembuan, Tondano Utara, Minahasa, Sulawesi Utara';
    const time = '08:15:40 1-08-2023'

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('./../../assets/images/Ilustration4.png')}
                style={{width: screenWidht, height: 50}}
                resizeMode='cover'
            />
            <Calendar
            style={{
                height: 350,
            }}
            current={'2023-08-01'}
            onDayPress={day => {
                console.log('selected day', day);
            }}
            markedDates={{
                '2023-08-01': {selected: true, selectedColor: '#14F42B'},
                '2023-08-02': {selected: true, selectedColor: '#F0F414'},
                '2023-08-03': {selected: true, selectedColor: '#F41414'},
                '2023-08-04': {selected: true, selectedColor: '#302DDF'}
            }}
        />
        <View>
            <Image 
                source={require('./../../assets/images/Ilustration5.png')}
                style={{width: screenWidht, height: 110, position: 'absolute'}}
                resizeMode='cover'
            />
            <Text style={styles.status}>{status}</Text>
            <View style={styles.desc}>
                <View style={styles.locationContainer}>
                    <Image 
                        source={require('./../../assets/icons/IconLocation.png')}
                        style={{width: 38, height: 38}}
                    />
                    <Text style={styles.text}>{location}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Image 
                        source={require('./../../assets/icons/IconTime.png')}
                        style={{width: 33, height: 33, marginRight: 2}}
                    />
                    <Text style={styles.text}>{time}</Text>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default History

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    status: {
        fontSize: 25,
        color: '#292F2F',
        paddingLeft: 27
    },
    desc:{
        marginLeft: 15,
        marginTop: 20
    },
    text:{
        fontSize: 17,
        color: '#666666',
        width: '80%',
        marginLeft: 7
    },
    locationContainer:{
        flexDirection: 'row',
    },
    timeContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3,
        marginTop: 15
    },
})