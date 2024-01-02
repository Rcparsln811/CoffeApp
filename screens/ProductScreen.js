import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import {HeartIcon} from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import {StarIcon} from 'react-native-heroicons/solid';


export default function ProductScreen(props) {
  const item= props.route.params;
  const navigation = useNavigation();
  return (
    <View style={{flex:1}} >
      <StatusBar style="light"/>
      <Image source={require('../assets/images/beansBackground2.png')}
      style={{height:300, borderBottomLeftRadius:50, borderBottomRightRadius:50, width:'100%', position:'absolute', }} />
      <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:'row' , justifyContent: 'space-between'}} >
          <TouchableOpacity style={{padding:20}} onPress={()=> navigation.goBack()} >
            <ArrowLeftCircleIcon size="50" strokeWidth={1.1} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{padding:20}}  >
            <HeartIcon size="40" color="white" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', shadowColor:themeColors.bgDark, shadowRadius:30, shadowOffset:{width:0,height:30}, shadowOpacity:0.9, }} >
          <Image source={item.image} style={{height:200, width:200, marginTop:60}} />
        </View>
        <View style={{backgroundColor:themeColors.bgLight, flexDirection:'row',height:30, width:55, justifyContent:'center', alignItems:'center', marginLeft:20, borderRadius:20  }} >
          <StarIcon size="20" color="white" />
          <Text style={{color:'white', fontWeight:'600'}} >{item.stars}</Text>
        </View>
        <View style={{flexDirection:'row', marginHorizontal:20, marginTop:10, alignItems:'center', justifyContent:'space-between' }}>
          <Text style={{color:themeColors.text, fontWeight:'500', fontSize:30}}>{item.name}</Text>
          <Text style={{color:themeColors.text,fontWeight:'500', fontSize:20}}>{item.price}</Text>
        </View>
        <View style={{}} >
          <Text style={{color:themeColors.text, fontWeight:'500', fontSize:25, marginTop:25, marginLeft:25}}>Hakkında</Text>
          <Text style={{color:themeColors.text, fontWeight:'500', fontSize:14, padding:10}}>{item.desc}</Text>

        </View>
      </SafeAreaView>
    </View>
  )
}