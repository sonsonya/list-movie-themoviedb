import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../../redux/actions/movies';
import { ListMovies } from '../../components/molecules';

export default function List({navigation}) {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.moviesReducer.list)

  useEffect(()=>{
    dispatch(listMovies(1))
  },[])

  return (
    <View style={styles.container}>
      <ListMovies navigation={navigation} data={movies}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
})