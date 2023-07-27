import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-document-text" color={color} />
        }}
      />
      <Tabs.Screen
        name="Workout"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="dumbbell" size={28} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <Tabs.Screen
        name="FeedingAndDite"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-restaurant" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-settings" color={color} />,
        }}
      />
    </Tabs>
  );
}
