import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, darkColor, ligntColors } from '../components/Themed';
import { StyleSheet, TouchableOpacity, useColorScheme, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../components/signup/Header';
import InputText from '../components/signup/InputText';
import Button from '../components/welcome/Button';
import { useNavigation } from 'expo-router';


const Login = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const [isShow, setIsShow] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Profile');
  }

  return (
    <SafeAreaView style={[styles.safe, {
      backgroundColor: colorScheme === 'light' ? ligntColors.background : darkColor.blackground,
    }]} >
      <Header />
      <View darkColor={darkColor.blackground} style={styles.container}>
        <Text style={{
          fontSize: hp('3%'),
          fontWeight: '700',
        }}>Login </Text>
        <InputText label={'Email or Phone'} placeholder={'ex: example@gmail.com'} />
        <InputText label={'Password'} placeholder={'At least 8 characters'} icon={isShow ? 'ios-eye-off' : "ios-eye"} onPress={() => setIsShow(!isShow)} />
        <TouchableOpacity
          onPress={() => alert('Forget Password clicked.')}
          style={{
            padding: 15,
          }}>
          <Text darkColor={ligntColors.lightGray} lightColor={darkColor.darkGray}>Forget Password?</Text>
        </TouchableOpacity>

        <View darkColor={darkColor.blackground} style={{
          marginTop: hp('3.8%'),
        }}>
          <Button color={darkColor.red} style={{ alignSelf: 'center', borderWidth: 0, }} width={wp('93%')} onPress={handleLogin} name={"Login"} />


        </View>
        <Text darkColor={darkColor.lightGray} lightColor={ligntColors.lightGray} style={{ marginTop: hp('5%'), fontSize: hp('1.5'), alignSelf: 'center', fontWeight: 'bold', }}>Don't have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp', { name: 'amrit' })}
          >
            <Text style={{ color: ligntColors.sky, fontSize: hp('1.5'), fontWeight: '700' }}> Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    marginTop: hp('8%'),
    marginHorizontal: 15,
  }
})
export default Login;