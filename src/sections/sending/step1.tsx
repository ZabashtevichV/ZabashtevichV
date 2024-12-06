import 'react-phone-input-2/lib/material.css';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';

import { Add, Remove } from '@mui/icons-material';
import { DateTimePicker } from '@mui/x-date-pickers';
import {
  Box,
  Card,
  Grid2,
  Button,
  Select,
  Checkbox,
  MenuItem,
  FormLabel,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from '@mui/material';

import { openModal } from 'src/store/modal/add-process';

import { ProductTable } from 'src/components/product-table';

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
        <Box display="flex" gap={2}>
          <DateTimePicker sx={{ flex: 1 }} label="Время отгрузки" ampm={false} minDate={dayjs()} />

          <FormControl sx={{ flex: 1 }}>
            <InputLabel>Тип отгрузки</InputLabel>

            <Select>
              <MenuItem>Яндекс Маркет</MenuItem>
              <MenuItem>Wildberries</MenuItem>
              <MenuItem>Озон</MenuItem>
            </Select>
          </FormControl>
        </Box>

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
        <Typography variant="caption">
          * Соблюдайте последовательность при добавлении транзитных адресов
        </Typography>
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
              title="Добавить адрес"
              sx={{ padding: 0, minWidth: '40px' }}
              variant="contained"
              color="inherit"
              size="small"
            >
              <Add fontSize="medium" />
            </Button>

            <Button
              title="Убрать адрес"
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

      <Grid2 container mt={3} spacing={2}>
        <Grid2 size={{ xl: 12, lg: 12, md: 12, xs: 12, sm: 12 }}>
          <ProductTable />
        </Grid2>
      </Grid2>
    </>
  );
};
