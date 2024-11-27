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
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useDispatch } from 'react-redux';
import { openModal } from 'src/store/modal/create-product-item';
import { Iconify } from 'src/components/iconify';
import { ProductCard } from 'src/components/product-card';

import { CargoTable } from './cargo-table';

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
      <Card
        sx={{
          marginTop: '32px',
          padding: '24px',
        }}
      >
        <Grid2 container spacing={6}>
          <Grid2 size={{ lg: 3, xs: 12 }}>
            <Typography variant="h6" whiteSpace="nowrap" width="100px">
              Детали *
            </Typography>
          </Grid2>
          <Grid2 size={{ lg: 9, xs: 12 }}>
            <Box display="flex" flexDirection="column" flex={1} gap={0.5}>
              <Box flex={1} display="flex" gap={1.5}>
                <TextField
                  size="small"
                  label="Приблизительный вес"
                  type="number"
                  style={{ marginTop: '12px' }}
                  fullWidth
                />

                <TextField
                  size="small"
                  label="Объём груза в м3"
                  type="number"
                  style={{ marginTop: '12px' }}
                  fullWidth
                />
              </Box>

              <Box mt={2.5}>
                <FormLabel onChange={onChange}>
                  <Checkbox />
                  Требуется забор товара
                </FormLabel>
              </Box>
            </Box>
          </Grid2>

          {isExtended && (
            <>
              <Grid2 size={{ lg: 3, xs: 12 }}>
                <Typography variant="h6" whiteSpace="nowrap">
                  Адрес *
                </Typography>
              </Grid2>

              <Grid2 size={{ lg: 9, xs: 12 }}>
                <Box display="flex" flexDirection="column" gap={1.5}>
                  <Box flexDirection="column" display="flex" gap={1.5}>
                    <FormControl size="small">
                      <InputLabel sx={{ bgcolor: 'white' }} size="small">
                        Выберите вариант
                      </InputLabel>

                      <Select size="small">
                        <MenuItem>КАРГО - Южные ворота</MenuItem>
                        <MenuItem>КАРГО - Люблино</MenuItem>
                        <MenuItem>КАРГО - Домодедово</MenuItem>
                        <MenuItem>КАРГО - ФудСити</MenuItem>
                        <MenuItem>ПВЗ WB - г.Люберцы, Октябрьский проспект 181</MenuItem>
                        <MenuItem>ПВЗ WB - г.Люберцы, Октябрьский проспект 145</MenuItem>
                        <MenuItem>ПВЗ WB - г.Люберцы, Рождественская 4</MenuItem>
                        <MenuItem>ПВЗ WB - г.Люберцы, Солнечная 2</MenuItem>
                      </Select>
                    </FormControl>

                    <Typography textAlign="center">ИЛИ</Typography>

                    <TextField size="small" label="Улица и дом" />
                  </Box>

                  <Box
                    display="flex"
                    gap={1.5}
                    sx={{
                      '@media(max-width:600px)': {
                        flexDirection: 'column',
                      },
                    }}
                  >
                    <PhoneInput
                      specialLabel="Телефон контактного лица"
                      inputStyle={{ width: '100%' }}
                      countryCodeEditable={false}
                      inputClass="phone_input"
                      disableDropdown
                      country="ru"
                    />

                    <TextField size="small" label="Имя" fullWidth />

                    <TextField
                      size="small"
                      label="Дополнительная оплата"
                      placeholder="Если требуется"
                      type="number"
                      fullWidth
                    />

                    <TextField
                      size="small"
                      label="Номер груза КАРГО"
                      placeholder="Если требуется"
                      type="number"
                      fullWidth
                    />
                  </Box>

                  <DateTimePicker label="Время получения" ampm={false} minDate={dayjs()} />

                  <TextField multiline minRows={2} label="Комментарий" />
                </Box>
              </Grid2>

              <Grid2 size={{ lg: 3, xs: 12 }}>
                <Typography variant="h6">Дополнительные услуги *</Typography>
              </Grid2>

              <Grid2 size={{ lg: 9, xs: 12 }}>
                <Box>
                  <FormLabel>
                    Услуги грузчика
                    <Checkbox title="" />
                  </FormLabel>

                  <FormLabel>
                    Въезд на территорию
                    <Checkbox title="" />
                  </FormLabel>
                </Box>
              </Grid2>
            </>
          )}
        </Grid2>
      </Card>

      <Card style={{ marginTop: '32px', padding: '24px' }}>
        <Grid2 container spacing={1.5}>
          <Grid2 size={{ lg: 12, xs: 12 }}>
            <Typography variant="h4" whiteSpace="nowrap">
              Грузоместа
            </Typography>
          </Grid2>

          <Grid2 size={{ lg: 12, xs: 12 }}>
            <CargoTable />
          </Grid2>
        </Grid2>
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
