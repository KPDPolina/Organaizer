import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';

export default function CalendarScreen() {

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#fff" }}>
      {/* <View style={{flexDirection: 'row'}}>
        <Button title="My calengar" onPress={() => Alert.alert('Simple Button pressed')}/>      
      </View> */}
      <View style={{ height: 400 }}>
        <CalendarList
          firstDay={1}
          onDayPress={(day) => { console.log('now these day are press', day); }}
          pastScrollRange={24}
          futureScrollRange={48}
          scrollEnabled={true}
          pagingEnabled={true}
          calendarHeight={400}
          style={{}}
          theme={{
            todayTextColor: "#0bb",
            textSectionTitleColor: "#099",
          }}
        />
      </View>

    </View>
  );
}


// import moment from 'moment';

// export default class CalendarScreen extends React.Component {
//     state = {
//         markedDates: {},
//         isStartDatePicked: false,
//         isEndDatePicked: false,
//         startDate: ''
//     }

//     onDayPress = (day) => {
//         if (this.state.isStartDatePicked == false) {
//             let markedDates = {}
//             markedDates[day.dateString] = { startingDay: true, color: '#00B0BF', textColor: '#FFFFFF' };
//             this.setState({
//                 markedDates: markedDates,
//                 isStartDatePicked: true,
//                 isEndDatePicked: false,
//                 startDate: day.dateString,
//             });
//         } else {
//             let markedDates = this.state.markedDates
//             let startDate = moment(this.state.startDate);
//             let endDate = moment(day.dateString);
//             let range = endDate.diff(startDate, 'days')
//             if (range > 0) {
//                 for (let i = 1; i <= range; i++) {
//                     let tempDate = startDate.add(1, 'day');
//                     tempDate = moment(tempDate).format('YYYY-MM-DD')
//                     if (i < range) {
//                         markedDates[tempDate] = { color: '#00B0BF', textColor: '#FFFFFF' };
//                     } else {
//                         markedDates[tempDate] = { endingDay: true, color: '#00B0BF', textColor: '#FFFFFF' };
//                     }
//                 }
//                 this.setState({
//                     markedDates: markedDates,
//                     isStartDatePicked: false,
//                     isEndDatePicked: true,
//                     startDate: ''
//                 });
//             } else {
//                 alert('Select an upcomming date!');
//             }
//         }
//     }

//     render() {
//         return (
//             <View>
//                 <CalendarList
//                     minDate={Date()}
//                     monthFormat={"MMMM yyyy"}
//                     markedDates={this.state.markedDates}
//                     markingType="period"
//                     hideExtraDays={true}
//                     hideDayNames={true}
//                     onDayPress={this.onDayPress}
//                 />
//             </View>
//         );
//     }
// }

