import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const Notification = ({navigation}: any) => {
    return (
        <View style={styles.container}>
        <Text>Notification</Text>
        <Button
            title="tindis-tindis"
            onPress={()=> Alert.alert('Button Clicked!')}
        />
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
})