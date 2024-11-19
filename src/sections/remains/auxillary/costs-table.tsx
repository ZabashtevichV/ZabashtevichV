import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
} from '@mui/material';

import { Scrollbar } from 'src/components/scrollbar';

export const CostsTalbe = () => {
  console.log('hi');

  return (
    <Card>
      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>123</TableCell>

                <TableCell>Название</TableCell>
                <TableCell>Количество</TableCell>
                <TableCell>Общая цена</TableCell>
                <TableCell>Цена 1 шт.</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow hover tabIndex={-1} role="checkbox">
                <TableCell>.</TableCell>
                <TableCell component="th" scope="row">
                  Курьерский пакет 400x500
                </TableCell>
                <TableCell>100</TableCell>
                <TableCell>5000р</TableCell>
                <TableCell>50р</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        component="div"
        page={1}
        count={[].length}
        rowsPerPage={5}
        onPageChange={() => {}}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={() => {}}
      />
    </Card>
  );
};
