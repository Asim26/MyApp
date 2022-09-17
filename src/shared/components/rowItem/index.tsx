import React, {useState} from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import {Switch} from 'react-native-gesture-handler';

import styles from './styles';
import {RF, wp} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';
import images from '../../../assets/images/images';

const RowItem = (props: any) => {
  let height = props.subtitle ? RF(55) : RF(40);
  let bottomBorder = props.borderBottom ? wp(0.1) : 0;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={!props.onPress}
      style={[
        styles.container,
        {
          borderBottomWidth: bottomBorder,
          height: props.height || height,
        },
      ]}>
      {props.leftIcon && (
        <View style={styles.imageContainer}>
          <Image
            source={props.leftIcon}
            style={[styles.imageStyle, {borderRadius: props.borderRadius}]}
          />
        </View>
      )}
      {props.productImage && (
        <View style={styles.productImageCOnttainer}>
          <Image source={props.productImage} style={styles.productImageStyle} />
          <View style={styles.profileIconContainer}>
            <Image
              source={props.profileImage}
              style={styles.profileImageStyle}
            />
          </View>
        </View>
      )}

      <View
        style={[
          styles.textContainer,
          {
            flex: props.rightText !== undefined ? 0.7 : 0.8,
            paddingLeft: props.productImage && RF(10),
          },
        ]}>
        {props.title && (
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>{props.title}</Text>
          </View>
        )}
        {props.subtitle && (
          <View style={styles.addressContainer}>
            <Text
              // ellipsizeMode={'tail'}
              style={styles.addressStyle}>
              {props.subtitle}
            </Text>
          </View>
        )}
      </View>

      {props.isSwitch && (
        <View style={styles.swithContainer}>
          <Switch
            trackColor={{
              false: colors.GRAY_SCALE,
              true: colors.APP_GOLD,
            }}
            thumbColor={colors.WHITE}
            onValueChange={(value: any) => {
              props.onSwitch(value);
            }}
            value={props.switchValue}
          />
        </View>
      )}
      {props.rightIcon && (
        <View
          style={[
            styles.rightIconContainer,
            {flex: props.rightText !== undefined ? 0.5 : 0.2},
          ]}>
          <View style={[styles.rightTextContainer, {flex: 0.8}]}>
            {props.rightText && (
              <Text style={[styles.textStyles]}>{props.rightText}</Text>
            )}
          </View>

          <TouchableOpacity
            onPress={props.onRightArrowPress}
            style={[
              styles.rightTextContainer,
              {flex: props.customRightIcon ? 0.3 : 0.2},
            ]}>
            <Image
              source={
                props.customRightIcon
                  ? props.customRightIcon
                  : images.rightArrow
              }
              style={[
                styles.iconStyle,
                {
                  height: props.rightIconHeight || RF(10),
                  width: props.rightIconHeight || RF(10),
                },
              ]}
            />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default RowItem;
