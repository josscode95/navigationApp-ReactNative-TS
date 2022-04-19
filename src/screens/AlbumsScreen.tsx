import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {

  const { logOut, authState } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>
      {
        (authState.isLoggedIn)
          ? <Button title="LogOut" onPress={logOut} />
          : <Text>Debes loguearte</Text>
      }
      
    </View>
  )
}
