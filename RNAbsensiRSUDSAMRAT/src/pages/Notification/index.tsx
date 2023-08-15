import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ilustration1, Ilustration6 } from '../../assets/images'
import NotificationCard from '../../components/NotificationCard'

const Notification = ({navigation}: any) => {
    const [getNotification, setGetNotification] = useState([]);
    const [clickedNotifications, setClickedNotifications] = useState([]);

    const notification = [
        {
            title: 'Announcement!',
            desc: 'September 1-2 Libur Bersama',
            date: 'Senin, 1 Agu 2023',
            time: '12:15:40'
        },
        {
            title: 'Announcement!',
            desc: 'September 1-2 Libur Bersama',
            date: 'Selasa, 2 Agu 2023',
            time: '11:15:40'
        },
        {
            title: 'Announcement!',
            desc: 'September 1-2 Libur Bersama',
            date: 'Rabu, 3 Agu 2023',
            time: '09:15:40'
        }
    ];

    const handleNotificationClick = (index) => {
        if (clickedNotifications.includes(index)) {
            // setClickedNotifications(clickedNotifications.filter(i => i !== index));
        } else {
            setClickedNotifications([...clickedNotifications, index]);
        }
    };
    

    useEffect(() => {
        setGetNotification(notification);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image 
                    source={Ilustration1}
                    style={{position: 'absolute'}}
                /> 
                <View style={styles.header}>
                    <Text style={styles.notification}>Notifications</Text>
                    <Image
                        source={Ilustration6}
                        style={{width: 115, height: 117, marginTop: 75}}
                    />
                </View>
                <View style={styles.notificationCard}>
                        {getNotification.map((notif, index) =>(
                            <NotificationCard 
                                key={index}
                                backgroundColor={clickedNotifications.includes(index) ? '#fff' : '#99DCDA'}
                                title={notif.title}
                                desc={notif.desc}
                                date={notif.date}
                                time={notif.time}
                                onPress={() => handleNotificationClick(index)}
                            />
                        ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header:{
        height: 200,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 25,
    },
    notification:{
        fontSize: 25,
        color: '#4F2A2A',
        fontWeight: 'bold',
        marginTop: 100
    },
    notificationCard:{
        flex: 1,
        paddingBottom: 90,
    },
})