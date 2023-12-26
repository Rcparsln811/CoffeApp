import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { coffeeItems } from '../constants'


export default function CoffeCard({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.coffe}>
                <Image source={item.image} style={{ height: 140, width: 140, }} />


            </View>
            <View style={{}} >
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.starContainer}>
                <Image style={{ width: 15, height: 15, tintColor: 'white', marginRight:3, }} source={require('../assets/images/star.png')} />
                <Text style={styles.starText}>{item.stars}</Text>
            </View>
            <View style={styles.volumeContainer}>
                <Text style={styles.volumeText}>Volume </Text>
                <Text style={styles.volumeValue}>{item.volume}</Text>
            </View>
            <View>
                <Text style={{color:'white', fontWeight:'bold', marginTop:20, marginLeft:20, }}>$ {item.price}</Text>


            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250,
        borderRadius: 40,
    },
    coffe: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 27,
        paddingLeft: 10,
        paddingTop: 10,
        color: 'white',
        fontWeight: '700',
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        padding: 1,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: 64,
        marginTop:14,
        marginLeft:20,
    },
    starText: {
        fontSize: 17, 
        fontWeight: 'bold',
        color: 'white',
    },
    volumeContainer: {
        flexDirection: 'row',
        marginBottom: 6,
        zIndex: 10,
        marginTop:10,
        marginLeft:20,
    },
    volumeText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        opacity: 0.6,
    },
    volumeValue: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    },







});