import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../../redux/actions/movies';
import { ListMovies } from '../../components/molecules';
import { colors } from '../../utils/colors';
import { Axios } from 'axios';

export default function List({navigation}) {

  const dispatch = useDispatch();
  const first = useSelector(state => state.moviesReducer.first)
  const second = useSelector(state => state.moviesReducer.second)

  useEffect(()=>{
    dispatch(listMovies(1))
    dispatch(listMovies(3))
  },[])

  return (
    <View style={styles.container}>
      <ListMovies navigation={navigation} data={first} antdata={second}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  }
})