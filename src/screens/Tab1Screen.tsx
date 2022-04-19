import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, [])
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text> 
        <TouchableIcon name="airplane-outline" />
        <TouchableIcon name="attach-outline" />
        <TouchableIcon name="bonfire-outline" />
        <TouchableIcon name="calculator-outline" />
        <TouchableIcon name="chatbubble-ellipses-outline" />
        <TouchableIcon name="images-outline" />
        <TouchableIcon name="leaf-outline" />
      </Text>
    </View>
  )
  
}
