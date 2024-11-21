import { useState } from 'react';

import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Card,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  FormControl,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { AddProductModal } from './AddProductModal';

export const TaskList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClick = () => setIsModalVisible(true);

  return (
    <Scrollbar>
      <Card
        sx={{
          marginTop: '32px',
          minWidth: '900px',
          padding: '24px',
        }}
      >
        <Typography variant="h4" whiteSpace="nowrap" mb={1.5}>
          Список задач
        </Typography>

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
            <InputLabel sx={{ bgcolor: 'white' }}>Задача</InputLabel>
            <Select variant="outlined">
              <MenuItem>Маркировка</MenuItem>
              <MenuItem>Создание комплекта</MenuItem>
            </Select>
          </FormControl>

          <TextField size="small" label="Количество" type="number" />

          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={onClick}
          >
            Добавить товар к задаче
          </Button>
        </Box>
      </Card>

      {isModalVisible && <AddProductModal />}
    </Scrollbar>
  );
};
