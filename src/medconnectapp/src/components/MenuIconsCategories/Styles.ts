import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width / 3 - 30;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2D2D2',
    width: width,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'column',
  },
  icon: {
    width: width - 40,
    height: width - 40,
  },
  textStyle: {
    fontSize: 10,
  },
});
