//================================ React Native Imported Files ======================================//
import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
} from 'react-native';
import {RF, wp} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';
// import {FONTS} from '../../../assets/fonts';

//================================ Local Imported Files ======================================//

const Header = (props: any) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: props.bgColor, flex: props.flex || 1},
      ]}>
      <TouchableOpacity
        style={styles.headerProfile}
        onPress={props.onLeftIconPress}
        // onPress={() => {
        //   props.onPress;
        // }}
      >
        {props.leftText !== undefined && (
          <View style={{height: '100%', justifyContent: 'center'}}>
            <Text style={[styles.text, props.leftTextStyles]}>
              {props.leftText}
            </Text>
          </View>
        )}

        {props.leftIconPath !== undefined && (
          <Image
            resizeMode="contain"
            style={[
              styles.img,
              props.lefticonSize !== undefined
                ? {
                    height: props.lefticonSize,
                    width: props.lefticonSize,
                  }
                : {
                    height: RF(16),
                    width: RF(16),
                    tintColor: props.tintColor || colors.BLACK,
                  },
            ]}
            source={props.leftIconPath}
          />
        )}
      </TouchableOpacity>
      <View style={styles.headerLogo}>
        {props.titleLogoPath !== undefined && (
          <Image
            style={
              props.titleLogosize !== undefined
                ? {
                    height: props.titleLogosize,
                    width: props.titleLogosize,
                    borderRadius:
                      props.borderRadius || RF(props.titleLogosize / 2),
                    resizeMode: 'contain',
                    marginRight: RF(5),
                  }
                : {
                    height: RF(15),
                    width: RF(15),
                  }
            }
            source={props.titleLogoPath}
          />
        )}
        {props.title && (
          <Text
            style={[
              styles.title,
              {
                color: props.textColor || colors.BLACK,
                fontSize: props.fontSize || RF(17),
              },
            ]}>
            {props.title !== undefined ? props.title : 'Header'}
          </Text>
        )}
      </View>
      <View style={styles.headerMenu}>
        {props.rightIconTwoPath !== undefined && (
          <TouchableOpacity
            style={[
              styles.iconsStyles,
              {
                minWidth: props.rightIconText ? RF(80) : RF(30),
                backgroundColor: props.iconBg,
              },
            ]}
            onPress={props.onRightIconTwoPress}>
            {props.rightIconTwoPath !== undefined && !props.rightIconText && (
              <>
                <Image
                  resizeMode="contain"
                  style={[
                    styles.img,
                    props.rightIconSize !== undefined
                      ? {
                          height: props.rightIconSize,
                          width: props.rightIconSize,
                        }
                      : {
                          height: RF(13),
                          width: RF(13),
                          tintColor: props.tintColor,
                        },
                  ]}
                  source={props.rightIconTwoPath}
                />
              </>
            )}
            {props.rightIconText !== undefined && (
              <Text style={styles.rightTextStyles}>{props.rightIconText}</Text>
            )}
          </TouchableOpacity>
        )}

        {props.rightIconOnePath !== undefined && (
          <TouchableOpacity
            style={styles.iconsStyles}
            onPress={props.onRightIconPress}>
            {props.rightIconOnePath !== undefined && (
              <Image
                resizeMode="contain"
                style={[
                  styles.img,
                  {
                    height: props.rightIconSize || RF(13),
                    width: props.rightIconSize || RF(13),
                    tintColor: props.tintColorRightOne,
                  },
                ]}
                source={props.rightIconOnePath}
              />
            )}

            {props.isNotification && <View style={styles.notify}></View>}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RF(12),

    // alignSelf:''
    // borderWidth:1,
  },
  headerProfile: {
    flex: Platform.OS === 'ios' ? 0.3 : 0.3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerLogo: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerMenu: {
    flex: 0.3,
    flexDirection: 'row',
    paddingRight: 13,
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: RF(16),
    color: colors.BLACK,
    fontWeight: '600',
    textAlign: 'center',
    // fontFamily: FONTS.MilliardMedium,
  },
  text: {
    fontSize: wp(4),
    color: colors.BLACK,
    fontWeight: 'bold',
    // fontFamily: FONTS.ProximaNova,
    // alignSelf: 'center',
    // marginLeft: wp(2),
    // paddingHorizontal: wp(1),
    paddingVertical: wp(0.5),
    borderRadius: wp(0.5),
  },
  img: {
    tintColor: colors.WHITE,
  },
  iconsStyles: {
    height: RF(30),
    // borderWidth: 1,
    minWidth: RF(30),
    borderRadius: RF(15),
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: RF(4),
    alignItems: 'center',
    // backgroundColor: colors.GRAY,
  },
  rightTextStyles: {
    fontSize: RF(14),
    // fontFamily: FONTS.Milliard,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginLeft: RF(20),
  },
  notify: {
    height: RF(5),
    width: RF(5),
    backgroundColor: colors.DARK_RED,
    borderRadius: RF(2.5),
    position: 'absolute',
    top: RF(6),
    right: RF(6),
  },
});
