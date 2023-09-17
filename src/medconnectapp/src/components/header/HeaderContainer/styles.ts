import {StyleSheet, Dimensions} from 'react-native';
import {globalMargin} from '../../../../theme/global.margin';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E52D0',

    marginBottom: 10,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  content: {
    marginVertical: globalMargin.marginVertical,
    marginHorizontal: globalMargin.marginHorizontal,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  search: {
    marginVertical: globalMargin.marginVertical,
    marginHorizontal: globalMargin.marginHorizontal,
    zIndex: 1,
  },
  bgtexture: {
    zIndex: -1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
  },
});
