import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../theme/global.styles';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: globalStyles.colorSearchBg,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 12,
    borderWidth: 0.4,
  },
  inputSearch: {
    flex: 0.99,
    borderRadius: 5,
    opacity: 0.9,
    height: 46,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchIcon: {
    width: 34,
    height: 34,
    backgroundColor: '#999',
    alignSelf: 'center',
    alignItems: 'center',
    marginRight: 6,
    justifyContent: 'center',
    borderRadius: 5,
  },
});
