import './styles.css';
import 'react-phone-input-2/lib/material.css';

import dayjs from 'dayjs';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

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

import { DashboardContent } from 'src/layouts/dashboard';

import { TaskList } from './task-list';
import { CargoTable } from './cargo-table';
import { ProductsTable } from './products-table';

export const NewZaborFormView = () => {
  const [isExtended, setIsExtended] = useState(false);
  const [isTaskTableVisible, setIsTaskTableVisible] = useState(false);

  const onChange = () => {
    setIsExtended((prev) => !prev);
  };

  const taskHandler = () => setIsTaskTableVisible((prev) => !prev);
  return (
    <DashboardContent maxWidth={false}>
      <Card
        sx={{
          flexDirection: 'column',
          padding: '24px',
          display: 'flex',
        }}
      >
        <Box display="flex" alignItems="center" mb={3}>
          <Typography variant="h3" textAlign="center">
            Оформление заявки
          </Typography>
        </Box>

        <Typography variant="h6" textAlign="center" mt={1.5} mb={3}>
          После оформления заявки она автоматически будет обработана менеджером
        </Typography>

        <Typography variant="h4" mb={3}>
          Описание приемки
        </Typography>

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

                  <Box display="flex" gap={1.5}>
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
          <Grid2 size={{ lg: 3, xs: 12 }}>
            <Typography variant="h4" mb={1.5} whiteSpace="nowrap">
              Состав приемки
            </Typography>
          </Grid2>

          <ProductsTable />
        </Grid2>
      </Card>

      <Card style={{ marginTop: '32px', padding: '24px' }}>
        <Grid2 mt={5} container>
          <Grid2 size={{ lg: 12, xs: 12, md: 12 }}>
            <Typography variant="h6" mb={1.5} whiteSpace="pre-wrap">
              Требуются ли дополнительные действия над товаром
            </Typography>

            <Typography variant="body1" mb={1.5} whiteSpace="pre-wrap">
              * Вы можете сразу оброботать товар или сделать это перед отгрузкой позже
            </Typography>
          </Grid2>

          <Grid2 size={{ lg: 12, xs: 12, md: 12 }}>
            <FormLabel onChange={taskHandler}>
              Да
              <Checkbox />
            </FormLabel>
          </Grid2>
        </Grid2>
      </Card>

      {isTaskTableVisible && <TaskList />}

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
          variant="contained"
          size="large"
          color="inherit"
          sx={{ marginTop: '32px', width: 'max-content' }}
        >
          Отправить заявку на согласование
        </Button>
      </Box>
    </DashboardContent>
  );
};
