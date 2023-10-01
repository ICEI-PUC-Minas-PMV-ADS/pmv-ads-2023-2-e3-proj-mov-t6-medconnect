import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width / 3 - 30;
const height = Dimensions.get('window').height / 8;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2D2D2',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'column',
  },
  icon: {
    width: width * 0.65,
    height: height * 0.65,
  },
  textStyle: {
    fontSize: width * 0.1,
  },
});
