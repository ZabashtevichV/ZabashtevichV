import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import PhoneInput from 'react-phone-input-2';

import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { DashboardContent } from 'src/layouts/dashboard';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './Step3';

export const SendingView = () => {
  const matches = useMediaQuery('(max-width: 800px)');
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <DashboardContent maxWidth={false}>
      <Card
        sx={{
          flexDirection: 'column',
          padding: '24px',
          display: 'flex',
        }}
      >
        <Stepper
          orientation={matches ? 'vertical' : 'horizontal'}
          alternativeLabel={!matches}
          activeStep={step - 1}
        >
          {[
            'Описание заявки',
            'Дополнительные действия',
            'Заполнение направлений',
            'Согласование',
          ].map((label) => (
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
      {step === 3 && <Step3 />}

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
