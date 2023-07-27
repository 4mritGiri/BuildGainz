import { StyleSheet, TouchableOpacity, useColorScheme, } from 'react-native'
import React from 'react'
import { Text, View, darkColor, ligntColors } from '../../components/Themed';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


import { useNavigation, useRouter } from 'expo-router';

const transprant = 'rgba(220,220,220,0.5)';
const Header = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: hp('3'),
        fontWeight: '600',
        top: hp("4"),
        left: 15,
      }}>Profile</Text>
      <TouchableOpacity onPress={() => router.push('/(tabs)')}>
        <Text style={{
          color: ligntColors.red,
          fontSize: hp('2.2'),
          fontWeight: '600',
          top: hp('4'),
          left: wp('70'),
        }} >Skip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(220,220,220,0.0)',
  }
})