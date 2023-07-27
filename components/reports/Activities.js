import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, View, darkColor, ligntColors } from '../../components/Themed';


import {
  initialize,
  requestPermission,
  readRecords,
} from 'react-native-health-connect';

const readSampleData = async () => {
  // initialize the client
  const isInitialized = await initialize();

  // request permissions
  const grantedPermissions = await requestPermission([
    { accessType: 'read', recordType: 'Steps' },
  ]);

  // check if granted

  const result = await readRecords('Steps', {
    timeRangeFilter: {
      operator: 'between',
      startTime: '2023-07-26T12:00:00.405Z',
      endTime: '2023-07-27T23:53:15.405Z',
    },
  });
  console.log("Result: ", result);
}


const image = "../../assets/constant/runner.png";
const Activities = () => {

  return (
    <View darkColor={darkColor.darkGray} lightColor={ligntColors.lightGray} style={[styles.container]}>
      <Text style={styles.h3}>Activities</Text>
      <View darkColor={darkColor.darkGray} lightColor={ligntColors.lightGray} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Component label={"Steps"} currnetNumber={1025} goalNumber={2000} />
        <Component label={"Calories"} currnetNumber={200}/> 
        <Image source={require(image)} style={{height: hp('12'), width: wp('22'), marginTop: -wp('5')}} />
        
      </View>
    </View>
  )
}

const Component = ({label, goalNumber, currnetNumber, }) => {

  return (
    <View  darkColor={darkColor.darkGray} lightColor={ligntColors.lightGray}>
      <Text style={styles.h4}>{label}</Text>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}} darkColor={darkColor.darkGray} lightColor={ligntColors.lightGray}>
        <Text style={styles.h2}>{currnetNumber}</Text>
        {
          goalNumber?
            <Text style={styles.h4}> / {goalNumber}</Text>
          :
            <Text style={styles.h4}> Kcl</Text>
        }
      </View>
    </View>
  );
}

export default Activities

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    height: hp('13'),
    overflow: 'hidden',
    // width: wp('92')
  },
  h3: {
    fontSize: wp('4.5'),
    fontWeight: '500',
    marginBottom: 10,
  },
  h4: {
    fontSize: wp('3.5'),
    fontWeight: '600'
  },
  h2: {
    fontSize: wp('7'),
    fontWeight: '500',
  }
})