import './Header.css'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Header extends Component {
  render () {
    return (
      <View className='server-header'>
        <Text className='title'>
          <FontAwesomeIcon icon={['fas', 'archive']} />
          Keeper Browser
        </Text>
      </View>
    )
  }
}

export default Header