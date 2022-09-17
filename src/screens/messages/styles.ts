import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {RF} from '../../shared/theme/responsive';
// import {FONTS} from '../../../assets/fonts';
import {GST} from '../../shared/theme/globalStyles';

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
    ...GST.shadowProp,
  },
  contentContainer: {
    flex: 0.9,
    paddingHorizontal: RF(12),
  },
  inputContainer: {
    width: '100%',
    height: RF(70),
    justifyContent: 'center',
  },
  headerIconStyle: {
    height: RF(15),
    width: RF(15),
    resizeMode: 'contain',
    marginRight: RF(10),
  },
  headerTextStyle: {
    // fontFamily: FONTS.MilliardMedium,
    fontSize: RF(15),
    color: colors.APP_THEME,
  },

  //start no messages Styles//

  noMessagesMainContainer: {
    height: RF(270),
    alignItems: 'center',
    paddingHorizontal: RF(14),
    justifyContent: 'flex-end',
  },
  noMessagesImage: {
    height: RF(150),
    width: RF(150),
    resizeMode: 'contain',
  },
  noMessagesTextContainer: {
    height: RF(60),
    marginTop: RF(10),
  },
  noMessagesTextHeading: {
    fontSize: RF(17),
    color: colors.BLACK,
    // fontFamily: FONTS.MilliardMedium,
    textAlign: 'center',
    marginBottom: RF(10),
  },
  noMessagesTextBody: {
    fontSize: RF(12),
    color: colors.GRAY_SCALE,
    textAlign: 'center',
    // fontFamily: FONTS.ProximaNova,
  },
  noMessagesButtonContainer: {
    marginVertical: RF(10),
    paddingHorizontal: RF(14),
  },
  chatButton: {
    height: RF(40),
    width: RF(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.APP_THEME,
    borderRadius: RF(25),
    position: 'absolute',
    bottom: RF(15),
    right: RF(10),
  },
});

export default styles;
