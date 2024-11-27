import { Box, Button, Card, Grid2, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useState } from 'react';
import { Iconify } from 'src/components/iconify';
import { ProductCard } from 'src/components/product-card';

import { DashboardContent } from 'src/layouts/dashboard';
import { Step1 } from './step1';
import { Step2 } from './step2';

export const PackView = () => {
  const [step, setStep] = useState(1);

  const handleNextClick = () => setStep((prev) => prev + 1);

  return (
    <DashboardContent>
      <Card sx={{ padding: '24px' }}>
        <Typography variant="h3">Заявка на обработку товара</Typography>
      </Card>

      <Card
        sx={{
          flexDirection: 'column',
          marginTop: '24px',
          padding: '24px',
          display: 'flex',
        }}
      >
        <Stepper activeStep={step - 1} alternativeLabel>
          {['Состав заявки', 'Дополнительные действия', 'Согласование'].map((label) => (
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
      {step === 2 && <Step2 />}

      <Box mt={2.5} gap={1} display="flex" justifyContent="flex-end">
        <Button color="inherit" variant="outlined" size="large">
          Назад
        </Button>

        <Button color="inherit" variant="contained" size="large" onClick={handleNextClick}>
          Отправить на согласование
        </Button>
      </Box>
    </DashboardContent>
  );
};
