import {StyleSheet} from 'react-native';
import {globalMargin} from '../../../theme/global.margin';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  header: {},
  content: {
    backgroundColor: '#FFF',
    width: '95%',
    flexDirection: 'column',
    marginHorizontal: globalMargin.marginHorizontal - 10,
    padding: 5,
    paddingVertical: 10,
    marginVertical: 10,
    alignSelf: 'center',
    zIndex: 90,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

    borderRadius: 2,
  },
  containerMenuIcons: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '94%',
    marginHorizontal: globalMargin.marginHorizontal,
    paddingHorizontal: globalMargin.marginHorizontal,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 90,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

    borderRadius: 2,
  },
  menuIcons: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  menuTitle: {
    marginBottom: 15,
  },
});
