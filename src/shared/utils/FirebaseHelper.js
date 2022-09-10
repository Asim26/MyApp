import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Settings, Profile} from 'react-native-fbsdk-next';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk-next';
// import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';

class firebaseHelper {
  constructor() {
    this.googleCofiguration();
    Settings.initializeSDK();
  }

  googleCofiguration() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '102991734320-hodp5ogmqo2atvbk7s4t7n3792ddim7f.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }
  googleSignIn = async callback => {
    try {
      await GoogleSignin.hasPlayServices();
      const {user, idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      let googleAuth = auth().signInWithCredential(googleCredential);
      callback(user, googleCredential, googleAuth);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  facebookSignIn = async callback => {
    await LoginManager.logOut();
    const result = await LoginManager.logInWithPermissions([
      // 'public_profile',
      // 'email', "user_friends"
      'public_profile',
      'email',
      // 'user_friends'
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    auth()
      .signInWithCredential(facebookCredential)
      .then(response => {
        callback(response?.user);
      });

    //  Profile.getCurrentProfile(data.accessToken).then((res)=>{
    //      console.log("prfile Data ====>>>",res);
    //
    //      callback(res);
    // })
  };

  //  appleSignIn  = async(callback)=> {
  //   const appleAuthRequestResponse = await appleAuth.performRequest({
  //     requestedOperation: appleAuth.Operation.LOGIN,
  //     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //   });
  //   if (!appleAuthRequestResponse.identityToken) {
  //     throw new Error('Apple Sign-In failed - no identify token returned');
  //   }
  //   const { identityToken, nonce } = appleAuthRequestResponse;
  //   const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
  //   const data =  auth().signInWithCredential(appleCredential);
  //   callback(data);
  // }
}
const FirebaseHelper = new firebaseHelper();
export default FirebaseHelper;
