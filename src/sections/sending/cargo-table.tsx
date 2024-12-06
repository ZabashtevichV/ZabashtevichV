import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Card,
  Button,
  Select,
  MenuItem,
  useTheme,
  TextField,
  InputLabel,
  Typography,
  FormControl,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { ProductTable } from 'src/components/product-table';

export const CargoTable = () => {
  const theme = useTheme();

  return (
    <>
      <Card sx={{ marginTop: '24px', padding: '24px' }}>
        <Box
          alignItems="center"
          display="flex"
          gap={2}
          sx={{
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              alignItems: 'start',
              gap: 1,
            },
          }}
        >
          <Typography variant="h4">Формирование отправлений</Typography>

          <Button
            startIcon={<Iconify icon="mingcute:add-line" />}
            variant="contained"
            color="inherit"
          >
            Добавить отправление
          </Button>
        </Box>
      </Card>

      <Card sx={{ marginTop: '24px' }}>
        <Box sx={{ padding: '24px 24px 12px 24px' }} gap={2}>
          <Typography mb={2} variant="h4">
            Отправление #1
          </Typography>

          <TextField size="small" label="Название отправления" />
        </Box>

        <Box
          sx={{
            borderBottom: `1px solid ${theme.vars.palette.grey[400]}`,
            padding: '12px 24px 32px 24px',
          }}
          display="flex"
          gap={1}
          mb={4}
        >
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

          <FormControl sx={{ maxWidth: '300px', width: '100%' }} size="small">
            <InputLabel sx={{ bgcolor: 'white' }}>Тип грузоместа</InputLabel>
            <Select variant="outlined">
              <MenuItem>Паллет</MenuItem>
              <MenuItem>Короб</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <ProductTable title="Состав отправления" isPreview color="dark" />
      </Card>
    </>
  );
};
