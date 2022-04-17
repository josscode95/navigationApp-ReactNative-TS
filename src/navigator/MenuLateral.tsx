import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front'
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}:DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Imagen del avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri:'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones del Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text style={styles.menuText}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
      
    </DrawerContentScrollView>
  );
}