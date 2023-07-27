import React from 'react'
import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, View, darkColor, ligntColors } from '../Themed';



const ColorBar = ({ BMI, result }) => {

    return (
        <>
            <View style={{
                width: wp('91%'),
                flexDirection: 'row',
                // flexWrap: 'wrap',
                backgroundColor: 'white',
                height: hp('4%'),
                marginVertical: 10,
                marginHorizontal: 0,
                // overflow: 'hidden',
            }}>
                {/* <Text style={{
            position: 'absolute',
            bottom: hp('4'),
            left: wp(`${BMI*1.48-2}`),
            fontSize: hp('2'),
            zIndex: 999,
        }}>{BMI}</Text> */}
                {/* <View style={{
                position: 'absolute',
                width: wp('1%'),
                backgroundColor: "#1A73E8",
                height:hp('4.5'),
                zIndex: 999,
                bottom: 0,
                left: wp(`${BMI*1.48}`),
            }} /> */}
                <View style={{
                    width: wp('7%'),
                    backgroundColor: "#BBD8FF",

                }} >
                    <Text style={{
                        position: 'absolute',
                        top: hp('4'),
                        zIndex: 999,
                    }}>15</Text>
                    {
                        BMI >= 15 && BMI <= 16 ? (
                            <>
                                <View style={{
                                    position: 'absolute',
                                    width: wp('1%'),
                                    backgroundColor: "#1A73E8",
                                    height: hp('4.5'),
                                    zIndex: 999,
                                    bottom: 0,
                                    left: wp(`${BMI / 6}`),
                                }} />
                                <Text style={{
                                    position: 'absolute',
                                    bottom: hp('4'),
                                    left: wp(`${BMI * (0.3) - 2}`),
                                    fontSize: hp('1.6'),
                                    zIndex: 999,
                                }}>{BMI}</Text>
                            </>
                        ) : ''
                    }
                </View>
                <View style={{
                    width: wp('12.1%'),
                    backgroundColor: "#85A4CE",

                }} >
                    <Text style={{
                        position: 'absolute',
                        top: hp('4'),
                        zIndex: 999,
                    }}>16</Text>
                    {
                        BMI >= 16 && BMI <= 18.4 ? (
                            <>
                                <View style={{
                                    position: 'absolute',
                                    width: wp('1%'),
                                    backgroundColor: "#1A73E8",
                                    height: hp('4.5'),
                                    zIndex: 999,
                                    bottom: 0,
                                    left: wp(`${BMI * 0.6}`),
                                }} />
                                <Text style={{
                                    position: 'relative',
                                    bottom: hp('4'),
                                    left: wp(`${BMI * 0.6 - 2}`),
                                    fontSize: hp('2'),
                                    zIndex: 999,
                                }}>{BMI}</Text>
                            </>
                        ) : ''
                    }
                </View>
                <View style={{
                    width: wp('18%'),
                    backgroundColor: "#60E4A6",

                }}  >
                    <Text style={{
                        position: 'absolute',
                        top: hp('4'),
                        zIndex: 999,
                    }}>18.5</Text>
                    {
                        BMI >= 18.5 && BMI <= 25 ? (
                            <>
                                <View style={{
                                    position: 'absolute',
                                    width: wp('1%'),
                                    backgroundColor: "#1A73E8",
                                    height: hp('4.5'),
                                    zIndex: 999,
                                    bottom: 0,
                                    left: wp(`${BMI * 0.5}`),
                                }} />
                                <Text style={{
                                    position: 'relative',
                                    bottom: hp('4'),
                                    left: wp(`${BMI * 0.5 - 2}`),
                                    fontSize: hp('2'),
                                    zIndex: 999,
                                }}>{BMI}</Text>
                            </>
                        ) : ''
                    }
                </View>
                <View style={{
                    width: wp('18%'),
                    backgroundColor: "#E8EE4E",

                }} >
                    <Text style={{
                        position: 'absolute',
                        top: hp('4'),
                        zIndex: 999,
                    }}>25</Text>
                    {
                        BMI >= 25 && BMI <= 29.9 ? (
                            <>
                                <View style={{
                                    position: 'absolute',
                                    width: wp('1%'),
                                    backgroundColor: "#1A73E8",
                                    height: hp('4.5'),
                                    zIndex: 999,
                                    bottom: 0,
                                    left: wp(`${BMI * 0.55}`),
                                }} />
                                <Text style={{
                                    position: 'relative',
                                    bottom: hp('4'),
                                    left: wp(`${BMI * 0.55 - 2}`),
                                    fontSize: hp('2'),
                                    zIndex: 999,
                                }}>{BMI}</Text>
                            </>
                        ) : ''
                    }
                </View>
                <View style={{
                    width: wp('18%'),
                    backgroundColor: "#FFAA00",

                }} >
                    <Text style={{
                        position: 'absolute',
                        top: hp('4'),
                        zIndex: 2,
                    }}>30</Text>
                    {
                        BMI >= 30 && BMI <= 34.9 ? (
                            <>
                                <View style={{
                                    position: 'absolute',
                                    width: wp('1%'),
                                    backgroundColor: "#1A73E8",
                                    height: hp('4.5'),
                                    zIndex: 999,
                                    bottom: 0,
                                    left: wp(`${BMI * 0.2}`),
                                }} />
                                <Text style={{
                                    position: 'absolute',
                                    bottom: hp('4'),
                                    left: wp(`${BMI * 0.2 - 2.5}`),
                                    fontSize: hp('2'),
                                    zIndex: 999,
                                }}>{BMI}</Text>
                            </>
                        ) : ''
                    }
                </View>
                <View style={{
                    width: wp('18%'),
                    backgroundColor: "#FF3400",

                }} >
                    <Text style={{
                        position: 'absolute',
                        top: hp('4'),
                        zIndex: 999,
                    }}>35</Text>
                    {
                        BMI >= 35 && BMI <= 39.9 ? (
                            <>
                                <View style={{
                                    position: 'absolute',
                                    width: wp('1%'),
                                    backgroundColor: "#1A73E8",
                                    height: hp('4.5'),
                                    zIndex: 999,
                                    bottom: 0,
                                    left: wp(`${BMI * 0.2}`),
                                }} />
                                <Text style={{
                                    position: 'relative',
                                    bottom: hp('4'),
                                    left: wp(`${BMI * 0.2 - 2}`),
                                    fontSize: hp('2'),
                                    zIndex: 999,
                                }}>{BMI}</Text>
                            </>
                        ) : ''
                    }
                    <Text style={{
                        position: 'absolute',
                        top: hp('4'),
                        right: 0,
                        zIndex: 999,
                    }}>40</Text>
                    {
                        BMI >= 40 ? (
                            <>
                                <View style={{
                                    position: 'absolute',
                                    width: wp('1%'),
                                    backgroundColor: "#1A73E8",
                                    height: hp('4.5'),
                                    zIndex: 999,
                                    bottom: 0,
                                    left: wp(`${BMI * 0.9}`),
                                }} />
                                <Text style={{
                                    position: 'relative',
                                    bottom: hp('4'),
                                    left: wp(`${BMI * 0.9 - 2}`),
                                    fontSize: hp('2'),
                                    zIndex: 999,
                                }}>{BMI}</Text>
                            </>
                        ) : ''
                    }
                </View>
            </View>
            <Text style={{
                textAlign: 'center',
                color: ligntColors.sky,
                fontSize: hp('2'),
                marginVertical: 20
            }}> {result} </Text>
        </>
    )
}

export default ColorBar

const styles = StyleSheet.create({})