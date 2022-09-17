import React, {useRef} from 'react';
import {useState} from 'react';
import styles from './styles';
import {useDispatch} from 'react-redux';
import Wrapper from '../../../shared/components/wrapper';
import {Text, View, TouchableOpacity, Keyboard} from 'react-native';
import Input from '../../../shared/components/input';
import Button from '../../../shared/components/button/button';
import Header from '../../../shared/components/header/header';
import images from '../../../assets/images/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Formik} from 'formik';
import {
  LoginSchema,
  UpdatePasswordSchema,
} from '../../../shared/utils/validations';
import {RF} from '../../../shared/theme/responsive';
import {navigationRef} from '../../../shared/services/NavService';
import {Routes} from '../../../shared/utils/routes';
import {showToast} from '../../../shared/services/HelperService';

const NewPassword = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formikRef = useRef();
  const oldPassword = useRef();
  const newPassword = useRef();
  const confirmPassword = useRef();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const submitHandler = ({oldPassword, newPassword, confirmPassword}: any) => {
    setLoading(true);
    let params = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    updatePassword(params);
  };

  const updatePassword = async (params: any) => {};

  return (
    <Wrapper noPaddingBottom>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Header
            leftIconPath={images.arrowBack}
            onLeftIconPress={() => {
              navigationRef.current.goBack();
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Formik
              initialValues={initialValues}
              validationSchema={UpdatePasswordSchema}
              onSubmit={submitHandler}
              innerRef={formikRef}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View style={styles.inputContainer}>
                    <View style={styles.headingContainer}>
                      <Text style={styles.headingStyles}>
                        {'Create new password'}
                      </Text>
                      <Text style={styles.textStyles}>
                        {'Type & confirm a secure new password.'}
                      </Text>
                    </View>
                    <View style={styles.inputInnerContainer}>
                      <Input
                        returnKeyType={'next'}
                        onSubmitEditing={() => newPassword.current.focus()}
                        value={values.oldPassword}
                        placeholder={'Enter old password'}
                        textContentType={'password'}
                        rightIcon={images.eye}
                        ref={oldPassword}
                        onChangeText={handleChange('oldPassword')}
                        showPassword={showPassword}
                        rightIconPress={toggleShowPassword}
                        secureTextEntry={!showPassword}
                        error={
                          touched.oldPassword && errors.oldPassword
                            ? errors.oldPassword
                            : ''
                        }
                      />
                      <Input
                        returnKeyType={'next'}
                        onSubmitEditing={() => confirmPassword.current.focus()}
                        value={values.newPassword}
                        placeholder={'New password'}
                        textContentType={'password'}
                        rightIcon={images.eye}
                        ref={newPassword}
                        onChangeText={handleChange('newPassword')}
                        showPassword={showPassword}
                        rightIconPress={toggleShowPassword}
                        secureTextEntry={!showPassword}
                        error={
                          touched.newPassword && errors.newPassword
                            ? errors.newPassword
                            : ''
                        }
                      />
                      <Input
                        returnKeyType={'done'}
                        onSubmitEditing={() => {
                          Keyboard.dismiss();
                        }}
                        value={values.confirmPassword}
                        placeholder={'Confirm password'}
                        textContentType={'confirmPassword'}
                        rightIcon={images.eye}
                        ref={confirmPassword}
                        onChangeText={handleChange('confirmPassword')}
                        showPassword={showPassword}
                        rightIconPress={toggleShowPassword}
                        secureTextEntry={!showPassword}
                        error={
                          touched.confirmPassword && errors.confirmPassword
                            ? errors.confirmPassword
                            : ''
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <View style={{marginVertical: RF(10)}}>
                      <Button
                        title={'Update Password'}
                        onPress={() => {
                          handleSubmit();
                        }}
                      />
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </Wrapper>
  );
};

export default NewPassword;
