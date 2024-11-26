import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Info } from '@mui/icons-material';
import {
  Box,
  Table,
  Tooltip,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  IconButton,
  Typography,
  TableContainer,
} from '@mui/material';

import { openModal } from 'src/store/modal/create-product-item';

import { Scrollbar } from 'src/components/scrollbar';

export const ProductsTable = () => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <Scrollbar>
      <TableContainer sx={{ overflow: 'unser', paddingBottom: '4px' }}>
        <Table sx={{ minWidth: 1500 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  Изображение
                </Box>
              </TableCell>
              <TableCell width={100}>
                ID
                <Tooltip title="Наш внутренний уникальный идентификатор">
                  <IconButton size="small">
                    <Info fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>

              <TableCell>Название</TableCell>

              <TableCell>Артикулы</TableCell>

              <TableCell>Цвет</TableCell>

              <TableCell>Количество</TableCell>

              <TableCell>Описание</TableCell>
              <TableCell>Штрихкод</TableCell>

              <TableCell>Состав</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <img src={image} alt="" width="40px" height="40px" />
              </TableCell>

              <TableCell>
                <Typography>1sdfs</Typography>
              </TableCell>

              <TableCell>123</TableCell>

              <TableCell>
                <Box display="flex" gap={0.5}>
                  123
                </Box>
              </TableCell>

              <TableCell>
                <Box display="flex" gap={0.5}>
                  Красный
                </Box>
              </TableCell>

              <TableCell>
                <TextField
                  placeholder="Кол-во"
                  fullWidth
                  size="small"
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
              </TableCell>

              <TableCell>123123</TableCell>

              <TableCell>23423422</TableCell>

              <TableCell>123</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};
