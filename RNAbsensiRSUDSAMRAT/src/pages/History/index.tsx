import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import axios from 'axios';

const History = ({navigation}: any) => {
  const screenWidht = Dimensions.get('window').width;

  const status = 'Check-In Pagi (WFO)';
  const location =
    'RSUD DR SAM RATULANGI TONDANO, Kembuan, Tondano Utara, Minahasa, Sulawesi Utara';
  const time = '08:15:40 1-08-2023';
  const [employeeId, setEmployeeId] = useState(3);
  const [data, setData] = useState([]);
  const [getMarkedDates, setGetMarkedDates] = useState();

  const url = `http://rsudsamrat.site:9999/api/v1/dev/attendances/filter?employeeId=${employeeId}`;

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log('error:', error);
      });
  }, []);

  useEffect(() => {
    const markedDates = data.reduce((result, schedule) => {
      schedule.attendances.forEach(attendance => {
        const {scheduleDate, attendanceState} = attendance;
        if (scheduleDate) {
          result[scheduleDate] = {
            selected: true,
            selectedColor: getColorForAttendanceState(attendanceState),
          };
        }
      });
      return result;
    }, {});

    setGetMarkedDates(markedDates);
  }, [data]);

  const getColorForAttendanceState = attendanceState => {
    switch (attendanceState) {
      case 'ONTIME': // JANGAN LUPA GANTI
        return '#14F42B';
      case 'UNPRESENT': // JANGAN LUPA GANTI
        return '#F41414';
      case 'LATE':
        return '#F0F414';
      default:
        return '#302DDF'; // JANGAN LUPA GANTI
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./../../assets/images/Ilustration4.png')}
        style={{width: screenWidht, height: 50}}
        resizeMode="cover"
      />
      <Calendar
        style={{
          height: 350,
        }}
        current={'2023-08-01'}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        markedDates={getMarkedDates}
      />
      <View>
        <Image
          source={require('./../../assets/images/Ilustration5.png')}
          style={{width: screenWidht, height: 110, position: 'absolute'}}
          resizeMode="cover"
        />
        <Text style={styles.status}>{status}</Text>
        <View style={styles.desc}>
          <View style={styles.locationContainer}>
            <Image
              source={require('./../../assets/icons/IconLocation.png')}
              style={{width: 38, height: 38}}
            />
            <Text style={styles.text}>{location}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Image
              source={require('./../../assets/icons/IconTime.png')}
              style={{width: 33, height: 33, marginRight: 2}}
            />
            <Text style={styles.text}>{time}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  status: {
    fontSize: 25,
    color: '#292F2F',
    paddingLeft: 27,
  },
  desc: {
    marginLeft: 15,
    marginTop: 20,
  },
  text: {
    fontSize: 17,
    color: '#666666',
    width: '80%',
    marginLeft: 7,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
    marginTop: 15,
  },
});
