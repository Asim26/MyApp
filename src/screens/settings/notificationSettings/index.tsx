import React, {useRef, useState} from 'react';
import Wrapper from '../../../shared/components/wrapper';
import {FlatList, View} from 'react-native';
import styles from './styles';
import images from '../../../assets/images/images';
import Header from '../../../shared/components/header/header';
import {ScreenTitle} from '../../../shared/utils/ScreenTitle';
import RowItem from '../../../shared/components/rowItem';
import {navigationRef} from '../../../shared/services/NavService';
const Settings = () => {
  const [settings, setSettings] = useState([
    {
      id: 0,
      title: 'Push Notifications',
      image: images.notification,
      value: false,
    },
    {
      id: 1,
      title: 'Chat Notifications',
      image: images.lock,
      value: false,
    },
    {
      id: 3,
      title: 'Email Notifications',
      image: images.help,
      value: false,
    },
  ]);
  const renderSettingsItem = (item: any) => {
    return (
      <RowItem
        title={item.title}
        borderBottom
        isSwitch
        onSwitch={value => {
          onSwitch(item, value);
        }}
        switchValue={item.value}
      />
    );
  };
  const onSwitch = (item, value) => {
    setSettings(
      settings.map((elem: any) => {
        if (elem.id === item.id) {
          return {
            ...elem,
            value: value,
          };
        } else return elem;
      }),
    );
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            leftIconPath={images.arrowBack}
            onLeftIconPress={() => {
              navigationRef.current.goBack();
            }}
            title={ScreenTitle.NOTIFICATION_SETTINGS}
          />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={settings}
            renderItem={({item}) => renderSettingsItem(item)}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Settings;
