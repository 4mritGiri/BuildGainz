import { StyleSheet, } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text, View, darkColor, ligntColors } from '../Themed';


const WaterDrank = () => {
    
  return (
    <View darkColor={darkColor.darkGray} lightColor={ligntColors.lightGray} style={[styles.container]}>
      <Text>WaterDrank</Text>
    </View>
  )
}

export default WaterDrank

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
        height: hp('18'),
        // width: wp('92')
        flexDirection: 'row',
        alignItems: 'center',
    }
})