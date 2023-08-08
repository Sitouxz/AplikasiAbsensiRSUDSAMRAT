import { StyleSheet, Text, View, Button, Alert, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Ilustration1, Ilustration6 } from '../../assets/images'
import NotificationCard from '../../components/NotificationCard'

const Notification = ({navigation}: any) => {
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
                    <NotificationCard backgroundColor="#99DCDA" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#fff" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#99DCDA" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#fff" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#99DCDA" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#fff" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#99DCDA" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#fff" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#99DCDA" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
                    <NotificationCard backgroundColor="#fff" title="Announcement!" desc="September 1-2 Libur Bersama" date="Mon, 1 Aug 2023" time="09:15:40"/>
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
        paddingBottom: 172,
    },
})