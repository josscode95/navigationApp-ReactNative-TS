import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Page1Screen = ({navigation}:Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1 Screen</Text>
      <Button 
        title='Page 2'
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text>Navegar con argumentos</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('PersonaScreen', {
          id: 1,
          nombre: 'Pedro'
        })}
      >
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  )
}
