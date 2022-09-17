import {StyleSheet} from 'react-native';
import {RF} from '../../../shared/theme/responsive';
import colors from '../../../assets/colors/colors';
// import {FONTS} from "../../assets/fonts";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 0.08,
  },
  contentContainer: {
    flex: 0.92,
  },
  inputContainer: {
    height: RF(270),
    paddingHorizontal: RF(14),
    justifyContent: 'center',
    // backgroundColor: "green"
  },
  headingContainer: {
    height: RF(70),
    // justifyContent:"fle"/
    // borderWidth:1,
  },
  headingStyles: {
    fontSize: RF(17),
    color: colors.BLACK,
    // fontFamily:FONTS.MilliardMedium,
    marginBottom: RF(15),
  },
  textStyles: {
    fontSize: RF(12),
    color: colors.GRAY_SCALE,
    // fontFamily:FONTS.ProximaNova,
    // marginBottom:RF(15),
  },
  inputInnerContainer: {
    height: RF(150),
    // paddingHorizontal:RF(10),
    // backgroundColor:"red",
    // borderWidth:1,
  },
  buttonContainer: {
    paddingHorizontal: RF(14),
    // borderWidth:1,
  },
  forgotPasswordTxt: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsTxt: {
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  logoStyle: {
    marginBottom: '50%',
  },
  orTextContainer: {
    marginVertical: RF(20),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // alignItems:"center",
    justifyContent: 'space-around',
  },
  line: {
    height: RF(1),
    width: '45%',
    backgroundColor: colors.LIGHT_GRAY,
  },
  clickHere: {paddingLeft: RF(5)},
  bottomTextContainer: {
    height: RF(20),
    // backgroundColor:"green",
    alignItems: 'center',
    // justifyContent:'center',
    // borderWidth:1,
    marginTop: RF(20),
  },
  bottomTextInnerContainer: {
    flexDirection: 'row',
    // marginTop:RF(5),
  },
  bottomTextStyle: {
    // fontFamily:FONTS.MilliardMedium,
    color: colors.GRAY_SCALE,
  },
});

export default styles;
