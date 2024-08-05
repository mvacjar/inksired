import styles from './sign-in.module.scss';
import { JoinLayout } from '../../../layouts/joinLayout';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <main>
          <h1 className={styles.textPopUp}>Sign In</h1>
          <p className={styles.paragraph}>
            Welcome to <span className={styles.highlightWord}>Inksired</span>,
            the ultimate platform for buying and selling books, and a vibrant
            forum for book enthusiasts. Join our community to explore a wide
            range of new and used books, discover great deals, and find your
            next favorite read. Sell your books with ease and connect with
            fellow readers who share your passion. Engage in lively discussions
            about characters, new releases, and beloved classics. Sign up today
            and immerse yourself in the world of literature at Inksired!
          </p>
          <div className=''>
            <p className=''>
              Don't you already have an account?
              <Link href='/join/sign-up'>
                <button clbuttonssName='signInLink'>Sign Up</button>
              </Link>
            </p>
          </div>
        </main>
      </JoinLayout>
    </>
  );
}
