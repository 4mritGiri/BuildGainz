import React from 'react'
import { StyleSheet,  Image, ImageBackground } from 'react-native'
import {Text, View, } from '../Themed'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const MyProgram = ({data}) => {
    // console.log(data);
  return (
  <>
    <View style={[styles.container,]}>
        <ImageBackground 
            style={styles.image}
            source={{uri: data.image}}
        >
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: null}}>
                <Text style={styles.details}>Next workout</Text>
                <View style={styles.circle} >
                    <View style={[styles.circle, {position: 'absolute', bottom: -3, left: -3}]} />
                </View>
            </View>
            <Text style={styles.workoutName}>{data.workoutName} </Text>
            <Text style={styles.details}>{data.details} </Text>

        </ImageBackground>
        <Image source={{uri: data.image}} style={styles.image} />
    </View>
  </>
  )
}

export default MyProgram

const styles = StyleSheet.create({
    container: {
        height: hp('20'),
        backgroundColor: 'lightgray',
        borderRadius: 15,
        width: wp('75'),
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    image: {
        height: hp('20'),
        width: wp('75'),
    }, 
    workoutName: {
        fontSize: wp('6'),
        fontWeight: '500',
    },
    details: {
        fontSize: wp('4')
    },
    circle: {
        padding: 8,
        borderRadius: 50,
        borderColor: 'red',
        borderWidth: 4,
        backgroundColor: null,
        marginRight: 18,
    }
})