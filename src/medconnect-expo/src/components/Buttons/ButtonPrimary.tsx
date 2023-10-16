import React from 'react'
import {Text, View, TouchableOpacity} from "react-native"

interface Props{
    textButton: string,
    onPress: any
}

import { styles } from './Styles'
export const ButtonPrimary = ({textButton, onPress}: Props) => {
  return (
    <TouchableOpacity
        style={[styles.button, styles.buttonLogin]}
        onPress={() => {
        // Adicione ação de login aqui
        }}
        activeOpacity={0.7}
    >
        <Text style={styles.buttonTextLogin } onPress={ () => onPress()}>{textButton}</Text>
  </TouchableOpacity>
  )
}
