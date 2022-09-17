import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {RF} from '../../../shared/theme/responsive';
// import {FONTS} from "../../assets/fonts";
import {GST} from '../../../shared/theme/globalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerContainer: {
    flex: 0.1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: RF(10),
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    flex: 0.9,
    // paddingTop:RF(20),
    paddingHorizontal: RF(12),
  },
  titleContainer: {
    height: RF(30),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    color: colors.APP_THEME,
    // fontFamily:FONTS.MilliardMedium,
    fontSize: RF(16),
  },
  description: {
    color: colors.APP_THEME,
    // fontFamily:FONTS.ProximaNova,
    fontSize: RF(12),
    lineHeight: RF(18),
  },
});

export default styles;
