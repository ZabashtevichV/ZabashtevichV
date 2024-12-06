import './styles.css';
import 'react-phone-input-2/lib/material.css';

import { useState } from 'react';

import { Box, Card, Step, Button, Stepper, StepLabel, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { Step1 } from './step1';

export const NewZaborFormView = () => {
  const [step, setStep] = useState(1);

  const handleNextClick = () => setStep((prev) => prev + 1);

  return (
    <DashboardContent maxWidth={false}>
      <Card
        sx={{
          flexDirection: 'column',
          padding: '24px',
          display: 'flex',
        }}
      >
        <Stepper activeStep={step - 1} alternativeLabel>
          {['Описание заявки', 'Согласование'].map((label) => (
            <Step key={label} sx={{ padding: 0 }}>
              <StepLabel>
                <Typography
                  variant="h5"
                  sx={{
                    '@media (max-width: 600px)': {
                      fontSize: '14px',
                    },
                  }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Card>

      {step === 1 && <Step1 />}
      {/* {step === 2 && <Step2 />} */}

      <Box display="flex" gap={1.5} justifyContent="flex-end">
        <Button
          variant="outlined"
          size="large"
          color="inherit"
          sx={{ marginTop: '32px', width: 'max-content' }}
        >
          Назад
        </Button>

        <Button
          sx={{ marginTop: '32px', width: 'max-content' }}
          onClick={handleNextClick}
          variant="contained"
          color="inherit"
          size="large"
        >
          Следующий шаг
        </Button>
      </Box>
    </DashboardContent>
  );
};
