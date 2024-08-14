import styles from './infoAccount.module.scss';
import { Settings } from '@/components/Account/Settings';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { DateTime } from 'luxon';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function MyOrders() {
  return <div>My orders content goes here.</div>;
}

function MyWishlist() {
  return <div>Wishlist content goes here.</div>;
}

function MyAddresses() {
  return <div>My addresses content goes here.</div>;
}

function MySettings() {
  return (
    <>
      <Settings.ChangeName />
      <Settings.ChangeEmail />
      <Settings.ChangePassword />
    </>
  );
}

export default function InfoAccount() {
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/join/sign-in');
    return null;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#96503e',
      },
      secondary: {
        main: '#947a65',
      },
    },
  });

  return (
    <>
      <main className={styles.body}>
        <section className={styles.infoContainer}>
          <Image
            className={styles.catImage}
            src='/images/cat.png'
            width={120}
            height={120}
            alt='cat'
          />
          <article className={styles.dataContainer}>
            <h1 className={styles.titleUsername}>{user.username}</h1>
            <h3 className={styles.titleName}>Name: {user.name}</h3>
            <p>e-Mail: {user.email}</p>
            <p>
              Member since:{' '}
              {DateTime.fromISO(user.createdAt, { locale: 'en' }).toFormat(
                'dd MMMM yyyy'
              )}
            </p>
          </article>
        </section>
        <section className={styles.tabsWrapper}>
          <ThemeProvider theme={theme}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='secondary'
              indicatorColor='primary'
              orientation={isSmallScreen ? 'vertical' : 'horizontal'}
            >
              <Tab label='My orders' />
              <Tab label='Wishlist' />
              <Tab label='My addresses' />
              <Tab label='Settings' />
            </Tabs>

            <Box className={styles.valuesContainer}>
              {value === 0 && <MyOrders />}
              {value === 1 && <MyWishlist />}
              {value === 2 && <MyAddresses />}
              {value === 3 && <MySettings />}
            </Box>
          </ThemeProvider>
        </section>
      </main>
    </>
  );
}
