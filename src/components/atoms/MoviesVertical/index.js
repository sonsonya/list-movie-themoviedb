import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function MoviesVertical({navigation, data}) {
  return (
    <ScrollView>
      {data.items.map((item)=>{
      return <TouchableOpacity style={styles.layout} onPress={()=>navigation.navigate('Detail', { data: item})}>
              <Image style={styles.img}></Image>
              <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.overview.slice(0,210)}....</Text>
              </View>
            </TouchableOpacity>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'white',
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 6,
    marginVertical: 5,
    padding: 15
  },
  container: {
    width: '60%',
    padding: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center' 
  },
  img: {
    height: '100%',
    width: '50%'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
  },
})