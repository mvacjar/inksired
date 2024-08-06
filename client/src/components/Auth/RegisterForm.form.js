import * as Yup from 'yup';

export function initialValues() {
  return {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    username: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    password: Yup.string().min(5, 'Too short').required('Required'),
    confirmPassword: Yup.string().required('Required'),
  });
}
