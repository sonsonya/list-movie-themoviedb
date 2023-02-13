import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailMovies } from '../../redux/actions/movies';

export default function Detail({ route, navigation}) {

  const { data } = route.params;
  // const dispatch = useDispatch();
  // const movies = useSelector(state => state.movieReducer.detail)

  // useEffect(()=>{
  //   dispatch(detailMovies(497698))
  // },[])

  return (
    <View>
      <View style={styles.img}></View>
      <View style={styles.box}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>Date Release: {data.release_date}</Text>
        <Text style={styles.desc}>Original Language: {data.original_language === 'en' ? 'English' : 'Indonesia'}</Text>
        <Text style={styles.desc}>{data.overview}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    backgroundColor: 'black'
  },
  box: {
    padding: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20
  },
  desc: {
    fontSize: 16,
    marginBottom: 5
  },
})