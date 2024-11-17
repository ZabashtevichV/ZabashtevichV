import { useState, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/material.css';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'src/routes/hooks';
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

export function SignInView() {
  const router = useRouter();

  const [number, setNumber] = useState('');
  const [step, setStep] = useState<'signin' | 'confirm'>('signin');

  const handleSignIn = useCallback(() => {
    setStep('confirm');
  }, []);

  const goBack = useCallback(() => {
    setStep('signin');
  }, []);

  const handleConfirm = useCallback(() => {
    router.push('/');
  }, [router]);

  const isDisabled = number.length !== 11;

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <PhoneInput
        inputStyle={{ width: '100%' }}
        countryCodeEditable={false}
        specialLabel="Телефон"
        onChange={setNumber}
        value={number}
        disableDropdown
        country="ru"
      />

      <LoadingButton
        sx={{ mt: 8 }}
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleSignIn}
        disabled={isDisabled}
      >
        Войти
      </LoadingButton>
    </Box>
  );

  const renderComfirm = (
    <Box display="flex" flexDirection="column">
      <Typography textAlign="center" mb={5}>
        На указанный вами номер телефона был отправлен код, введите его
      </Typography>

      <TextField
        slotProps={{ htmlInput: { style: { textAlign: 'center' } } }}
        type="number"
        fullWidth
      />

      <LoadingButton
        sx={{ mt: 5 }}
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleConfirm}
      >
        Подтвердить
      </LoadingButton>

      <LoadingButton
        sx={{ mt: 2 }}
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="outlined"
        onClick={goBack}
      >
        Назад
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Авторизация</Typography>
      </Box>

      {step === 'signin' && renderForm}
      {step === 'confirm' && renderComfirm}

      <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
        >
          ИЛИ
        </Typography>
      </Divider>

      <Box gap={1} display="flex" justifyContent="center">
        <Typography variant="body2" color="text.secondary">
          Если не имеете аккаунта
          <Link variant="subtitle2" sx={{ ml: 0.5 }} href="/sign-up">
            Создайте его
          </Link>
        </Typography>
      </Box>
    </>
  );
}
