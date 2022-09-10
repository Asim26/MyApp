import Toast from 'react-native-toast-message';

export const showToast = (text1: any, text2: any, type: any) => {
  Toast.show({text1, text2, type: type ? 'success' : 'error'});
};
