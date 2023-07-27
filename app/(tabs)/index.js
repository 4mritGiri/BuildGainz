import {
  StyleSheet,
  useColorScheme,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";

import { Text, View, darkColor, ligntColors } from "../../components/Themed";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/reports/Header";
import Calendar from "../../components/reports/Calendar";
import MyProgram from "../../components/reports/MyProgram";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CaloriesDashbord from "../../components/reports/CaloriesDashbord";
import Activities from "../../components/reports/Activities";
import Workouts from "../../components/reports/Workouts";
import WaterDrank from "../../components/reports/WaterDrank";
import Feeding from "../../components/reports/Feeding";
import { Link, useNavigation, useRouter } from "expo-router";
import FeedingReport from "../(report)/FeedingReport";
import color from "color";
import { useNavigationState } from "@react-navigation/native";

const My_Program = [
  {
    id: "12",
    image:
      "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    workoutName: "Workout Name",
    details: "14 Workouts-12 Mins-Beginner ",
  },
  {
    id: "13",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98WWJE6HX2CQocYx26D-iDAA10c43vBoAfA&usqp=CAU",
    workoutName: "Workout Name",
    details: "14 Workouts-12 Mins-Beginner ",
  },
  {
    id: "14",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98WWJE6HX2CQocYx26D-iDAA10c43vBoAfA&usqp=CAU",
    workoutName: "Workout Name",
    details: "14 Workouts-12 Mins-Beginner ",
  },
];

const RADIUS = 10;
const BACKGROUND = "#211221";

export default function ReportsScreen() {
  const colorScheme = useColorScheme() === "light";
  const [selectedDate, setSelectedDate] = useState(null);

  const navigation = useNavigation();
  const router = useRouter();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colorScheme
            ? ligntColors.background
            : darkColor.blackground,
        },
      ]}
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
        <Text style={styles.h2}>My Program</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={My_Program}
          renderItem={({ item }) => <MyProgram data={item} />}
          // ListHeaderComponent={}
        />
        <CaloriesDashbord earnedCalori={1555} burnedCalori={777.5} />
        <Activities />
        <Pressable onPress={() => router.push("/(report)/WorkoutReport")}>
          <Workouts />
        </Pressable>
        <WaterDrank />
        <Pressable onPress={() => router.push("/(report)/FeedingReport")}>
          <Feeding />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

// export  const Morph = ({ radius=10, style, revert, borderless, children }) => {
//   const topStyles = StyleSheet.flatten([
//     styles.morphTop,
//     revert && {
//       shadowColor: BACKGROUND
//         .darken(0.3)
//         .alpha(0.5),
//     },
//     { borderRadius: radius },
//     style,
//   ]);

//   const bottomStyles = StyleSheet.flatten([
//     styles.morphBottom,
//     revert && {
//       shadowColor: color(BACKGROUND)
//       .lighten(0.5)
//       .alpha(0.5),
//     },
//     { borderRadius: radius || RADIUS },
//   ]);

//   const morphStyles = StyleSheet.flatten([
//     styles.morph,
//     borderless && { borderWidth: 0 },
//     { borderRadius: radius || RADIUS },
//   ]);

//   return (
//     <View style={topStyles}>
//       <View style={bottomStyles}>
//         <View style={morphStyles}>{children}</View>
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  h2: {
    fontSize: wp("5"),
    fontWeight: "bold",
    marginVertical: 10,
  },

  // morph: {
  //   borderRadius: RADIUS,
  //   borderWidth: 1,
  //   backgroundColor: BACKGROUND,
  //   borderColor: color(BACKGROUND)
  //     .lighten(0.5)
  //     .alpha(0.2),
  // },
  // morphTop: {
  //   borderRadius: RADIUS,
  //   // box-shadow is equivalent to shadow style in React Native
  //   shadowOffset: {
  //     width: -6,
  //     height: -6,
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 6,
  //   shadowColor: color(BACKGROUND)
  //     .lighten(0.5)
  //     .alpha(0.5), // this should be lighter shadow
  // },
  // morphBottom: {
  //   borderRadius: RADIUS,
  //   // box-shadow is equivalent to shadow style in React Native
  //   shadowOffset: {
  //     width: 6,
  //     height: 6,
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 6,
  //   shadowColor: color(BACKGROUND)
  //     .darken(1)
  //     .alpha(5), // this should be darker shadow
  // },
});
