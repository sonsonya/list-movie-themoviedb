import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors'

export default function MoviesHorizontal({navigation, data}) {
  return (
    <ScrollView style={styles.page} horizontal>
      {data.items.map((item)=>{
        return <TouchableOpacity id={item.id} style={styles.layout} onPress={()=>navigation.navigate('Detail', { data: item})}>
                  <Image style={styles.img} source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}></Image>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>Watched by {item.popularity}</Text>
                </TouchableOpacity>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    height: 900,
    marginBottom: 10
  },
  layout: {
    height: 300,
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 6,
    marginVertical: 45,
  },
  img: {
    height: 300,
    width: 200,
    borderRadius: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    height: 30,
    color: colors.text.primary
  },
  desc: {
    fontSize: 12,
    textAlign: 'center',
    height: 30,
    color: colors.text.primary
  }
})