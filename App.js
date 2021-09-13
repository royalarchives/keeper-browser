import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Header } from './src/components/Header.js'

export default function App () {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Open up App.js to start working on your appooooo!</Text>
      <StatusBar style='auto' />
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' }
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
