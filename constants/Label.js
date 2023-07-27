import { StyleSheet, } from 'react-native'
import React from 'react'
import {  Text, View, darkColor, ligntColors } from "../components/Themed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Label = ({label, style}) => {
  return (
    <Text darkColor={ligntColors.lightGray} lightColor={darkColor.lightGray} style={{
        marginBottom: -8,
        marginTop: 10,
        zIndex: 999,
        fontSize: hp('1.8'),
        fontWeight: '600',
        ...style,
        }}>{label}</Text>
  )
}

export default Label

const styles = StyleSheet.create({})