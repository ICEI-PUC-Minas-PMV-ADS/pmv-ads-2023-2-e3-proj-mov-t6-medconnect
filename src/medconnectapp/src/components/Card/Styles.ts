import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../theme/global.styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 330,
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
    width: 230,
    height: 130,
  },
  cardSpecBtnView: {
    width: 100,
    height: 32,
    backgroundColor: globalStyles.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 25,
    marginTop: 5,
    borderRadius: 3,
  },
  cardSpecBtnViewText: {
    color: '#FFF',
  },
});
