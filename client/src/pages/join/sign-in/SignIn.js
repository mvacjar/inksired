import styles from './sign-in.module.scss';
import { JoinLayout } from '../../../layouts/joinLayout';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <main className={styles.wrapperSign}>
          <section className={styles.containerSignIn}>
            <article className={styles.formSignInWrapper}>
              <h1 className={styles.textPopUp}>Sign In</h1>
              <form className={styles.formContainer}>
                <input
                  type='email'
                  placeholder='email'
                  className={styles.inputSign}
                />
                <input
                  type='password'
                  placeholder='password'
                  className={styles.inputSign}
                />
                <button className={styles.buttonSignIn} type='submit'>
                  Send
                </button>
              </form>
              <div className={styles.questionContainer}>
                <div className={styles.questionUp}>
                  <div>
                    <p>Don't you already have an account?</p>
                  </div>
                  <Link
                    href='/join/sign-up'
                    className={styles.signUpButtonContainer}
                  >
                    <button className={styles.signUpButton}>Sign Up</button>
                  </Link>
                </div>
              </div>
            </article>
          </section>
        </main>
      </JoinLayout>
    </>
  );
}
