import styles from './addressForm.module.scss';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './AddressForm.form';

export function AddressForm(props) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        console.log(values);
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const { onClose } = props;
  return (
    <>
      <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
        <div className={styles.inputsContainer}>
          <input
            type='text'
            name='title'
            className={styles.inputSmall}
            placeholder='Title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title ? 'true' : 'false'}
          />
          <input
            type='text'
            name='name'
            className={styles.inputSmall}
            placeholder='Address name'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name ? 'true' : 'false'}
          />
        </div>
        <input
          type='text'
          name='address'
          className={styles.input}
          placeholder='Your address'
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.errors.address ? 'true' : 'false'}
        />
      </form>

      <div className={styles.inputsContainer}>
        <input
          type='text'
          name='city'
          className={styles.inputSmall}
          placeholder='City'
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city ? 'true' : 'false'}
        />
        <input
          type='text'
          name='country'
          className={styles.inputSmall}
          placeholder='Country'
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.errors.country ? 'true' : 'false'}
        />
      </div>
      <div className={styles.inputsContainer}>
        <input
          type='number'
          name='postal_code'
          className={styles.inputSmall}
          placeholder='Postal code'
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          error={formik.errors.postal_code ? 'true' : 'false'}
        />
        <input
          type='number'
          name='telephone'
          className={styles.inputSmall}
          placeholder='Phone number'
          value={formik.values.telephone}
          onChange={formik.handleChange}
          error={formik.errors.telephone ? 'true' : 'false'}
        />
      </div>

      <div className={styles.buttonContainer}>
        <button
          type='submit'
          className={styles.saveButton}
          disabled={formik.isSubmitting}
        >
          Send
        </button>
      </div>
    </>
  );
}
