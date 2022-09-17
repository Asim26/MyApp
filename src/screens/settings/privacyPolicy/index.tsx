import React, {useRef, useState} from 'react';
import Wrapper from '../../../shared/components/wrapper';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import images from '../../../assets/images/images';
import Header from '../../../shared/components/header/header';

import CommonText from '../../../shared/utils/commonText';
import {RF} from '../../../shared/theme/responsive';
import {navigationRef} from '../../../shared/services/NavService';

const Privacy = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            leftIconPath={images.arrowBack}
            onLeftIconPress={() => {
              navigationRef?.current?.goBack();
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <View style={[styles.titleContainer]}>
              <Text style={styles.textStyle}>{'Privacy & Terms'}</Text>
            </View>
            <Text style={styles.description}>{CommonText.privacy}</Text>
            <View style={[styles.titleContainer, {marginTop: RF(10)}]}>
              <Text style={[styles.textStyle, {fontSize: RF(12)}]}>
                {'Information Collection and Use'}
              </Text>
            </View>
            <Text style={styles.description}>{CommonText.privacy}</Text>
          </ScrollView>
        </View>
      </View>
    </Wrapper>
  );
};

export default Privacy;
