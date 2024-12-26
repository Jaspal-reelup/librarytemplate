import { View, Text } from 'react-native'
import React from 'react'

const CustomDiv = ({title}) => {
  return (
    <View style={{ backgroundColor: 'gray', height: 100, width: 100 }}>
      <Text>{title}</Text>
    </View>
  )
}

export default CustomDiv