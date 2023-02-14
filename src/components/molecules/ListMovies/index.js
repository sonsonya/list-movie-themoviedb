import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MoviesHorizontal, MoviesVertical } from '../../atoms'
import { colors } from '../../../utils/colors'

export default function ListMovies({navigation, data, antdata}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <MoviesHorizontal navigation={navigation} data={data}/>
      <Text style={styles.title}>{antdata.name}</Text>
      <MoviesVertical navigation={navigation} data={antdata}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: '100%'
  },
  title: {
    color: colors.text.primary,
    fontSize: 22
  },
  img: {
    flex: 1,
    justifyContent: 'center'
  }
})