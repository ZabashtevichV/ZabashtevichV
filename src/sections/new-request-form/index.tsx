import './styles.css';
import 'react-phone-input-2/lib/material.css';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import dayjs from 'dayjs';

import { Box, Card, Grid2, Checkbox, FormLabel, TextField, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

import { DashboardContent } from 'src/layouts/dashboard';

import { TaskTable } from './task-table';
import { DetailsTable } from './details-table';

export const NewRequestFormView = () => {
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
              Тип приемки *
            </Typography>
          </Grid2>
          <Grid2 size={{ lg: 9, xs: 12 }}>
            <Box display="flex" flexDirection="column" flex={1} gap={0.5}>
              <Box>
                <FormLabel>
                  <Checkbox />
                  Паллеты
                </FormLabel>

                <FormLabel>
                  <Checkbox />
                  Короба
                </FormLabel>

                <FormLabel>
                  <Checkbox />
                  Мешки
                </FormLabel>
              </Box>

              <Box flex={1} display="flex" gap={1.5}>
                <TextField
                  size="small"
                  label="Количество грузомест"
                  type="number"
                  style={{ marginTop: '12px' }}
                  fullWidth
                />

                <TextField
                  size="small"
                  label="Приблизительный вес"
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
                  <TextField size="small" label="Улица и дом" />

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
                  </Box>

                  <DateTimePicker label="Время получения" ampm={false} minDate={dayjs()} />

                  <TextField multiline minRows={2} label="Комментарий" />
                </Box>
              </Grid2>
            </>
          )}

          <Grid2 size={{ lg: 12, xs: 12 }}>
            <Grid2 size={{ lg: 3, xs: 12 }}>
              <Typography variant="h4" mb={1.5} whiteSpace="nowrap">
                Состав приемки
              </Typography>
            </Grid2>

            <DetailsTable />
          </Grid2>
        </Grid2>
      </Card>

      <Card style={{ marginTop: '32px', padding: '24px' }}>
        <Grid2 mt={5} container>
          <Grid2 size={{ lg: 3, xs: 12 }}>
            <Typography variant="h6" mb={1.5} whiteSpace="nowrap">
              Требуется ли сразу упаковать товар
            </Typography>

            <Typography variant="body1" mb={1.5}>
              * Мы сразу упакуем товар из данной премки и отправим ее на склад, где вы вы сможете
              быстро сформировать отгрузку
            </Typography>
          </Grid2>

          <Grid2 size={{ lg: 9, xs: 12 }}>
            <FormLabel onChange={taskHandler}>
              Да
              <Checkbox />
            </FormLabel>
          </Grid2>

          {isTaskTableVisible && (
            <>
              <Grid2 size={{ lg: 3, xs: 12 }} mt={5}>
                <Typography variant="h4" mb={1.5} whiteSpace="nowrap">
                  Список задач
                </Typography>
              </Grid2>
              <Grid2 size={{ lg: 12, xs: 12 }}>
                <TaskTable />
              </Grid2>
            </>
          )}
        </Grid2>
      </Card>
    </DashboardContent>
  );
};
