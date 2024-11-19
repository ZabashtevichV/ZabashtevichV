import * as React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';

function createData(
  name: string,
  articul: string,
  fat: number,
  protein: number,
  price: number,
  fail: number
) {
  return {
    name,
    articul,
    fat,
    protein,
    price,
    fail,
    history: [
      {
        date: '2020-01-05',
        reason: 'Приемка',
        amount: 3,
        fail: 0,
        remains: 100,
      },
      {
        date: '2020-01-02',
        reason: 'Отгрузка',
        amount: 1,
        fail: 0,
        remains: 100,
      },
      {
        date: '2020-01-02',
        reason: 'Обнаружен брак при упаковке',
        amount: 0,
        fail: 100,
        remains: 100,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.articul}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.fail}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                История по товару
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Дата</TableCell>
                    <TableCell>Событие</TableCell>
                    <TableCell align="right">Остатки на момент события</TableCell>

                    <TableCell align="right">Добавлено товара</TableCell>
                    <TableCell align="right">Обнаружено брака</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.reason}</TableCell>
                      <TableCell align="right">{historyRow.remains}</TableCell>

                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell
                        sx={{ color: theme.colorSchemes.light?.palette.error.main }}
                        align="right"
                      >
                        {historyRow.fail}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
const rows = [
  createData('Фен', 'styler', 6.0, 24, 3.99, 1),
  createData('Кроссовки', 'sneaker', 9.0, 37, 4.99, 2),
  createData('Футболка', 'tshirt', 16.0, 24, 3.79, 0),
  createData('Бутылка спортивная', 'bottle', 3.7, 4.3, 2.5, 1),
  createData('Кепка', 'cap', 16.0, 49, 1.5, 3),
];
export function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Товар</TableCell>
            <TableCell align="right">Артикул</TableCell>
            <TableCell align="right">Общее количество</TableCell>
            <TableCell align="right">Валид</TableCell>
            <TableCell align="right">Брак</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
