import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MoviesHorizontal, MoviesVertical } from '../../atoms'
import { background } from '../../../assets'

export default function ListMovies({navigation, data}) {
  return (
    <View>
      {/* <ImageBackground style={styles.img} source={require(background)}/> */}
      {/* <MoviesHorizontal navigation={navigation} data={data}/> */}
      <MoviesVertical navigation={navigation} data={data}/>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center'
  }
})