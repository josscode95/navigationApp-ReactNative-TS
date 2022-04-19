import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TopTabNavigator } from './TopTab';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
} 

const ButtonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <ButtonTabAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName:string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;
            case 'Tab3Screen':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      <ButtonTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <ButtonTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <ButtonTabAndroid.Screen name="Tab3Screen" options={{title: 'Stack'}} component={StackNavigator} />
    </ButtonTabAndroid.Navigator>
  );
}

const ButtonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <ButtonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({color}) => {
          let iconName:string = '';
          const route = useRoute();
          switch(route.name){
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;
            case 'Tab3Screen':
              iconName = 'bookmarks-outline';
              break; 
          }
          return <Icon name={iconName} size={20} color={color} />
        }
      }}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text> }} component={Tab1Screen} /> */}
      <ButtonTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <ButtonTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <ButtonTabIOS.Screen name="Tab3Screen" options={{title: 'Stack'}} component={StackNavigator} />
    </ButtonTabIOS.Navigator>
  );
}