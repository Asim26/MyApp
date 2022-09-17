import {StyleSheet} from 'react-native';
import {RF, wp} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';
// import {FONTS} from "../../../assets/fonts";

const styles = StyleSheet.create({
  container: {
    height: RF(58),
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: wp(0.1),
    borderBottomColor: colors.LIGHT_GRAY,
    marginVertical: RF(5),
    paddingBottom: RF(4),
    paddingHorizontal: RF(12),
  },
  imageContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  productImageCOnttainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  productImageStyle: {
    height: RF(50),
    width: RF(50),
    resizeMode: 'cover',
    borderRadius: RF(25),
  },
  imageStyle: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
    // borderRadius:RF(8),
  },
  textContainer: {
    flex: 1,
    // backgroundColor: 'red',
    // padding:RF(5)
  },
  rightIconContainer: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth:1,
  },
  swithContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightTextContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  addressContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  titleStyle: {
    fontSize: RF(12.5),
    fontWeight: '600',
    // fontFamily:FONTS.MilliardMedium,
    color: colors.BLACK,
  },
  addressStyle: {
    fontSize: RF(11),
    fontWeight: '600',
    // width:RF(250),
    // fontFamily:FONTS.MilliardMedium,
    color: colors.GRAY_SCALE,
  },
  iconStyle: {
    height: RF(10),
    width: RF(10),
    resizeMode: 'contain',
  },

  textStyles: {
    // fontWeight:"600",
    color: colors.GRAY_SCALE,
    fontSize: RF(13),
    // fontFamily:FONTS.MilliardMedium,
  },
  profileIconContainer: {
    height: RF(15),
    width: RF(15),
    borderRadius: RF(7.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: RF(1),
    color: colors.WHITE,

    position: 'absolute',
    bottom: RF(2),
    right: RF(1),
  },
  profileImageStyle: {
    height: RF(14),
    width: RF(14),
    resizeMode: 'cover',
    borderRadius: RF(7),
  },
});

export default styles;
