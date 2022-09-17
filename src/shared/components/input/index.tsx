import React, {forwardRef} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomText from '../customText';

import {RF} from '../../theme/responsive';
import {GST} from '../../theme/globalStyles';
// import {FONTS} from '../../../assets/fonts';
import colors from '../../../assets/colors/colors';

interface InputProp extends TextInputProps {
  containerStyle: ViewStyle;
  leftIcon?: any;
  rightIcon?: any;
  error: any;
  showPassword: boolean;
  toggleShowPassword: () => void;
  iconColor: string;
  placeholderText: string;
  height: number;
  placeholder: string;
  leftIconStyle: any;
  inputStyles: any;
  textContentType: any;
  keyboardType: any;
  editable: any;
}

const Input = forwardRef((props: Partial<InputProp>, ref: any) => {
  const {
    leftIcon,
    rightIcon,
    error,
    marginRight,
    containerStyle,
    showPassword,
    value,
    rightIconPress,
    iconColor,
    textContentType,
    multiline,
    editable = true,
    placeholder,
    leftIconStyle,
    inputStyles,
    keyboardType,
  } = props;

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.subContainer,
          containerStyle,
          multiline && styles.flexStart,
        ]}>
        {!!leftIcon && (
          <FastImage
            source={leftIcon}
            style={[
              styles.leftIcon,
              leftIconStyle,
              {borderColor: iconColor, marginRight: marginRight},
            ]}
            resizeMode={'contain'}
            tintColor={colors.COBALT}
          />
        )}
        <TextInput
          ref={ref}
          editable={props?.editable}
          pointerEvents={editable ? 'auto' : 'none'}
          {...props}
          autoCapitalize={'none'}
          style={[styles.input, inputStyles, multiline && styles.multiline]}
          placeholderTextColor={colors.PLACE_HOLDER_COLOR}
          placeholder={placeholder}
        />
        {!!rightIcon && (
          <TouchableOpacity onPress={rightIconPress}>
            <Image
              source={rightIcon}
              style={[styles.leftIcon, {borderColor: iconColor}]}
              resizeMode={'contain'}
              tintColor={colors.COBALT}
            />
          </TouchableOpacity>
        )}
      </View>
      {!!error && <CustomText style={GST.ERROR}>{error}</CustomText>}
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    // ...GST.mb6,
    marginBottom: RF(10),
  },
  title: {
    ...GST.mb1,
  },
  input: {
    flex: 1,
    // borderWidth:1,
    paddingRight: RF(14),
    // fontFamily: FONTS.ProximaNova,
    color: colors.BLACK,
    fontSize: RF(14),
    ...GST.py1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: RF(43),
    borderRadius: RF(25),
    borderWidth: RF(1),
    borderColor: colors.LIGHT_GRAY,
    ...GST.px3,
    // backgroundColor: colors.SILVER,
  },
  multiline: {
    // height: RF(80),
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  leftIcon: {
    // borderWidth: 1,
    width: RF(15),
    height: RF(15),
  },
});

export default Input;
