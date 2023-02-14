import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors'

export default function MoviesVertical({navigation, data}) {
  return (
    <ScrollView style={styles.base}>
      {data.items.map((item)=>{
      return <TouchableOpacity style={styles.layout} onPress={()=>navigation.navigate('Detail', { data: item})}>
              <Image style={styles.img} source={{uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}}></Image>
              <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>Watched by {item.popularity}</Text>
              </View>
            </TouchableOpacity>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  base: {
    marginTop: 10
  },
  layout: {
    backgroundColor: colors.primary,
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // marginHorizontal: 6,
  },
  container: {
    width: '50%',
    padding: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center' 
  },
  img: {
    height: '90%',
    width: '50%',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    color: colors.text.primary
  },
  desc: {
    color: colors.text.primary
  }
})