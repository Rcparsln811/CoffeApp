import { View, Text, StyleSheet, StatusBar, ImageBackground, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform, } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme/index'
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel'
import CoffeCard from '../components/coffeeCard';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image style={styles.beansbg} source={require('../assets/images/beansBackground1.png')}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Avatar ve Bildirim İkonu*/}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Image style={styles.avatar} source={require('../assets/images/avatar.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center',}}>
            <Image style={{ width: 30, height: 40, tintColor: '#B87A40' }} source={require('../assets/images/pin.png')} />
            <Text style={{ fontWeight: '600', fontSize: 16, }}>Istanbul,Turkiye</Text>
          </View>
          <Image style={{ width: 30, height: 30, marginRight: 10, }} source={require('../assets/images/bell.png')} />
        </View>
        {/* Arama Barı */}
        <View style={[styles.container2, { marginTop: 85, }]}>
          <View style={styles.searchBar}>
            <TextInput placeholder='Ara' placeholderTextColor={'black'} style={styles.input} />
            <TouchableOpacity style={[styles.button, { backgroundColor: '#B87A40' }]}>
              <Image style={{ width: 15, height: 15, tintColor: 'white', }} source={require('../assets/images/search.png')} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Katagoriler */}
        <View style={{ paddingHorizontal: 5, marginTop: 10, marginBottom:55, }}>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              const isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={[
                    styles.button2,
                    isActive ? styles.buttonActive : styles.buttonInactive
                  ]} >
                  <Text style={{color:'black', opacity:0.9}} >{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        {/* Kahve Kartları */}
        <View style={{ flex: 1, justifyContent: 'center', overflow: 'visible', }}>
          <Carousel
          data={coffeeItems}
          renderItem={({item})=> <CoffeCard item={item}/> }
          firstItem={0}
          inactiveSlideOpacity={0.75}
          inactiveSlideScale={0.77}
          sliderWidth={400}
          itemWidth={260}
          slideStyle={{display: 'flex' , alignItems:'center'}}
          />
          </View>


      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  beansbg: {
    width: '100%',
    position: 'absolute',
    opacity: 0.1,
    top: -5,
    height: 180,
  },
  avatar: {
    marginLeft: 10,
    marginTop: 10,
    height: 50,
    width: 50,
    borderRadius: 50,

  },
  container2: {
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    padding: 2,
    backgroundColor: '#e6e6e6',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    fontWeight: '600',
    color: 'black',
    opacity:0.9,
  },
  button: {
    borderRadius: 999,
    padding: 15,
    opacity: 0.8,
    marginRight: 5,
  },
  item: {
    padding: 20,
    margin: 10,
    backgroundColor: '#eaeaea',

  },
  button2: {
    marginTop: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginRight: 2,
    borderRadius: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    

  },
  buttonActive: {
    backgroundColor: themeColors.bgLight,
  },
  buttonInactive: {
    backgroundColor: 'rgba(0,0,0,0.07)',
  },



})