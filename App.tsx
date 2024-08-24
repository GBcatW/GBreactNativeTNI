import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileSrceen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample'
import FlastlistExample from './components/FlastListExample'
import FlastListcallBackend from './components/FlastListcallBackend'
import NewsApp from './components/NewsApp'
import AxiosgetData from './components/AxiosgetData'
import AxiosPostData from './components/AxiosPostData'
import WeatherLondon from './components/WeatherLondon'

const App = () => {
  return (
    <View>
      <WeatherLondon/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})