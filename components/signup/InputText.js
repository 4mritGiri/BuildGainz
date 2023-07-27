import React from 'react'
import { StyleSheet, TextInput, useColorScheme, TouchableOpacity, } from 'react-native'
import {  Text, View, darkColor, ligntColors } from "../Themed";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

const InputText = ({label, placeholder, icon, onPress}) => {
    const colorScheme = useColorScheme();
  return (
    <View darkColor={darkColor.blackground} style={styles.container}>
      <Text darkColor={ligntColors.lightGray} lightColor={darkColor.darkGray} style={{
        marginLeft: 15,
        fontSize: hp('1.5')
      }}>{label}</Text>
      <TextInput 
        placeholder={placeholder} 
        placeholderTextColor={darkColor.darkGray}
        secureTextEntry={icon==='ios-eye'? true : false}
        style={[styles.input, {backgroundColor: colorScheme==='light'? ligntColors.light : darkColor.lightGray , }]}
      />
      <TouchableOpacity
         onPress={onPress} 
        style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            bottom: hp('2%'),
            right: hp('2%'),
        }}>
      <Ionicons name={icon} size={24} color={'black'} />
      </TouchableOpacity>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: -5
    },
    input: {
        fontSize: hp('1.7%'),
        paddingLeft: hp('1.9'),
        borderRadius: 25,
        padding: hp('1.5%'),
        marginTop: 10,
        fontWeight: 'bold',
    }
})