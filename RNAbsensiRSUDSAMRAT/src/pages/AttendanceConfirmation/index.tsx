import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import SwipeButton from 'rn-swipe-button'
import axios from 'axios'

const AttendanceConfirmation = ({imageData, navigation, attdType}: any) => {

    const [scheduleId, setScheduledID] = useState(580);
    const [employeeId, setEmployeeId] = useState(2);
    const [attendanceDate, setAttendaceDate] = useState('');
    const [clockIn, setClockIn] = useState('');
    const [clockOut, setClockOut] = useState('')
    const [locationLatIn, setLocationLatIn] = useState(37.7749);
    const [locationLongIn, setLocationLongIn] = useState(-122.4194);
    const [locationLatOut, setLocationLatOut] = useState(37.7749);
    const [locationLongOut, setLocationLongOut] = useState(-122.4194);
    const [selfieUrlCheckIn, setSelfieUrlCheckIn] = useState('https://rb.gy/fre1l');
    const [selfieUrlCheckOut, setSelfieUrlCheckOut] = useState('https://rb.gy/fre1l');
    const [status, setStatus] = useState('CheckIn');
    const [attendanceType, setAttendanceType] = useState(attdType);

    useEffect(() => {
        // console.log('attendanceType:', attendanceType)
        const date = String(new Date().getDate()).padStart(2, '0'); 
        const month = String(new Date().getMonth() + 1).padStart(2, '0'); 
        const year = String(new Date().getFullYear()).padStart(2, '0');
        const hours = String(new Date().getHours()).padStart(2, '0'); 
        const min = String(new Date().getMinutes()).padStart(2, '0'); 
        const sec = String(new Date().getSeconds()).padStart(2, '0'); 

        setAttendaceDate(
            year + '-' + month + '-' + date
        );

        setClockIn(
            year + '-' + month + '-' + date + 'T' + hours + ':' + min + ':' + sec
        );

        setClockOut(
            year + '-' + month + '-' + date + 'T' + hours + ':' + min + ':' + sec
        );
    }, [])

    const reOpenCamera = () => {
        navigation?.replace('OpenCamera', { attendanceType: attendanceType });
    }

    const url = `http://rsudsamrat.site:9999/api/v1/dev/attendances/checkInMasuk`;
    const data = {
        "scheduleId": scheduleId,
        "employeeId": employeeId,
        "attendanceDate": attendanceDate,
        "clockIn": clockIn,
        "clockOut": clockOut,
        "locationLatIn": locationLatIn,
        "locationLongIn": locationLongIn,
        "selfieUrlCheckIn": selfieUrlCheckIn,
        "status": status,
        "attendanceType" : attendanceType
    };
    const headers = {
        'Content-Type': 'application/json'
    };

    const afterSwipe = () => {
        axios.post(url, data, {headers})
        .then(function (response) {
            console.log('attendanceID:',response.data.attendanceId);
            navigation?.replace('AttendanceDone');
        })
        .catch(function (error) {
            console.log('error:',error);
        });
        console.log(
            'scheduledId',scheduleId,'\n',
            'employeeID',employeeId,'\n',
            'attendancDate',attendanceDate, '\n',
            'clockIn',clockIn, '\n',
            'clockOut',clockOut, '\n',
            'locationLatIn',locationLatIn, '\n',
            'locationLongIn',locationLongIn, '\n',
            // 'locationLatOut',locationLatOut, '\n',
            // 'locationLongOut',locationLongOut, '\n',
            'selfieUrlCheckIn',selfieUrlCheckIn, '\n',
            // 'selfieUrlCheckOut',selfieUrlCheckOut, '\n',
            'status',status, '\n',
            'attendanceType',attendanceType
        )
    }

return (
    <SafeAreaView style={styles.page}>
        <Text style={styles.title}>Konfirmasi Foto</Text>
        <View style={styles.photoContainer}>
            <Image 
                source={{uri: 'file://' + imageData}}
                // source={require('./../../assets/images/ProfilePicture.png')}
                style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 15
                }}
                />
        </View>
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            onPress={()=> {
                reOpenCamera();
        }}>
            <Text style={{fontSize: 23, color: '#262D33', fontWeight: '600'}}>Take Again</Text>
        </TouchableOpacity>
        <View style={{width: '75%', marginTop: 20}}>
            <SwipeButton
                title='Swipe to Check-in'
                thumbIconImageSource={require('./../../assets/icons/Expand_right_double.png')} 
                railBackgroundColor="#03AD00"
                railBorderColor="#03AD00"
                thumbIconBackgroundColor='#fff'
                thumbIconBorderColor='#fff'
                titleStyles={{fontSize:23, color:'#fff', fontWeight:'600'}}
                shouldResetAfterSuccess={true}
                onSwipeSuccess={afterSwipe}
            />
        </View>
    </SafeAreaView>
)
}

export default AttendanceConfirmation

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#4ABEBB',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        fontWeight: '500',
        color: '#fff',
        marginTop: 93,
        marginBottom: 20
    },
    photoContainer:{
        height: '50%',
        width: '70%',
        marginBottom: 36
    },
    button:{
        width: '70%',
        backgroundColor: '#61F8F5',
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }
})