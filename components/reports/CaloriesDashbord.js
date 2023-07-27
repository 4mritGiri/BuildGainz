import { StyleSheet, } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text, View, darkColor, ligntColors } from '../../components/Themed';
import { ProgressChart } from 'react-native-chart-kit';
import { useColorScheme } from 'react-native';

// import {
//   initialize,
//   requestPermission,
//   readRecords,
// } from 'react-native-health-connect';

// const readSampleData = async () => {
//   // initialize the client
//   const isInitialized = await initialize();

//   // request permissions
//   const grantedPermissions = await requestPermission([
//     { accessType: 'read', recordType: 'ActiveCaloriesBurned' },
//   ]);

//   // check if granted

//   const result = await readRecords('ActiveCaloriesBurned', {
//     timeRangeFilter: {
//       operator: 'between',
//       startTime: '2023-01-09T12:00:00.405Z',
//       endTime: '2023-01-09T23:53:15.405Z',
//     },
//   });
//   console.log(result);
// }

const CaloriesDashbord = ({earnedCalori, burnedCalori}) => {
  const colorScheme = useColorScheme()==='light' ;

  const leftCalori  = earnedCalori - burnedCalori;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(49,49,204, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.6,
    useShadowColorFromDataset: false
  };

  const leftCaloriPresent = burnedCalori / earnedCalori ;
  const data = {
    labels: [ "Run"],
    data: [leftCaloriPresent]
  };
  // console.log(leftCaloriPresent*100);

  return (
    <View darkColor={darkColor.darkGray} lightColor={ligntColors.lightGray} style={[styles.container]}>
      <ProgressChart
        data={data}
        width={wp('60')}
        height={wp(46)}
        strokeWidth={15}
        radius={wp(16)}
        chartConfig={chartConfig}
        hideLegend={true}
      />
      <View darkColor={"rgba(0,0,0,0)"} lightColor={"rgba(255,255,255,0)"} style={[styles.innerContainer, {left: wp('3')}]}>
        <Text style={{fontSize: wp('5'), fontWeight: '600',textAlign: 'center'}}>{earnedCalori}</Text>
        <Text style={{fontSize: wp('4'), textAlign: 'center'}}>Earned Calories</Text>
      </View>
      <View darkColor={"rgba(0,0,0,0)"} lightColor={"rgba(255,255,255,0)"} style={styles.innerContainer}>
        <Text style={{fontSize: wp('5'), fontWeight: '600',textAlign: 'center'}}>{leftCalori}</Text>
        <Text style={{fontSize: wp('4'), textAlign: 'center'}}>Calories left</Text>
      </View>
      <View darkColor={"rgba(0,0,0,0)"} lightColor={"rgba(255,255,255,0)"} style={[styles.innerContainer, {right: wp('2.4')}]}>
        <Text style={{fontSize: wp('5'), fontWeight: '600',textAlign: 'center'}}>{burnedCalori}</Text>
        <Text style={{fontSize: wp('4'), textAlign: 'center'}}>Burned Calories</Text>
      </View>
    </View>
  )
}

export default CaloriesDashbord

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
        height: hp('22'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
      position: 'absolute',
      top: hp("9")
    }
})