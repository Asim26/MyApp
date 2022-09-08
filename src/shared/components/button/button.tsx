import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {hp, RF, wp} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';
// import {FONTS} from "../../../assets/fonts";
import Colors from '../../../assets/colors/colors';

const defaultButtonTitle = 'Button';

const Button = (props: any) => {
  const onPressDefault = () => {
    console.log('Button is pressed');
  };

  const renderIcon = () => {
    const {icon, iconStyle} = props;
    let styleIcon = iconStyle !== undefined ? iconStyle : styles.icon;
    return (
      // <View style={styles.iconContainer}>
      <Image
        source={icon}
        style={[
          styleIcon,
          {tintColor: props.iconTintColor, marginRight: props.marginRightIcon},
        ]}
        resizeMode={'contain'}
      />
      // </View>
    );
  };

  const renderBorder = () => {
    return (
      <View
        style={[
          styles.line,
          {backgroundColor: props.centerLineColor || colors.BLUE},
        ]}></View>
    );
  };

  const renderTitleText = () => {
    let {titleStyle, title, icon, iconPlace, isBorder} = props;

    let btnTitleStyle =
      titleStyle !== undefined ? titleStyle : styles.textStyle;
    let btnTitle = title !== undefined ? title : defaultButtonTitle;
    let isIcon = icon !== undefined;

    let width = '100%';
    if (isIcon && (iconPlace === 'left' || iconPlace === 'right')) {
      width = '80%';
    }

    return (
      <View
        style={[
          styles.textContainer,
          {
            borderWidth: 0,
            borderColor: colors.BLACK,
            width: width,
            borderLeftWidth: props.borderLeftWidth,
            justifyContent: isBorder ? 'flex-start' : 'center',
          },
        ]}>
        {isIcon && iconPlace === 'leftCenter' ? renderIcon() : null}
        <Text style={btnTitleStyle}>{btnTitle}</Text>
        {isIcon && iconPlace === 'rightCenter' ? renderIcon() : null}
      </View>
    );
  };

  const {
    style,
    BackgroundImage,
    title,
    icon,
    iconPlace = 'left',
    onPress,
    borderRadius,
    isBorder,
  } = props;

  // Setting Button Style
  let touchableStyle = style !== undefined ? style : styles.container;
  let isIcon = icon !== undefined;
  let bgColor = props.bgColor || colors.APP_THEME;
  let height = props.height || (Platform.OS === 'ios' ? RF(45) : RF(45));
  let width = props.width || '100%';
  let marginTop = props.marginTop || hp(2);
  let borderWidth = props.borderWidth || RF(1);
  let borderColor = props.borderColor || colors.LIGHT_GRAY;
  let isDisabled = props.isDisabled || false;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress !== undefined ? onPress : onPressDefault}
      style={[
        touchableStyle,
        {
          backgroundColor: bgColor,
          height: height,
          width: width,
          borderRadius: borderRadius || RF(22.5),
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode={'stretch'}
        style={styles.imgBackground}
        imageStyle={{borderRadius: RF(10), overflow: 'hidden'}}>
        {!props.loading ? (
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            {isIcon && iconPlace === 'left' ? renderIcon() : null}

            {isBorder ? renderBorder() : null}

            {(title === undefined || title.length > 0) && renderTitleText()}

            {isIcon && iconPlace === 'right' ? renderIcon() : null}
          </View>
        ) : (
          <ActivityIndicator
            color={colors.WHITE}
            size={'small'}></ActivityIndicator>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: RF(2),
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  icon: {
    width: RF(15),
    height: RF(15),
    borderWidth: 0,
    marginLeft: RF(10),
    tintColor: colors.WHITE,
    resizeMode: 'contain',
  },

  textContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  textStyle: {
    color: colors.WHITE,
    fontSize: RF(13),
    fontWeight: '600',
    // fontFamily: FONTS.Milliard
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: RF(40),
    borderRightWidth: RF(1),
  },
  line: {
    width: wp(0.1),
    height: '40%',
    backgroundColor: colors.WHITE,
    marginHorizontal: RF(10),
  },
});
