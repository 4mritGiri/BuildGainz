import React from 'react';
import { StyleSheet, useColorScheme, TouchableOpacity, Alert, } from 'react-native';
import { Text, View, darkColor, ligntColors } from '../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/welcome/Button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from 'expo-router';

const Welcome = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colorScheme==='light'? ligntColors.background : darkColor.blackground,
    }}>
      <View darkColor={darkColor.blackground} style={styles.container}>
        <View darkColor={darkColor.blackground} style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
        }}>
        <Text lightColor={darkColor.red} darkColor={ligntColors.red} style={{
          fontSize: hp('8%'),
          fontStyle: 'italic',
          paddingTop: 50,
          padding: 15,
        }}>MyFitness</Text>
        <Text style={{
          fontSize: hp('4%'),
          fontStyle: 'italic',
          textAlign: 'center',
          alignItems: 'center',
        }}>
            <Text>The app that helps you</Text>
            <Text> to get a fit body.</Text>
          </Text>
        </View>
      <View darkColor={darkColor.blackground} style={styles.signUpContainer}>
        <Text>Sign Up by</Text>
        <Button 
          name="GOOGLE" 
          width={wp('90%')} 
          onPress={()=> console.log("Hello from Google")} 
          />
        <Button 
          name='FACEBOOK' 
          color={"#3B5999"} 
          width={wp('90%')} 
          />
        <Text style={{
          marginTop: 30,
        }}>Or Continue bu email</Text>
        <View darkColor={darkColor.blackground} style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
           <Button 
              onPress={()=>navigation.navigate('SignUp')}
              style={{
                  borderColor: darkColor.red,
              }} 
              BtnStyle={{
                  color: darkColor.red, 
              }} 

              width={wp('40%')} 
              name={"Sign Up"}
            />
           <Button
              onPress={()=> navigation.navigate('Login')}
              style={{
                borderColor: darkColor.red,
            }} 
            BtnStyle={{
                color: darkColor.red, 
            }} 
              name={"Login"} 
              width={wp('40%')} 
            />
        </View>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    paddingTop: wp('15%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  signUpContainer: {
    paddingTop: 250,
    alignItems: 'center',
  }
})