import styles from './headerCart.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

export function HeaderCart() {
  const router = useRouter();
  const { query } = router;
  const initialStep = parseInt(query.step, 10) || 0;

  const steps = [
    { number: 1, title: 'Checkout' },
    { number: 2, title: 'Payment' },
    { number: 3, title: 'Confirmation' },
    { number: 4, title: 'Processing' },
  ];

  const [activeStep, setActiveStep] = useState(initialStep - 1);
  const [skipped, setSkipped] = useState(new Set());
  const [showFinishMessage, setShowFinishMessage] = useState(false);

  // Update url query param
  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: { ...query, step: activeStep + 1 },
    });
    console.log('Active Step:', activeStep + 1);
  }, [activeStep]);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === steps.length - 1) {
      // Do not set the active step; this is handled by `handleFinish`
      setShowFinishMessage(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Function to handle timeout and redirection
  const handleFinish = () => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  };

  // Custom theme
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#96503e',
        contrastText: '#fffbef',
      },
      secondary: {
        main: '#d49a6a',
        contrastText: '#fffbef',
      },
      background: {
        default: '#fffbef',
        paper: '#fffbef',
      },
      text: {
        primary: '#6687b6',
        secondary: '#fffbef',
      },
    },
    typography: {
      fontFamily: 'ABeeZee, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <article className={styles.stepper}>
        <Box>
          <section className={styles.stepperContainer}>
            <div className={styles.stepper}>
              <Stepper activeStep={activeStep}>
                {steps.map((step, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={step.title} {...stepProps}>
                      <StepLabel {...labelProps}>
                        {index <= 3 ? (
                          step.title
                        ) : (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {activeStep >= index && (
                              <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            )}
                            {step.title}
                          </Box>
                        )}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length - 1 ? (
                <>
                  <Typography sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    Your order is being processed. You will be redirected
                    shortly.
                  </Typography>
                  {showFinishMessage && (
                    <Typography sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                      Processing... Please wait.
                    </Typography>
                  )}
                </>
              ) : (
                <>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    {activeStep === 0 &&
                      'This is the Checkout step. Here you can review your cart and proceed to payment.'}
                    {activeStep === 1 &&
                      'This is the Payment step. Enter your payment information here.'}
                    {activeStep === 2 &&
                      'This is the Confirmation step. Review your order and confirm.'}
                    {activeStep === 3 &&
                      'All steps completed - you are finished'}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {!showFinishMessage && (
                      <>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                          <Button
                            color='inherit'
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                          >
                            Back
                          </Button>
                        </Typography>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <div
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            <Button
                              onClick={() => {
                                if (activeStep === steps.length - 1) {
                                  handleFinish();
                                } else {
                                  handleNext();
                                }
                              }}
                            >
                              {activeStep === steps.length - 1
                                ? 'Finish'
                                : 'Next'}
                            </Button>
                          </Typography>
                        </div>
                      </>
                    )}
                  </Box>
                </>
              )}
            </div>
          </section>
        </Box>
      </article>
    </ThemeProvider>
  );
}
