import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import Wrapper from '../../shared/components/wrapper';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import images from '../../assets/images/images';
import colors from '../../assets/colors/colors';
import {RF} from '../../shared/theme/responsive';
import Input from '../../shared/components/input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import MessageItem from '../../shared/components/messageItem';
import {navigate} from '../../shared/services/NavService';
import {Routes} from '../../shared/utils/routes';
import Button from '../../shared/components/button/button';
// import {FONTS} from '../../assets/fonts';
import io from 'socket.io-client';
import {useIsFocused} from '@react-navigation/native';

const Messages = () => {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 0,
      name: 'Charlie George',
      message: 'Nice to talk to you!',
      image: images.userImage,
      selected: true,
    },
    {
      id: 1,
      name: 'Paityn Saris',
      message: 'Just a few kilometers away',
      image: images.userImage,
      selected: false,
    },
    {
      id: 3,
      name: 'Hanna Kenter',
      message: 'will be there...',
      image: images.userImage,
      selected: false,
    },
    {
      id: 4,
      name: 'Paityn Saris',
      message: 'Just a few kilometers away',
      image: images.userImage,
      selected: false,
    },
    {
      id: 5,
      name: 'Charlie George',
      message: 'Nice to talk to you!',
      image: images.userImage,
      selected: false,
    },
    {
      id: 6,
      name: 'Paityn Saris',
      message: 'Just a few kilometers away',
      image: images.userImage,
      selected: false,
    },
  ]);
  const inputRef = useRef();

  const focus = useIsFocused();
  useLayoutEffect(() => {}, []);

  const renderMessages = () => {
    return messages.map((item: any) => {
      return (
        <MessageItem
          onPress={() => {
            navigate(Routes.CONVERSATION, {
              id: item.id,
              name: item.name,
              userImage: item.userImage,
            });
          }}
          name={item.name}
          message={item.message}
          userImage={item.image}
        />
      );
    });
  };
  return (
    <Wrapper noPaddingBottom>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>{'Messages'}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={images.notification}
              style={styles.headerIconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            {/* <View style={styles.inputContainer}>
              <Input
                ref={inputRef}
                marginRight={RF(10)}
                containerStyle={{
                  backgroundColor: colors.LIGHTEST_GRAY,
                  borderWidth: 0,
                }}
                leftIcon={images.search}
                placeholder={'Search'}
                onChangeText={(value: any) => setSearch(value)}
                value={search}
              />
            </View> */}
            {messages ? (
              <>{renderMessages()}</>
            ) : (
              <>
                <View style={styles.noMessagesMainContainer}>
                  <Image
                    source={images.noMessages}
                    style={styles.noMessagesImage}
                  />

                  <View style={styles.noMessagesTextContainer}>
                    <Text style={styles.noMessagesTextHeading}>
                      {'You have no current messages.'}
                    </Text>
                    <Text style={styles.noMessagesTextBody}>
                      {'Start a new message to chat with a friend.'}
                    </Text>
                  </View>
                </View>
                <View style={styles.noMessagesButtonContainer}>
                  <Button title={'Start New Chat'} onPress={() => {}} />
                </View>
              </>
            )}
          </KeyboardAwareScrollView>
        </View>
        {messages.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              // navigate(Routes.SEARCH_FRIENDS);
            }}
            style={styles.chatButton}>
            <Text
              style={[
                styles.headerTextStyle,
                {color: colors.WHITE, fontSize: RF(12)},
              ]}>
              {'New Chat'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </Wrapper>
  );
};

export default Messages;
