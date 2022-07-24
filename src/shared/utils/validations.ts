import * as Yup from 'yup';

const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide valid email')
    .required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password Too Short'),
});

export const AddPropertySchema = Yup.object().shape({
  title: Yup.string().required('Property Title is Required'),
  description: Yup.string().required('Property Description is Required'),
});

export const SignUPSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid Email Address').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must be a combination of letters and numbers',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must be a combination of letters and numbers',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const AccDetailUpdateSchema = Yup.object().shape({
  password: Yup.string()
    .required('Old Password Required')
    .min(6, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must be a combination of letters and numbers',
    ),
  confirmPassword: Yup.string()
    .required('New Password Required')
    .min(6, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must be a combination of letters and numbers',
    ),
});

export const BusinessDetailSchema = Yup.object().shape({
  zip: Yup.string().min(5, 'Invalid Zip Code').max(5, 'Invalid Zip Code'),
  workPhone: Yup.string().min(12, 'Invalid Phone Number'),
  homePhone: Yup.string().min(12, 'Invalid Phone Number'),
  mobilePhone: Yup.string()
    .required('Mobile Phone Required')
    .min(12, 'Invalid Phone Number'),
  email: Yup.string().email('Invalid Email Address').required('Email Required'),
});

export const BusinessDetailUpdateSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name Required'),
  lastName: Yup.string().required('Last Name Required'),
  zip: Yup.string().min(5, 'Invalid Zip Code').max(5, 'Invalid Zip Code'),
  workPhone: Yup.string().min(12, 'Invalid Phone Number'),
  homePhone: Yup.string().min(12, 'Invalid Phone Number'),
  mobilePhone: Yup.string()
    .required('Mobile Phone Required')
    .min(12, 'Invalid Phone Number'),
  email: Yup.string().email('Invalid Email Address').required('Email Required'),
});

export const ContactDetailsSchema = Yup.object().shape({
  mobilePhone: Yup.string()
    .required('Mobile Phone Required')
    .min(12, 'Invalid Phone Number'),
  email: Yup.string().email('Invalid Email Address').required('Email Required'),
});

export const VerifyPhoneSchema = Yup.object().shape({
  mobilePhone: Yup.string().required('Mobile Phone Required'),
});

export const ForgotPasswordPhoneSchema = Yup.object().shape({
  phone: Yup.string().min(10, 'Invalid Phone Number'),
});
export const ForgotPasswordEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide valid email')
    .required('Email Required'),
});
export const ProfessionalDetailSchema = Yup.object().shape({
  school: Yup.string().required('Law School Required'),
  practiceArea: Yup.array().min(1, 'Practice Area Required').nullable(),
  licenses: Yup.array().of(
    Yup.object().shape({
      state: Yup.object().shape({
        name: Yup.string().required('License State Required'),
      }),
      number: Yup.string().required('License Number Required'),
    }),
  ),
});

export const CardDetailsSchema = Yup.object().shape({
  name: Yup.string().required('Name Required'),
  cardNumber: Yup.string()
    .required('Card Number Required')
    .min(16, 'Invalid Card Number'),
  date: Yup.string().required('Expiration Date Required'),
  cvv: Yup.string().required('CVV Required').min(3, 'Invalid CVV'),
  zip: Yup.string().min(5, 'Invalid Zip Code'),
});

export const CultureDetaiSchema = Yup.object().shape({
  // category: Yup.array().min(1, 'Category Required').nullable(),
});

export const ProfileInfoSchema = Yup.object().shape({
  keywords: Yup.array().min(1, 'Keyword(s) Required').nullable(),
});

export const CreateCommuinitySchema = Yup.object().shape({
  name: Yup.string().required('Community Name Required'),
  about: Yup.string().required('Description Required'),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please provide valid email')
    .required('Please enter your email address'),
  phone: Yup.string().required('Please enter your phone number'),
  // location: Yup.string().required('Please add your location'),

  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
export const UpdatePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  newPassword: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Passwords must match',
  ),
});
export const UpdateProfile = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please provide valid email')
    .required('Please enter your email address'),
  // phone: Yup.string()('Please enter your phone number'),
});

export const CreatePostSchema = Yup.object().shape({
  text: Yup.string().required('Please enter text'),
});

export const EditProfileSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  description: Yup.string().required('Please enter description'),
});
