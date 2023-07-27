import { StyleSheet, TouchableOpacity, useColorScheme, Image, } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { Text, View, darkColor, ligntColors, } from '../Themed'


const Header = () => {
    const colorScheme = useColorScheme()==='light';
    const [darkMode, setDarkMode] = useState(colorScheme);
    // const img = darkMode? require("@/assets/icons/sunny.png") : require("../../assets/icons/moon.png");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Report</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity
            onPress={()=>setDarkMode(!darkMode)} 
            style={[styles.icons, {backgroundColor: colorScheme? ligntColors.lightGray : darkColor.darkGray}]}>
              <Ionicons name={darkMode? "ios-sunny" : "moon"} size={28} color={ligntColors.red} />
            {/* <Image style={{width: wp('6'), height: wp('6'), tintColor: ligntColors.red,}} source={img} /> */}
        </TouchableOpacity>
        <TouchableOpacity
             style={[styles.icons, {backgroundColor: colorScheme? ligntColors.lightGray : darkColor.darkGray}]} >
            <Ionicons name="notifications" size={28} color={ligntColors.red} />
            <View style={styles.dot}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icons: {
        padding: 8,
        borderRadius: 50,
        marginHorizontal: 5,
    },
    dot: {
        position: 'absolute',
        top: 9,
        right: 8,
        padding: 5,
        backgroundColor: ligntColors.sky,
        borderRadius: 50,
    },
    text: {
        fontSize: wp('6'),
        fontWeight: 'bold',
    }
})