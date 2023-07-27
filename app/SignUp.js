import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, darkColor, ligntColors } from '../components/Themed';
import { StyleSheet, TouchableOpacity, useColorScheme, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../components/signup/Header';
import InputText from '../components/signup/InputText';
import Button from '../components/welcome/Button';
import { useNavigation } from 'expo-router';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Ionicons } from '@expo/vector-icons';


const SignUp = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const [isShow, setIsShow]= useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={[styles.safe, {
      backgroundColor: colorScheme === 'light' ? ligntColors.background : darkColor.blackground,
    }]} >
      <Header />
      <View darkColor={darkColor.blackground} style={styles.container}>
        <Text style={{
          fontSize: hp('3%'),
          fontWeight: '700',
        }}>Sign Up</Text>
        <InputText label={'Email or Phone'} placeholder={'ex: example@gmail.com'} />
        <InputText label={'Password'} placeholder={'At least 8 characters'} icon={isShow?'ios-eye-off' : "ios-eye"}  onPress={()=> setIsShow(!isShow)}/>
        <BouncyCheckbox 
          style={{
            marginTop: hp('1.7'),
            marginLeft: 10,
          }}
          textStyle={{
            color: darkColor.lightGray,
            textDecorationLine: "none",
          }}
          unfillColor='#fff'
          fillColor={ligntColors.sky}
          iconComponent={isChecked?<Ionicons name="ios-checkmark" size={24} color="#fff" /> : ""}
          text='I Agree on Terms & Polices.' 
          isChecked={isChecked}
          onPress={()=> setIsChecked(!isChecked)} />

        <View darkColor={darkColor.blackground} style={{
          marginTop: hp('5%'),
        }}>
        <Button color={darkColor.red} style={{ alignSelf: 'center', borderWidth: 0,}} width={wp('93%')} onPress={() => { }} name={"Sign Up"} />


        </View>
        <Text darkColor={darkColor.lightGray} lightColor={ligntColors.lightGray} style={{marginTop: hp('5%'), fontSize: hp('1.5'), alignSelf: 'center', fontWeight: 'bold',}}>Have an Account? 
        <TouchableOpacity 
          onPress={()=> navigation.navigate('Login', {name: 'amrit'})}
         >
        <Text style={{color: ligntColors.sky, fontSize: hp('1.5'), fontWeight: '700'}}> Login</Text>
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
export default SignUp;