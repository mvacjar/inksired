import styles from './sign-up.module.scss';
import { JoinLayout } from '../../../layouts/joinLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function SignUpPage() {
  return (
    <>
      <JoinLayout>
        <main className={styles.wrapperSign}>
          <section className={styles.containerSignUp}>
            <article className={styles.articleSignUp}>
              <div className={styles.logoContainer}>
                <Image
                  src='/images/logo_light.svg'
                  alt='Logo light'
                  width={150}
                  height={78}
                  className={styles.logo}
                />
              </div>
              <p className={styles.paragraph}>
                Welcome to{' '}
                <span className={styles.highlightWord}>Inksired</span>, the
                ultimate platform for buying and selling books, and a vibrant
                forum for book enthusiasts. Join our community to explore a wide
                range of new and used books, discover great deals, and find your
                next favorite read. Sell your books with ease and connect with
                fellow readers who share your passion. Engage in lively
                discussions about characters, new releases, and beloved
                classics. Sign up today and immerse yourself in the world of
                literature at Inksired!
              </p>
            </article>
            <article className={styles.formSignUpWrapper}>
              <h1 className={styles.textPopUp}>Sign Up</h1>
              <form className={styles.formContainer}>
                <input
                  name='username'
                  type='text'
                  placeholder='username'
                  className={styles.inputSign}
                />
                <input
                  name='name'
                  type='text'
                  placeholder='name'
                  className={styles.inputSign}
                />
                <input
                  name='useremail'
                  type='email'
                  placeholder='email'
                  className={styles.inputSign}
                />
                <input
                  name='password'
                  type='password'
                  placeholder='password'
                  className={styles.inputSign}
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
                  <Link
                    href='/join/sign-in'
                    className={styles.signInButtonLink}
                  >
                    <button className={styles.signInButton}>Sign In</button>
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
