import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormLabel,
  Grid2,
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/material.css';
import { useDispatch } from 'react-redux';
import { Iconify } from 'src/components/iconify';
import { ProductCard } from 'src/components/product-card';
import { openModal } from 'src/store/modal/add-process';

export const Step1 = () => {
  const [isExtended, setIsExtended] = useState(false);
  const dispatch = useDispatch();

  const onChange = () => {
    setIsExtended((prev) => !prev);
  };

  const onClick = () => {
    dispatch(openModal());
  };

  return (
    <>
      <Card sx={{ padding: '24px', marginTop: '32px', display: 'flex', flexDirection: 'column' }}>
        <DateTimePicker label="Время доставки" ampm={false} minDate={dayjs()} />

        <FormLabel
          onChange={onChange}
          sx={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}
        >
          <Checkbox />
          Доставка своими силами
        </FormLabel>

        <Box mt={2} display="flex" flexDirection="column" gap={2}>
          <PhoneInput
            specialLabel="Телефон контактного лица"
            inputStyle={{ width: '100%' }}
            countryCodeEditable={false}
            inputClass="phone_input"
            disableDropdown
            country="ru"
          />

          <TextField size="small" label="Имя контактного лица" fullWidth />

          <TextField multiline minRows={3} label="Комментарий" />
        </Box>
      </Card>

      <Card
        sx={{
          marginTop: '24px',
          padding: '24px',
        }}
      >
        <Typography variant="h4">Адреса доставки</Typography>
        <Typography variant="caption">* Соблюдайте последовательность адресов</Typography>
      </Card>

      <Card
        sx={{
          marginTop: '24px',
          padding: '24px',
        }}
      >
        <Box display="flex" gap={1}>
          <Box display="flex" gap={0.5}>
            <Button
              title="Добавить грузоместо"
              sx={{ padding: 0, minWidth: '40px' }}
              variant="contained"
              color="inherit"
              size="small"
            >
              <Add fontSize="medium" />
            </Button>

            <Button
              title="Убрать грузоместо"
              sx={{ padding: 0, minWidth: '40px' }}
              variant="contained"
              color="inherit"
              size="small"
            >
              <Remove fontSize="medium" />
            </Button>
          </Box>

          <TextField size="small" label="Адрес склада" type="number" />
        </Box>
      </Card>

      <Card style={{ marginTop: '32px', padding: '24px' }}>
        <Grid2 size={{ lg: 12, xs: 12 }}>
          <Grid2 size={{ lg: 3, xs: 12 }} display="flex" gap={2}>
            <Typography variant="h4" whiteSpace="nowrap">
              Состав приемки
            </Typography>

            <Button
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="mingcute:add-line" />}
              onClick={onClick}
            >
              Добавить товар
            </Button>
          </Grid2>
        </Grid2>
      </Card>

      <Grid2 container mt={3} spacing={2}>
        <Grid2 size={{ xl: 6, lg: 6, md: 12, xs: 12, sm: 12 }}>
          <ProductCard />
        </Grid2>

        <Grid2 size={{ xl: 6, lg: 6, md: 12, xs: 12, sm: 12 }}>
          <ProductCard />
        </Grid2>

        <Grid2 size={{ xl: 6, lg: 6, md: 12, xs: 12, sm: 12 }}>
          <ProductCard />
        </Grid2>
      </Grid2>
    </>
  );
};
