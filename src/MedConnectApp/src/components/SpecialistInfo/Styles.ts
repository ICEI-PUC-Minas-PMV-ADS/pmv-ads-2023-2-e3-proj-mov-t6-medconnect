import {Dimensions, StyleSheet} from 'react-native';
import {globalStyles} from '../../../theme/global.styles';

const widthScreen = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: widthScreen,
    height: "85%",
    gap: 10,
    marginBottom: 2,
  },
  profInfo:{
    flexDirection: 'row',
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
    width: "60%",
    height: 130,
  },
  cardTextInfo:{
    width: "100%",
    
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
