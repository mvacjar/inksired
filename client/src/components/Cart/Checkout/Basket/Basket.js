import styles from './basket.module.scss';
import { useState } from 'react';
import { map } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { CalcDiscountPrice } from '@/utils';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Basket(props) {
  const { books } = props;
  const [numberQ, setNumberQ] = useState(1);

  const handleChange = (event) => {
    setNumberQ(event.target.value);
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
    typography: {
      fontFamily: 'ABeeZee, sans-serif',
    },
  });

  return (
    <div className={styles.basketContainer}>
      <h1 className={styles.basketTitle}>Your bag</h1>
      <div className={styles.basketBooksList}>
        {map(books, (book) => {
          const { attributes } = book;
          const coverUrl = attributes?.cover?.data?.attributes?.url || '';
          const title = attributes?.title || 'Unknown Title';

          const authors =
            attributes.authors?.data[0]?.attributes?.name_author ??
            'Unknown Author';
          const linkAuthor = attributes.authors.data[0].attributes.author_slug;

          const saga = attributes?.sagas?.data?.attributes?.saga_title || '';
          const orderSaga = attributes?.order_in_saga || '';
          const linkSaga = attributes?.sagas?.data?.attributes?.saga_name || '';
          const hasSaga = attributes.sagas?.data?.attributes?.saga_title ?? '';

          const originalPrice = book.attributes.price;
          const discount = book.attributes.discount;
          const finalPrice = CalcDiscountPrice(originalPrice, discount);

          return (
            <div className={styles.basketBooks} key={book.id}>
              <div className={styles.basketBooksCover}>
                {coverUrl && (
                  <Image
                    src={coverUrl}
                    alt={title}
                    width={200}
                    height={300}
                    className={styles.bookCover}
                  />
                )}
              </div>
              <div className={styles.bookInfoWrapper}>
                <div className={styles.booksInfo}>
                  <h6 className={styles.title}>{title}</h6>
                  <Link href={`/author/${linkAuthor}`}>
                    <div className={styles.authors}>{authors}</div>
                  </Link>
                  <div className={styles.sagaWrapper}>
                    <Link href={`/saga/${linkSaga}`}>
                      <div className={styles.sagaContainer}>
                        {hasSaga ? (
                          <>
                            <span className={styles.sagaPretitle}>Saga:</span>{' '}
                            <span className={styles.sagaTitle}>{saga}</span>
                          </>
                        ) : (
                          <p style={{ display: 'none' }}></p>
                        )}
                      </div>
                    </Link>
                    <p className={styles.sagaOrder}>
                      {orderSaga ? `#${attributes?.order_in_saga}` : ''}
                    </p>
                  </div>
                  <div className={styles.priceContainer}>
                    {discount > 0 ? (
                      <>
                        <span className={styles.originalPrice}>
                          {originalPrice.toFixed(2)}€
                        </span>
                        <span className={styles.discountedPrice}>
                          {finalPrice.toFixed(2)}€
                        </span>
                      </>
                    ) : (
                      <span className={styles.regularPrice}>
                        {originalPrice.toFixed(2)}€
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles.quantity}>
                  <ThemeProvider theme={theme}>
                    <Box
                      sx={{
                        minWidth: 40,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '1rem',
                      }}
                      size='small'
                      options={[]}
                      value={null}
                    >
                      <FormControl
                        sx={{
                          m: 1,
                          minWidth: 35,
                        }}
                        size='small'
                      >
                        <Select
                          value={numberQ}
                          onChange={handleChange}
                          displayEmpty
                          sx={{ padding: '4px 10px' }}
                        >
                          {Array.from({ length: 10 }, (_, i) => (
                            <MenuItem key={i + 1} value={i + 1}>
                              {i + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <DeleteIcon
                        sx={(theme) => ({
                          mt: 1,
                          color: theme.palette.primary.main,
                          cursor: 'pointer',
                          transition: 'transform 0.3s',
                          '&:hover': {
                            transform: 'scale(1.2)',
                          },
                          '&:active': {
                            transform: 'scale(1)',
                          },
                        })}
                      />
                    </Box>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
