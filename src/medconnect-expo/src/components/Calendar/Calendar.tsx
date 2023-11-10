import React, {useEffect, useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {TouchableOpacity, Text, View, Modal, Alert} from 'react-native';
import { styles } from './Styles';

export const Calendario = ({atendimentos, setDataAgendamento}:any) => {
  const [showModel, setShowModel] = useState(false);
  const [datas, setDatas] = useState({})

 
  const array = {
              '2023-11-10': {
              marked: true,
              dotColor: 'green',
              selected: true,
              selectedColor: 'green',
              selectedTextColor:'white',
              disableTouchEvent: false,
            },
            '2023-11-11': {
              marked: true,
              dotColor: 'green',
              selected: true,
              selectedColor: 'green',
              selectedTextColor:'white',
              disableTouchEvent: false,
            },
          }
  
  useEffect(() => {
    const getDiasAtend = () => {
      let data = {}
      for(let i=0;i<atendimentos.length;i++){
               
          data[`${atendimentos[i].dataAtendimento.split("T")[0]}`] = 
          {marked: true, dotColor: 'green', selected: true, selectedColor: 'green', selectedTextColor:'white', disableTouchEvent: false}
          
      }
      setDatas(data)
    }
     if(atendimentos.length > 0) getDiasAtend();
  },[])
  
  /*atendimentos.map((at) => (
                {
                  at.dataAtendimento.split("T")[0]: {
                    marked: true,
                    dotColor: 'green',
                    selected: true,
                    selectedColor: 'green',
                    selectedTextColor:'white',
                    disableTouchEvent: false,
                  },
                }
              ))

          */
              console.log("------------->",datas)
  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModel(true)}
        style={styles.btnChoiseDay}>
        <Text>ESCOLHA O DIA</Text>
      </TouchableOpacity>
      <Modal visible={showModel} animationType="fade">
        <Text>Selecione o Dia</Text>
        <Calendar
          style={{borderRadius: 10, elevation: 4, margin: 40}}
          onDayPress={date => {
            console.log(date);
            const {year, month, day} = date;
            setDataAgendamento(`${year}-${month}-${day}`)
            setShowModel(false);
          }}
          //onMonthChange={() => {Alert.alert("movendo")}}
          initialDate={'2023-11-16'}
          minDate={'2022-12-31'}
          maxDate={'2024-06-31'}
          hideExtraDays={true}
          disabledByDefault
          disableAllTouchEventsForDisabledDays
          disableAllTouchEventsForInactiveDays
         
          markedDates={datas}
  
        />
      </Modal>
    </View>
  );
};

