import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Page2Screen = () => {

  const navigator = useNavigation();
  
  //ios
  // useEffect(() => {
  //   navigator.setOptions({
  //     title: 'Hola Mundo',
  //     headerBackTitle: 'Atras'
  //   })
  // }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2 Screen</Text>
      <Button 
        title='Page 3'
        onPress={() => navigator.navigate(('Page3Screen' as any))}
      />
    </View>
  )
}
