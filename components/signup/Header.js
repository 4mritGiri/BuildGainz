import { StyleSheet, TouchableOpacity, useColorScheme,} from 'react-native'
import React from 'react'
import { Text, View, darkColor,ligntColors } from '../../components/Themed';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const Header = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
  return (
    <TouchableOpacity onPress={()=> navigation.goBack()} >
      <Ionicons name="chevron-back" size={40} color={colorScheme==='light'? darkColor.grayDark: ligntColors.background} />
    </TouchableOpacity>
  )
}

export default Header

const styles = StyleSheet.create({})