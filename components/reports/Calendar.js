import { StyleSheet, useColorScheme, } from 'react-native'
import React, { useRef, useState } from 'react'
import moment from 'moment'
import CalendarStrip from 'react-native-calendar-strip';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { Text, View, darkColor, ligntColors } from '../Themed'

const Calendar = () => {
  const colorScheme = useColorScheme() === 'light';
  const [newdate, setDate] = useState(new Date());
  const calenderRef = useRef();

  const date = new Date();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedDay, setSelectedDay] = useState(Date);
  const datesWhitelist = [
    // single date (today)
    // date range
    {
      start: startDate,
      end: moment(endDate),
      //  start: (date),
      //end: (moment('1/12/2023'))
    },
  ];

  // const datesWhitelist = [
  //   {
  //     start: selectedDay,
  //     end: new Date("2022-06-10"),
  //   }
  // ];

  return (
    <View style={[styles.container, styles.shadow, { backgroundColor: colorScheme ? ligntColors.lightGray : darkColor.grayDark }]}>
      <CalendarStrip
        selectedDay={selectedDay}
        ref={calenderRef}
        // scrollable={true}
        headerText={""}
        selectedDate={newdate}
        // dateNumberStyle={true}
        onDateSelected={value => {
          setDate(moment(value).format('YYYY-MM-DD'));
          console.log(value);
        }}
        getSelectedDate={value => console.log(value)}
        daySelectionAnimation={{
          type: 'border',
          duration: 200,
        }}
        calendarHeaderStyle={{
          fontSize: wp('5'),
          color: colorScheme ? ligntColors.darkGray : darkColor.lightGray,
          alignSelf: 'flex-start',
        }}
        weekendDateNumberStyle={{ color: 'red' }}
        weekendDateNameStyle={{ color: 'red' }}
        style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
        startDate={moment(date)}
        highlightDateContainerStyle={{
          backgroundColor: ligntColors.sky,
          paddingVertical: 15,
          height: 'auto',
          borderRadius: 10,
          color: 'white',
        }}
        dayNumberStyle={{
          color: 'red',
        }}
        // dayContainerStyle={{paddingVertical:10,}}
        showDayNumber={true}
        // showMonth={true}
        // showDate={true}
        dateNameStyle={{ color: 'red', backgroundColor: 'green' }}
        highlightDateNumberStyle={{
          color: ligntColors.light,
          fontSize: wp('3.2'),
          fontWeight: '500'
        }}
        highlightDateNameStyle={{
          color: ligntColors.light,
          fontSize: wp('3'),
          marginHorizontal: 1.5,
          padding: 5.5,
          borderTopEndRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        highlightDateNumberContainerStyle={{
          backgroundColor: ligntColors.red,
          borderRadius: 40,
          padding: 4,
          marginHorizontal: 10,
          minWidth: 30,
          minHeight: 30,
        }}
        datesWhitelist={datesWhitelist}
        useNativeDriver={false}
      />
      {/* 
        <CalendarStrip
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: 'white',
          }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 10, borderRadius: 20, marginVertical: 15,}}
          calendarHeaderStyle={{ color: colorScheme? darkColor.black : ligntColors.light }}
          calendarColor={colorScheme? darkColor.blackground : darkColor.darkGray}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
          highlightDateNumberStyle={{ color: 'red' }}
          highlightDateNameStyle={{ color: 'yellow' }}
          disabledDateNameStyle={{ color: 'grey' }}
          disabledDateNumberStyle={{ color: 'grey' }}
          datesWhitelist={datesWhitelist}
          // datesBlacklist={datesBlacklist}
          iconContainer={{ flex: 0.1 }}
        /> */}
    </View>
  )
}

export default Calendar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    marginTop: 10,
    paddingHorizontal: 10,

  },
  shadow: {
    borderRadius: 20,
    elevation: 20,
  }
})
