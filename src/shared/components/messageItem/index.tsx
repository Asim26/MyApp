import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import styles from './styles';
import images from '../../../assets/images/images';
import {RF} from '../../theme/responsive';
// import {FONTS} from "../../../assets/fonts";
import colors from '../../../assets/colors/colors';

interface MessageProps {
  name: string;
  message: string;
  onPress: any;
  userImage: any;
}

const MessageItem = (props: MessageProps) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.profileContainer}>
      <View style={styles.profileIconContainer}>
        <Image source={props?.userImage} style={styles.profileStyles} />
      </View>
      <View style={styles.profileDetailsContainer}>
        <Text
          style={[
            styles.contentTitle,
            {
              fontSize: RF(14),
              //   fontFamily: FONTS.ProximaNova,
              color: colors.BLACK,
            },
          ]}>
          {props?.name}
        </Text>
        <Text
          style={[
            styles.contentTitle,
            {
              fontSize: RF(12),
              //   fontFamily: FONTS.ProximaNova,
              color: colors.GRAY,
              marginBottom: RF(3),
            },
          ]}>
          {props?.message}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text
          style={[
            styles.contentTitle,
            {
              fontSize: RF(12),
              //   fontFamily: FONTS.ProximaNova,
              color: colors.GRAY_SCALE,
            },
          ]}>
          {'6:45 PM'}
        </Text>
        <View style={styles.onlineIcon}></View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageItem;
