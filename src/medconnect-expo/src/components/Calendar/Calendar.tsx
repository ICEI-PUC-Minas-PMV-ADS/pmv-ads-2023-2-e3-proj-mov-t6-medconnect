import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {TouchableOpacity, Text, View, Modal, Alert} from 'react-native';

export const Calendario = () => {
  const [showModel, setShowModel] = useState(false);

  return (
  
        <Calendar
          style={{borderRadius: 10, elevation: 4, margin: 10}}
          onDayPress={date => {
            console.log(date);
            setShowModel(false);
          }}
          //onMonthChange={() => {Alert.alert("movendo")}}
          initialDate={'2023-10-16'}
          minDate={'2022-12-31'}
          maxDate={'2023-12-31'}
          //hideExtraDays={true}
          //hideDayNames={true}

          /*   markedDates={{
            '2023-10-10': {
              marked: true,
              dotColor: 'red',
              selected: true,
              selectedColor: 'purple',
              selectedTextColor:'white'
            },
          }}*/

      /*    markingType={'multi-dot'}
          markedDates={{
            '2023-10-10': {
              dots: [{color: 'red'}, {color: 'green'}],
              selected: true,
              selectedColor: 'lightblue',
              selectedTextColor: 'black',
            },
            '2023-10-12': {dots: [{color: 'red'}, {color: 'green'}]}
          }} */

          markingType={'period'}
          markedDates={{
            '2023-10-17': {startingDay: true, color: "lightgreen"},
            '2023-10-18': {marked: true, color: "lightgreen", dotColor: 'transparent'},
            '2023-10-19': {marked: true, color: "lightgreen" , dotColor: 'transparent'},
            '2023-10-20': {marked: true, color: "lightgreen", dotColor: 'transparent'},
            '2023-10-21': {endingDay: true, color: "lightgreen"},
            '2023-10-25': {startingDay: true, endingDay:true, color: 'orange'}
          }}
        />
   
  
  );
};

