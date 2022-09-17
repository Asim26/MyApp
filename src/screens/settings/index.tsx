import React, {useState} from 'react';
import Wrapper from '../../shared/components/wrapper';
import {FlatList, View} from 'react-native';
import styles from './styles';
import images from '../../assets/images/images';
import Header from '../../shared/components/header/header';
import {ScreenTitle} from '../../shared/utils/ScreenTitle';
import RowItem from '../../shared/components/rowItem';
import {navigate, navigationRef} from '../../shared/services/NavService';
import {Routes} from '../../shared/utils/routes';
import {useDispatch} from 'react-redux';
import {setAuthToken, setUser} from '../../shared/redux/reducers/userReducer';

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState([
    {
      id: 0,
      title: 'Notifications Settings',
      image: images.notification,
    },
    {
      id: 1,
      title: 'Change Password',
      image: images.lock,
    },
    {
      id: 2,
      title: 'Help Center',
      image: images.help,
    },
    {
      id: 3,
      title: 'Privacy & Terms',
      image: images.document,
    },
    {
      id: 4,
      title: 'Logout',
      image: images.logout,
    },
  ]);
  const dispatch = useDispatch();
  const renderSettingsItem = (item: any) => {
    return (
      <RowItem
        title={item.title}
        rightIcon
        leftIcon={item.image}
        borderBottom
        onPress={() => {
          onnItemPress(item);
        }}
      />
    );
  };

  const onnItemPress = (item: any) => {
    switch (item.id) {
      case 0:
        return navigate(Routes.NOTIFICATION_SETTINGS);
        break;
      case 1:
        return navigate(Routes.NEW_PASSWORD);
        break;
      case 2:
        return;
      case 3:
        return navigate(Routes.PRIVACY_POLICY);
        break;
      case 4:
        return logoutUser();
    }
  };

  const logoutUser = async () => {
    dispatch(setUser(null));
    dispatch(setAuthToken(null));
  };
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            leftIconPath={images.arrowBack}
            title={ScreenTitle.SETTINGS}
            onLeftIconPress={() => {
              navigationRef?.current?.goBack();
            }}
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
