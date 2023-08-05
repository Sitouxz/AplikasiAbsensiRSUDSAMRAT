import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native'
import React from 'react'

const History = ({navigation}: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Calender</Text>
            <Button
                title="tindis-tindis"
                onPress={()=> Alert.alert('Button Clicked!')}
            />
        </SafeAreaView>
    )
}

export default History

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    }
})