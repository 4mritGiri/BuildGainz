import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, useColorScheme, ScrollView,} from 'react-native'
import { Text, View, darkColor, ligntColors } from '../components/Themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Header from '../components/profile/Header'
import ProfilePic from '../components/profile/ProfilePic';
import TextInputField from '../constants/TextInputField';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/welcome/Button';
import Label from '../constants/Label';
import ColorBar from '../components/profile/ColorBar';

const image = "data:image/jpeg;base64,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";

const Profile = () => {
    const [isShow, setIsShow]= useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const [cuWeight, setCuWeight] = useState('');
    const [height, setHeight] = useState(0.01);
    const [goalWeight, setGoalWeight] = useState(null);
    const [BMI, setBMI] = useState('');
    const [result, setResult] = useState('');
    const colorScheme = useColorScheme();

    const selectData =()=>{
        setIsSelected(!isSelected);
        console.log(isSelected)
    }

    const border = isSelected? `borderColor: ${darkColor.red}` : "red";
    



            
    const calculateBmi = () => {
        const bmi = (cuWeight / ((height/100) * (height/100))).toFixed(1);
        setBMI(bmi);

        if (bmi < 18.5) {
            setResult("UnderWeight, eat more...");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setResult("Normal, Keep it up...");
        } else if(bmi >=25 && bmi <=29.9) {
            setResult("OverWeight, start working out ...");
        }else if(bmi >=30){
            setResult("Obese, Hit the gym.")
        }
    }
    useEffect(() => {
       setTimeout(()=> {
         calculateBmi()
        },1000);
    }, [cuWeight,height]);
    
 
  return (
    <SafeAreaView style={[styles.safe, {backgroundColor: colorScheme==='light'? ligntColors.background : darkColor.blackground}]}>
        <Header />
      <ScrollView >
        <ProfilePic image={image} />
        <Text lightColor={ligntColors.lightGray} style={[styles.infoText,]}>Profile Information</Text>
        <TextInputField label={"Name"} value={"Amrit Giri"} placeholder={'eg: Amrit Giri'} />
        <TextInputField label={"Email Address"} value={"amritgiri@gmail.com"} placeholder={'eg: example@gmail.com'} />


        
        <TextInputField label={"Password"} value={'@Mritgin'} placeholder={'eg: your password here'} icon={isShow?'ios-eye' : "ios-eye-off"} onPress={()=> setIsShow(!isShow)}/>
        <View style={styles.separator} lightColor={ligntColors.lightGray} darkColor={darkColor.lightGray} />

        <Text lightColor={ligntColors.lightGray} style={[styles.infoText,]}>Personal Data</Text>
        <View>
            <Label label={'Gender'} />
            <View style={{flexDirection: 'row',}}>
                <Button name={"Male"} 
                    width={wp('25%')} 
                    style={{
                        borderRadius: 10, 
                        marginLeft: 5, 
                        borderWidth: 3}} 
                    txtStyle={{color: darkColor.red}} 
                    onPress={()=>{}}/>
                <Button name={"Female"} width={wp('25%')} style={{borderRadius: 10}} onPress={selectData} />
                {/* <Button name={"Others"} width={wp('25%')} style={{borderRadius: 10,}} onPress={()=> {}} /> */}
            </View>
        </View>
        <View>
            <Label label={'Lavel'} />
            <View style={{flexDirection: 'row',}}>
                <Button name={"Beginner"} width={wp('25%')} style={{borderRadius: 10, marginLeft: 5,}} onPress={()=>{}} />
                <Button name={"Medium"} width={wp('25%')} style={{borderRadius: 10, marginLeft: 5,}} onPress={()=>{}} />
                <Button name={"Expert"} width={wp('25%')} style={{borderRadius: 10,}} onPress={()=> {}} />
            </View>
        </View>
        <View>
            <View style={{flexDirection: 'row',}}>
                 <TextInputField 
                    value={cuWeight}
                    onChangeText={(text)=>setCuWeight(text)}
                    keyboardType={'number-pad'}
                    label={"Current Weight(kg)"} 
                    placeholder={'Current Weight'} 
                    style={{width: wp('45%'), borderRadius: 10, textAlign: 'center'}}/>
               
                 <TextInputField label={'Goal Weight(kg)'} onChangeText={(text)=>setGoalWeight(text)} keyboardType={'number-pad'} value={goalWeight} placeholder={'Goal Weight(kg)'} style={{width: wp('45%'), borderRadius: 10, textAlign: 'center'}}/>
            </View>
        </View>
        <View>
         <TextInputField onKeyPress={(e)=>{
            if(e.key==="enter"){
                calculateBmi();
            }
         }} onChangeText={(text)=> setHeight(text)} keyboardType={'number-pad'} value={height} label={"height(cm)"} placeholder={'Height(cm)'} style={{width: wp('46%'), borderRadius: 10, textAlign: 'center'}}/>
        </View>

        <View style={{marginLeft: 10,}}>
            <Label style={{marginBottom: 0, marginBottom: 20}} label={"BMI(kg/m)"}/>
            <ColorBar BMI={BMI} result={result}/>

        </View>

        <Label style={{marginLeft: 15}} label={"Goal"}/>
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
        }}>
            <Button 
                
                name={"Losing weight"} 
                width={wp('40')} 
                txtStyle={{fontWeight: "500"}}
                style={{borderRadius: 10, 
                        marginLeft: 10,
                }}/>
            <Button 
                name={"Keeping fit"} 
                width={wp('40')} 
                txtStyle={{fontWeight: "500"}}
                style={{borderRadius: 10}}/>
            <Button 
                name={"Build muscles"}
                width={wp('40')}
                txtStyle={{fontWeight: "500"}}
                style={{borderRadius: 10,
                    marginLeft: 10}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        padding: 15,
    },
    infoText: {
        fontSize: hp('2'),
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 2,
        width: wp('94%'),
    },
})