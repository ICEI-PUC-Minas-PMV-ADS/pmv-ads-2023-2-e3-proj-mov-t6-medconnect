import {Dimensions, StyleSheet} from 'react-native';
import {globalStyles} from '../../../theme/global.styles';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    height: 140,
    gap: 10,
    marginBottom: 2,
  },
  cardSpecImgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardSpecImgProfile: {
    width: 100,
    height: 120,
  },
  cardSpecInfo: {
    width: width - 120,
    height: 130,
  },
  cardSpecBtnView: {
    width: 100,
    height: 32,
    backgroundColor: globalStyles.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 3,
  },
  cardSpecBtnViewText: {
    color: '#FFF',
  },
});
