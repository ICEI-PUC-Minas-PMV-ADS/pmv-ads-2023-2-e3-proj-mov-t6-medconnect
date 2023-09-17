import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../theme/global.styles';

export const styles = StyleSheet.create({
  content: {
    backgroundColor: globalStyles.colorSearchBg,
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 12,
  },
  inputSearch: {
    borderWidth: 0.4,
    borderRadius: 5,
    opacity: 0.9,
    height: 46,
  },
  searchIcon: {
    width: 40,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});
