import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailMovies } from '../../redux/actions/movies';

export default function Detail() {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieReducer.detail)

  useEffect(()=>{
    dispatch(detailMovies())
  },[])

  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({})