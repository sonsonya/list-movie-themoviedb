import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../../redux/actions/movies';

export default function List() {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieReducer.list)

  useEffect(()=>{
    dispatch(listMovies())
  },[])

  return (
    <View>
      <Text>List</Text>
    </View>
  )
}

const styles = StyleSheet.create({})