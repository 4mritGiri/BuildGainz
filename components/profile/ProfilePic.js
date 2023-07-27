import { StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import { Text, View, ligntColors } from '../Themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfilePic = ({image, }) => {
  return (
    <View style={styles.container}>
        <Image 
            source={{uri: image}} 
            style={{
                width: hp('12%'),
                height: hp('12%'),
                borderRadius: 100,
            }}
        />
        <TouchableOpacity>
            <Text style={styles.text}>Change profile photo</Text>
        </TouchableOpacity>
        </View>
  )
}

export default ProfilePic

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('3%'),
        marginBottom: hp('2.5%'),
    },
    text: {
        color: ligntColors.sky,
        fontSize: hp('2'),
        fontWeight: 'bold',
    }
})