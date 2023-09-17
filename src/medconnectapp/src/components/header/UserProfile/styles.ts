import {StyleSheet} from 'react-native';
import {globalMargin} from '../../../../theme/global.margin';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImgContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  profileImg: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
});
