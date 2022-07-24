import {StyleSheet} from 'react-native';

import {RF} from './responsive';
import {SIZING} from './sizing';
import {SPACING} from './spacing';
import colors from "../../assets/colors/colors";

export const GST = StyleSheet.create({
  ...SPACING,
  ...SIZING,
  FLEX: {
    flex: 1,
  },
  ERROR: {
    marginTop: RF(2),
    fontSize: RF(10),
    color: colors.RED,
  },
  SHADOW: {
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  HITSLOP: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  DIVIDER: {
    borderBottomColor: colors.COBALT,
    borderBottomWidth: 1,
  },
  MAINT_CONTAINER: {
    flex: 1,
    // alignSelf: 'center',
    // width: '80%',
  },
  CONTENT_CONTAINER: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  BOTTOM_BTN_CONTANIER: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: RF(10),
  },
  TRIANGLE: {
    position: 'absolute',
    bottom: -RF(15),
    right: '12%',
    width: 0,
    height: 0,
    borderLeftWidth: RF(25),
    borderTopWidth: RF(15),
    borderLeftColor: 'transparent',
    borderTopColor: colors.WHITE,
    zIndex: 100,
  },
  SUBMIT_BTN_CONTAINER: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  shadowProp1: {
    shadowColor: "#000",
    shadowOffset: {
      // width: 2,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});
