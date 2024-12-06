import { useState } from 'react';

import {
  Box,
  Card,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  FormControl,
} from '@mui/material';

export const Step1 = () => {
  const [type, setType] = useState(1);

  return (
    <>
      <Card sx={{ padding: '24px', marginTop: '24px' }}>
        <Typography variant="h4" mb={2.5} mt={2.5}>
          Ваши реквизиты
        </Typography>

        <Box display="flex" gap={1.5} flexDirection="column">
          <FormControl>
            <InputLabel sx={{ bgcolor: 'white' }}>Тип грузоместа</InputLabel>

            <Select
              onChange={(val) => setType(val.target.value as number)}
              sx={{ borderRadius: 0 }}
              label="Тип шаблона"
              value={type}
            >
              <MenuItem value={1}>ИП</MenuItem>
              <MenuItem value={2}>Организация</MenuItem>
            </Select>
          </FormControl>

          {type === 1 && (
            <TextField
              label="Фамилия"
              sx={{ borderRadius: 0 }}
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          {type === 2 && (
            <TextField
              label="Наименование организации"
              sx={{ borderRadius: 0 }}
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          {type === 1 && (
            <TextField
              label="Имя"
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          {type === 1 && (
            <TextField
              label="Отчество"
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          <TextField
            label="ИНН"
            InputProps={{
              style: {
                borderRadius: 0,
              },
            }}
          />

          {type === 1 && (
            <TextField
              label="ОГРНИП"
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          {type === 2 && (
            <TextField
              label="ОГРН"
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          {type === 1 && (
            <TextField
              label="ОКПО"
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          {type === 2 && (
            <TextField
              label="КПП"
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          {type === 2 && (
            <TextField
              label="Ген. директор"
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}

          {type === 2 && (
            <Box display="flex" flex={1} flexDirection="column">
              <Typography variant="body2">Дата регистрации</Typography>
              <TextField
                fullWidth
                type="date"
                InputProps={{
                  style: {
                    borderRadius: 0,
                  },
                }}
              />
            </Box>
          )}

          {type === 2 && (
            <TextField
              label="Адрес"
              InputProps={{
                style: {
                  borderRadius: 0,
                },
              }}
            />
          )}
        </Box>
      </Card>

      <Card sx={{ padding: '24px', marginTop: '24px' }}>
        <Typography variant="h4" mb={2.5}>
          Ваши реквизиты
        </Typography>

        <Box display="flex" gap={1.5} flexDirection="column">
          <TextField
            label="Название банка"
            fullWidth
            InputProps={{
              style: {
                borderRadius: 0,
              },
            }}
          />

          <TextField
            label="БИК"
            fullWidth
            InputProps={{
              style: {
                borderRadius: 0,
              },
            }}
          />

          <TextField
            label="Расчётный счёт"
            fullWidth
            InputProps={{
              style: {
                borderRadius: 0,
              },
            }}
          />

          <TextField
            label="Кор. счёт"
            fullWidth
            InputProps={{
              style: {
                borderRadius: 0,
              },
            }}
          />

          <TextField
            label="Адрес банка"
            minRows={3}
            multiline
            fullWidth
            InputProps={{
              style: {
                borderRadius: 0,
              },
            }}
          />
        </Box>
      </Card>
    </>
  );
};
