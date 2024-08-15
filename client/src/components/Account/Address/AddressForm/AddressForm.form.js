import * as Yup from 'yup';

export function initialValues() {
  return {
    title: '',
    name: '',
    address: '',
    city: '',
    country: '',
    postal_code: '',
    telephone: '',
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address: Yup.string().required(true),
    city: Yup.string().required(true),
    country: Yup.string().required(true),
    postal_code: Yup.number().required(true),
    telephone: Yup.number().required(true),
  });
}
