import * as Yup from 'yup';

export function initialValues(image) {
  return {
    icon: image?.icon || '',
  };
}

export function validationSchema() {
  return Yup.object().shape({
    icon: Yup.string().required(true),
  });
}
