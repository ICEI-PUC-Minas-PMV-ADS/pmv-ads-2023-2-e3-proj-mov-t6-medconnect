import {StyleSheet, Dimensions} from 'react-native';
import {globalMargin, globalStyles} from '../../../../theme/';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.primaryColor,

    marginBottom: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
