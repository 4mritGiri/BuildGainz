import React from 'react'
import { StyleSheet, TouchableOpacity, useColorScheme, } from 'react-native'
import { View, Text, darkColor,ligntColors} from '../Themed'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';

const Button = ({name, color, width, style, onPress, txtStyle}) => {
  const colorScheme = useColorScheme();
  return (
 <TouchableOpacity 
   onPress={onPress}
    style={[
        styles.container,{
        borderColor: colorScheme==='light'? darkColor.blackground: ligntColors.background,
        backgroundColor: color,
        width: width,...style,
 }]}>
    <Text darkColor={darkColor.lightGray} lightColor={ligntColors.lightGray} style={[styles.text,{...txtStyle,}]}>{name}</Text>
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderWidth: 2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 30,
        marginHorizontal: wp('4%'),
    },
    text: {
        fontSize: 23,
        fontWeight: '900',
        alignSelf: 'center',
    }
})