import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';

import {Routes} from '../../../shared/utils/routes';
import {View, Image, Platform} from 'react-native';
import tabStyles from '../tabStyles';
import colors from '../../../assets/colors/colors';
import {ScreenTitle} from '../../../shared/utils/ScreenTitle';
// import {FONTS} from '../../../assets/fonts';
import {RF} from '../../../shared/theme/responsive';
import images from '../../../assets/images/images';

import {useSelector} from 'react-redux';
import HomeScreen from '../../../screens/homeScreen';
import Location from '../../../screens/location';
import Messages from '../../../screens/messages';
import Profile from '../../../screens/profile';

const Tab = createBottomTabNavigator();

const renderTopBorder = () => {
  return <View style={tabStyles.topBorStyes}></View>;
};
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.WHITE, borderTopWidth: 0},
        tabBarActiveTintColor: colors.APP_GOLD,
        tabBarBackground: () => <View style={tabStyles.tabBarStyles}></View>,
      }}>
      <Tab.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: ScreenTitle.HOME,
          tabBarLabelStyle: {
            fontFamily: FONTS.MilliardMedium,
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' && RF(5),
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD: "" }]}></View>*/}
              <Image
                source={images.glob}
                style={[
                  tabStyles.iconStyle,
                  {tintColor: focused ? colors.APP_GOLD : colors.LIGHT_GRAY},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.LOCATION}
        component={Location}
        options={{
          tabBarLabel: ScreenTitle.LOCATION,
          tabBarLabelStyle: {
            fontFamily: FONTS.MilliardMedium,
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' && RF(5),
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD : "" }]}></View>*/}
              <Image
                source={images.exchange}
                style={[
                  tabStyles.iconStyle,
                  {tintColor: focused ? colors.APP_GOLD : colors.LIGHT_GRAY},
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={Routes.MESSAGES}
        component={Messages}
        options={{
          tabBarLabel: ScreenTitle.MESSAGES,
          tabBarLabelStyle: {
            fontFamily: FONTS.MilliardMedium,
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' && RF(5),
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD : "" }]}></View>*/}
              <Image
                source={images.message}
                style={[
                  tabStyles.iconStyle,
                  {tintColor: focused ? colors.APP_GOLD : colors.LIGHT_GRAY},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: ScreenTitle.PROFILE,
          tabBarLabelStyle: {
            fontFamily: FONTS.MilliardMedium,
            fontWeight: '600',
            fontSize: RF(10),
            paddingBottom: Platform.OS === 'android' && RF(5),
          },
          tabBarIcon: ({focused, color, size}) => (
            <View style={[tabStyles.tabBarItem]}>
              {/*<View style={[tabStyles.topBorStyes, { backgroundColor: focused ? colors.APP_GOLD : "" }]}></View>*/}
              <Image
                source={images.profile}
                style={[
                  tabStyles.iconStyle,
                  {tintColor: focused ? colors.APP_GOLD : colors.LIGHT_GRAY},
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const {user} = useSelector((state: any) => state.root.user);

  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen name={Routes.BOTTOM_TABS} component={MyTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
