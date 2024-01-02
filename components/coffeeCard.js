import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { coffeeItems } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { InformationCircleIcon } from 'react-native-heroicons/outline';


export default function CoffeCard({ item }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.coffe}>
                <Image source={item.image} style={{ height: 140, width: 140, }} />


            </View>
            <View style={{}} >
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.starContainer}>
                <Image style={{ width: 15, height: 15, tintColor: 'white', marginRight: 3, }} source={require('../assets/images/star.png')} />
                <Text style={styles.starText}>{item.stars}</Text>
            </View>
            <View style={styles.volumeContainer}>
                <Text style={styles.volumeText}>Volume </Text>
                <Text style={styles.volumeValue}>{item.volume}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>{item.price}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Product', { ...item })}
                    style={{
                        shadowColor: 'black',
                        shadowRadius: 40,
                        shadowOffset: { width: -20, height: -10 },
                        shadowOpacity: 1,
                        padding:15,
                        backgroundColor:'white',
                        borderRadius:50,
                        marginLeft:130,
                        marginTop:15,
                    }}
                >
                    <InformationCircleIcon color={themeColors.bgDark} strokeWidth={2} size={30}/>
                </TouchableOpacity>
        </View>
        </View >
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
        marginTop: 14,
        marginLeft: 20,
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
        marginTop: 10,
        marginLeft: 20,
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