import { StyleSheet, } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, View, darkColor, ligntColors } from '../../components/Themed';
// import PieChart from 'react-native-pie-chart'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { SafeAreaView } from 'react-native-safe-area-context';

const FeedingReport = () => {
  // const widthAndHeight = 250
  //   const series = [123, 321, 123, 789, 537]
  //   const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["Swim", "Bike", "Run"],
    data: [0.44, 0.65, 0.88]
  };

  // darkColor={darkColor.darkGray} lightColor={ligntColors.lightGray} 

  return (
    <SafeAreaView style={[styles.container]}>
      <Text>FeedingReport</Text>
      <ProgressChart
        data={data}
        width={wp('90')}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </SafeAreaView>
  )
}

export default FeedingReport;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    height: hp('18'),
    // width: wp('92')
    // flexDirection: 'row',
    alignItems: 'center',
  }
})