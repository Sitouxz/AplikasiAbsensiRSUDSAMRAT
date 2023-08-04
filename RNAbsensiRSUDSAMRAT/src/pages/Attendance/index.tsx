import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const Attendance = ({navigation}: any) => {
    return (
        <View style={styles.container}>
        <Text>Absensi</Text>
        <Button
            title="tindis-tindis"
            onPress={()=> Alert.alert('Button Clicked!') }
        />
        </View>
    )
}

export default Attendance

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
})