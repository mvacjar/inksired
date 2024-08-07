import styles from './RegisterForm.module.scss';
import Link from 'next/link';
import { useFormik } from 'formik';
import {
  initialValues,
  validationSchema,
} from '@/components/Auth/RegisterForm.form';

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <article className={styles.formSignUpContainer}>
        <h1 className={styles.textPopUp}>Sign Up</h1>
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
          <input
            name='username'
            type='text'
            placeholder='username'
            className={styles.inputSign}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <input
            name='name'
            type='text'
            placeholder='name'
            className={styles.inputSign}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            name='email'
            type='email'
            placeholder='email'
            className={styles.inputSign}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            className={styles.inputSign}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <input
            name='confirmPassword'
            type='password'
            placeholder='confirm password'
            className={styles.inputSign}
          />
          <button className={styles.buttonSignUp} type='submit'>
            Register
          </button>
        </form>
        <div className={styles.questionContainer}>
          <div className={styles.questionIn}>
            <div>
              <p>Do you already have an account?</p>
            </div>
            <Link href='/join/sign-in' className={styles.signInButtonLink}>
              <button className={styles.signInButton}>Sign In</button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
