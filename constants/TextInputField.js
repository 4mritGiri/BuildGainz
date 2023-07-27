import React from 'react'
import { StyleSheet, TextInput, useColorScheme, TouchableOpacity, } from 'react-native'
import { Text, View, darkColor, ligntColors } from "../components/Themed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';


const TextInputField = ({ label, placeholder, icon, onPress, value, style, onChangeText, keyboardType, onKeyPress }) => {
    const colorScheme = useColorScheme();

    return (
        <View darkColor={darkColor.blackground} style={styles.container}>
            <Text darkColor={ligntColors.lightGray} lightColor={darkColor.lightGray} style={{
                marginLeft: 15,
                fontSize: hp('1.8'),
                fontWeight: '600',
            }}>{label}</Text>
            <TextInput
                onChangeText={onChangeText}
                onKeyPress={onKeyPress}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                placeholderTextColor={darkColor.darkGray}
                secureTextEntry={icon === 'ios-eye-off' ? true : false}
                style={[styles.input, { backgroundColor: colorScheme === 'light' ? ligntColors.light : darkColor.lightGray, ...style }]}
            />
            <TouchableOpacity
                onPress={onPress}
                style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    bottom: hp('1.5%'),
                    right: hp('2%'),
                }}>
                <Ionicons name={icon} size={24} color={'black'} />
            </TouchableOpacity>
        </View>
    )
}

export default TextInputField

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 5,
    },
    input: {
        fontSize: hp('2%'),
        paddingLeft: hp('1.9'),
        borderRadius: 25,
        padding: hp('1.5%'),
        marginTop: 8,
        fontWeight: 'bold',
    }
})