import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Page1Screen = ({navigation}:Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1 Screen</Text>
      <Button 
        title='Page 2'
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text>Navegar con argumentos</Text>
      <View style={{
        flexDirection: 'row'
      }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon name="body-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Icon name="woman-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
