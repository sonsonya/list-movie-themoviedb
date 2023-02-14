import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailMovies } from '../../redux/actions/movies';
import { colors } from '../../utils/colors';

export default function Detail({ route, navigation}) {

  const { data } = route.params;
  const dispatch = useDispatch();
  const movies = useSelector(state => state.moviesReducer.detail)

  useEffect(()=>{
    dispatch(detailMovies(data.id))
  },[])

  return (
    <View>
      <Image source={{uri: `https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}} style={styles.img}></Image>
      <View style={styles.box}>
        <Text style={styles.title}>{movies.title}</Text>
        <View style={styles.row}>
        {movies.genres.map((result, idx) => {
          return <Text style={styles.desc}>{result.name}, </Text>
        })}
        </View>
        {/* <Text style={styles.desc}>Date Release: {movies.release_date}</Text>
        <Text style={styles.desc}>Original Language: {movies.original_language === 'en' ? 'English' : 'Indonesia'}</Text> */}
        <Text style={styles.subtitle}>Storyboard</Text>
        <Text style={styles.desc}>{movies.overview}</Text>
        <Text style={styles.subtitle}>Production Countries</Text>
        <View style={styles.row}>
        {movies.production_countries.map((result, idx) => {
          return <Text style={styles.desc}>{result.name} </Text>
        })}
        </View>
        <Text style={styles.subtitle}>Production Companies</Text>
        <View style={styles.row}>
        {movies.production_countries.map((result, idx) => {
          return <Text style={styles.desc}>{result.name} </Text>
        })}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 400,
    backgroundColor: 'black'
  },
  box: {
    padding: 10,
    backgroundColor: colors.primary,
    height: '100%'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 26,
    marginBottom: 5,
    color: colors.text.primary
  },
  desc: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.text.primary
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
    color: colors.text.primary
  },
})