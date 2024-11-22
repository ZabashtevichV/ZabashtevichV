import { useState } from 'react';

import { Info, AddBox, AddToPhotos } from '@mui/icons-material';
import {
  Box,
  Table,
  Tooltip,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  Typography,
  TableContainer,
} from '@mui/material';

import { Scrollbar } from 'src/components/scrollbar';

export const RequestProductsTable = () => {
  const [image, setImage] = useState('');

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
              <TableCell>Кол-во</TableCell>
              <TableCell>Штрихкод</TableCell>

              <TableCell>Цвет</TableCell>

              <TableCell>Описание</TableCell>

              <TableCell>Состав</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow
              sx={{
                border: '1px solid rgba(var(--palette-grey-500Channel) / 0.2)',
              }}
            >
              <TableCell size="small">
                <img src={image} alt="" width="40px" height="40px" />
              </TableCell>

              <TableCell size="small">
                <Typography>1sdfs</Typography>
              </TableCell>

              <TableCell size="small" padding="none">
                Фен
              </TableCell>

              <TableCell size="small">
                <Box display="flex" gap={0.5}>
                  fen5v1 fen5v1 fen5v1
                </Box>
              </TableCell>

              <TableCell size="small">200</TableCell>

              <TableCell size="small">23423662</TableCell>

              <TableCell size="small">Красный</TableCell>

              <TableCell>Фен в картонной коробке</TableCell>

              <TableCell>Фен, 3 насадки, картонная коробка</TableCell>
            </TableRow>

            <TableRow
              sx={{
                border: '1px solid rgba(var(--palette-grey-500Channel) / 0.2)',
              }}
            >
              <TableCell size="small">
                <img src={image} alt="" width="40px" height="40px" />
              </TableCell>

              <TableCell size="small">
                <Typography>1sdfs</Typography>
              </TableCell>

              <TableCell size="small" padding="none">
                Фен
              </TableCell>

              <TableCell size="small">
                <Box display="flex" gap={0.5}>
                  fen5v1 fen5v1 fen5v1
                </Box>
              </TableCell>

              <TableCell size="small">200</TableCell>

              <TableCell size="small">23423662</TableCell>

              <TableCell size="small">Красный</TableCell>

              <TableCell>Фен в картонной коробке</TableCell>

              <TableCell>Фен, 3 насадки, картонная коробка</TableCell>
            </TableRow>

            <TableRow
              sx={{
                border: '1px solid rgba(var(--palette-grey-500Channel) / 0.2)',
              }}
            >
              <TableCell size="small">
                <img src={image} alt="" width="40px" height="40px" />
              </TableCell>

              <TableCell size="small">
                <Typography>1sdfs</Typography>
              </TableCell>

              <TableCell size="small" padding="none">
                Фен
              </TableCell>

              <TableCell size="small">
                <Box display="flex" gap={0.5}>
                  fen5v1 fen5v1 fen5v1
                </Box>
              </TableCell>

              <TableCell size="small">200</TableCell>

              <TableCell size="small">23423662</TableCell>

              <TableCell size="small">Красный</TableCell>

              <TableCell>Фен в картонной коробке</TableCell>

              <TableCell>Фен, 3 насадки, картонная коробка</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};
