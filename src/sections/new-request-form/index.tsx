import './styles.css';
import 'react-phone-input-2/lib/material.css';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

import { Box, Card, Grid2, Checkbox, FormLabel, TextField, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { NewRequestFormTable } from './table';

export const NewRequestFormView = () => {
  const [isExtended, setIsExtended] = useState(false);

  const onChange = () => {
    setIsExtended((prev) => !prev);
  };

  return (
    <DashboardContent>
      <Card
        sx={{
          flexDirection: 'column',
          padding: '24px',
          display: 'flex',
        }}
      >
        <Box display="flex" alignItems="center" mb={3}>
          <Typography variant="h3" flexGrow={1} textAlign="center">
            Оформление заявки
          </Typography>
        </Box>

        <Grid2 container spacing={6}>
          <Grid2 size={{ lg: 12, xs: 12 }}>
            <Typography variant="h4" flexGrow={1} mb={3}>
              Описание приемки
            </Typography>

            <Box display="flex" mt={1.5} gap={16} p="0 24px">
              <Typography variant="h6" whiteSpace="nowrap" width="100px">
                Тип приемки *
              </Typography>

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

                <Box mt={2.5} ml={-1.5}>
                  <FormLabel onChange={onChange}>
                    <Checkbox />
                    Требуется забор товара
                  </FormLabel>
                </Box>
              </Box>
            </Box>

            {isExtended && (
              <Box display="flex" gap={16} p="0 24px" mt={1.5}>
                <Typography variant="h6" whiteSpace="nowrap" width="100px">
                  Адрес *
                </Typography>

                <Box flexDirection="column" display="flex" flex={1} gap={2}>
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

                  <TextField multiline minRows={2} label="Комментарий" />
                </Box>
              </Box>
            )}
          </Grid2>

          <Grid2 size={{ lg: 12, xs: 12 }}>
            <Typography variant="h4" flexGrow={1} mb={1.5}>
              Состав приемки
            </Typography>

            <NewRequestFormTable />
          </Grid2>
        </Grid2>
      </Card>
    </DashboardContent>
  );
};
