import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary
        },
        tabBarStyle:{
          elevation: 0,
          borderBottomWidth: 0
        },
        tabBarIcon: ({color, focused}) => {
          let iconName:string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'Ch';
              break;
            case 'AlbumsScreen':
              iconName = 'Al';
              break;
            case 'ContactsScreen':
              iconName = 'Co';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>
        }
      })}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
    </Tab.Navigator>
  );
}