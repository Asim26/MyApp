import React, {useCallback, useEffect, useRef, useState} from 'react';

import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';
import Wrapper from '../../shared/components/wrapper';
import Header from '../../shared/components/header/header';
import images from '../../assets/images/images';
import {ScreenTitle} from '../../shared/utils/ScreenTitle';
import {RF, hp} from '../../shared/theme/responsive';
import {Bubble, GiftedChat, Time} from 'react-native-gifted-chat';
import colors from '../../assets/colors/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
// import {FONTS} from '../../assets/fonts';
import Button from '../../shared/components/button/button';
import {navigationRef} from "../../shared/services/NavService";

const Conversation = () => {
  const sheetRef = React.useRef();

  const openBottomSheet = () => {
    sheetRef.current.open();
  };

  const closeBottomSheet = () => {
    sheetRef.current.close();
  };

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
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
      id: 3,
      title: 'Help Center',
      image: images.help,
    },
    {
      id: 4,
      title: 'Privacy & Terms',
      image: images.document,
    },
  ]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hi',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: images.userImage,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log("messages ====>>>",messages)
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.APP_THEME,
            borderRadius: RF(30),
            paddingHorizontal: RF(5),
            paddingVertical: RF(5),
          },
          left: {
            backgroundColor: colors.LIGHTEST_GRAY,
            borderRadius: RF(30),
            paddingHorizontal: RF(5),
            paddingVertical: RF(5),
          },
        }}
        textStyle={{
          right: {
            color: colors.WHITE,
          },
          left: {
            color: colors.BLACK,
          },
        }}
      />
    );
  };

  const renderTime = props => {
    return null
  };

  const sendMessage = () => {
    let msg = {
      createdAt: new Date(),
      text:message,
      user: {_id: 1},
      _id: `${new Date().getTime()}`,
    }
    setMessages(previousMessages =>
        GiftedChat.append(previousMessages, msg),
    )
  }

  const renderSend = (props) => {
    console.log("props ===>>>",props);
    return (
      <>
        <View
            {...props}
            style={{marginBottom: RF(10)}}>
          <TouchableOpacity
          onPress={()=>{sendMessage()}}
          >
            <Image
              source={images.sendIcon}
              style={{width: RF(20), height: RF(20), marginRight: RF(15)}}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderContent = () => {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View
          style={{
            flex: 0.6,
            marginHorizontal: RF(10),
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              borderRadius: RF(10),
              backgroundColor: colors.WHITE,
              marginBottom: RF(10),
            }}>
            <View
              style={{
                height: RF(45),
                justifyContent: 'center',
                alignItems: 'center',

              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: RF(12),
                    color: colors.RED,
                    // fontFamily: FONTS.Milliard,
                  }}>
                    {"Delete Conversation"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 0.4, marginHorizontal: RF(10)}}>
          <TouchableOpacity
            onPress={() => {
              closeBottomSheet();
            }}
            style={{
              height: RF(45),
              backgroundColor: colors.WHITE,
              borderRadius: RF(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: RF(12),
                color: colors.BLACK,
                // fontFamily: FONTS.Milliard,
              }}>
              {'Cancel'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Wrapper noPaddingBottom>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            leftIconPath={images.arrowBack}
            title={'Paityn Saris'}
            titleLogoPath={images.userProfile}
            onLeftIconPress={()=>{navigationRef.current.goBack()}}
            titleLogosize={RF(20)}
            rightIconOnePath={images.moreOptions}
            rightIconSize={RF(20)}
            onRightIconPress={() => {
              openBottomSheet();
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
            renderBubble={renderBubble}
            renderTime={renderTime}
            placeholder={'Write a message...'}
            renderSend={renderSend}
            onInputTextChanged = {(value)=>{setMessage(value)}}
          />
        </View>
        <RBSheet
          ref={sheetRef}
          // height={hp(20)}
          openDuration={250}
          customStyles={{
            container: {
              height: hp(25),
              width: '100%',
              borderTopLeftRadius: RF(15),
              borderTopRightRadius: RF(15),
              backgroundColor: 'transparent',
              // ...GST.shadowProp
            },
          }}>
          {renderContent()}
        </RBSheet>
      </View>
    </Wrapper>
  );
};

export default Conversation;
