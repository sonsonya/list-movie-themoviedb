import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function MoviesHorizontal({navigation, data}) {
  return (
    <ScrollView horizontal>
      {data.items.map((item)=>{
        return <TouchableOpacity style={styles.layout} onPress={()=>navigation.navigate('Detail', { data: item})}>
                  <Image style={styles.img}></Image>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.overview.slice(0,60)}....</Text>
                </TouchableOpacity>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'black',
    height: 300,
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 6,
    marginVertical: 10,
    padding: 8
  },
  img: {
    height: 200
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    height: 30,
  },
  desc: {
    fontSize: 12,
    textAlign: 'center',
    height: 30,
  }
})