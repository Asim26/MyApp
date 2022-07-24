
import React, {ReactChild} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from "../../../assets/colors/colors";
// const {GRADIENT_A, GRADIENT_B, GRADIENT_C, GRADIENT_D} = COLORS;

interface Props {
  children: ReactChild;
  noPaddingTop: any;
  noPaddingBottom: any;
    statusBarColor:any,
    backgroundColor:any,
}

const Wrapper = ({children, noPaddingTop, noPaddingBottom,backgroundColor,statusBarColor}: Partial<Props>) => {
  const insets = useSafeAreaInsets();
  const paddingTop = noPaddingTop ? 0 : insets.top;
  const paddingBottom = noPaddingBottom ? 0 : insets.bottom;
  const barColor = statusBarColor ||  "dark-content";
  return (
    <>
      <StatusBar
        barStyle={barColor}
        translucent
        backgroundColor="transparent"
      />
      {/*<LinearGradient*/}
      {/*  colors={[GRADIENT_A, GRADIENT_B, GRADIENT_C, GRADIENT_D]}*/}
      {/*  style={GST.FLEX}>*/}
        <View
          style={[
            styles.container,
            {
              paddingTop,
              paddingBottom,
                backgroundColor:backgroundColor  || colors.WHITE,
            },
          ]}>
          {children}
        </View>
      {/*</LinearGradient>*/}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Wrapper;
