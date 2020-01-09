import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>
        Crypto App
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    paddingTop: 35,
    paddingBottom: 15,
    alignItems: 'center',
    backgroundColor: '#175676'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
})

const { headerContainer, header } = styles

export default Header