import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title}: any ) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container:{
        width: 255,
        height: 41,
        backgroundColor: '#015051',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 17,
        color: '#ffff'
    }
})