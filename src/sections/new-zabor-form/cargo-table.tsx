import { useState } from 'react';

import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from '@mui/material';


export const CargoTable = () => {
  const [image, setImage] = useState('');
  return (
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

      <FormControl sx={{ maxWidth: '300px', width: '100%' }} size="small">
        <InputLabel sx={{ bgcolor: 'white' }}>Тип грузоместа</InputLabel>
        <Select variant="outlined">
          <MenuItem>Малый пакет</MenuItem>
          <MenuItem>Короб</MenuItem>
          <MenuItem>Скотч-мешок</MenuItem>
          <MenuItem>Баул</MenuItem>
          <MenuItem>Европалет с механизированной разгрузкой</MenuItem>
          <MenuItem>Европалет с ручной разгрузкой</MenuItem>

          <MenuItem>Китайский паллет</MenuItem>
        </Select>
      </FormControl>

      <TextField size="small" label="Количество" type="number" />
    </Box>
  );
};
