import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';

export const AdditionalTable = () => (
  <Scrollbar>
    <Paper sx={{ minWidth: '1000px', width: '100%', mb: 2 }}>
      <Toolbar
        sx={{
          bgcolor: (theme) => theme.vars.palette.grey[900],
          pr: { xs: 1, sm: 1 },
          pl: { sm: 2 },
        }}
      >
        <Typography sx={{ flex: '1 1 100%' }} color="white" variant="subtitle1" component="div">
          Упаковать 2000 единиц
        </Typography>
      </Toolbar>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Изображение</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Количество</TableCell>
              <TableCell>Описание</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ cursor: 'pointer' }}>
              <TableCell component="th" scope="row">
                <img style={{ width: '40px', height: '40px' }} alt="" />
              </TableCell>
              <TableCell>Фен</TableCell>
              <TableCell>sd2fghhj</TableCell>
              <TableCell>500</TableCell>
              <TableCell>Тестовое описание </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </Scrollbar>
);
