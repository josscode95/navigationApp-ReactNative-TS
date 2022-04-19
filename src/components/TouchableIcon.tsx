import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'
import { colors } from '../theme/appTheme'

interface IconProps{
  name:string
}

export const TouchableIcon = ({name}:IconProps) => {

  const { changeFavoriteIcon } = useContext(AuthContext)

  return (
    <TouchableOpacity
      onPress={() => changeFavoriteIcon(name)}
    >
      <Icon 
        name={name} 
        size={80} 
        color={colors.primary} 
      />
    </TouchableOpacity>
  )
}
