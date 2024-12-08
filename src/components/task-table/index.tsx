import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Box,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { Iconify } from '../iconify';

export const TaskTable = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Card>
      <Box sx={{ padding: '24px' }}>
        <Typography variant="h4">Дополнительные задачи</Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />

              <TableCell>Название</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Количество</TableCell>
              <TableCell>Описание</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell padding="none">
                <IconButton
                  sx={{
                    height: '60px !important',
                    borderRadius: 0,
                    margin: '0 auto',
                    width: '52px',
                  }}
                  onClick={() => setOpen(!open)}
                  size="small"
                >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </TableCell>
              <TableCell padding="none">
                <Iconify
                  sx={{ animation: 'spin 4s linear infinite' }}
                  color={theme.vars.palette.warning.main}
                  icon="mdi:gear"
                  height={24}
                  width={24}
                />
              </TableCell>

              <TableCell padding="none">Забор с КАРГО</TableCell>
              <TableCell padding="none">В работе</TableCell>
              <TableCell padding="none">1</TableCell>
              <TableCell padding="none">-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
