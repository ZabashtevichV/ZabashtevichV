import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';

export const RemainsTalbe = () => {
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
                <TableCell>Артикул</TableCell>
                <TableCell>Общее количество</TableCell>
                <TableCell>В пути на маркетплейс</TableCell>
                <TableCell>В пути на фулфилмент</TableCell>
                <TableCell>На складе фулфилмента</TableCell>
                <TableCell>Брак</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow hover tabIndex={-1} role="checkbox">
                <TableCell>.</TableCell>
                <TableCell component="th" scope="row">
                  Фен
                </TableCell>
                <TableCell>styler</TableCell>
                <TableCell>500</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>0</TableCell>
              </TableRow>

              <TableRow hover tabIndex={-1} role="checkbox">
                <TableCell>.</TableCell>
                <TableCell component="th" scope="row">
                  Фен
                </TableCell>
                <TableCell>styler</TableCell>
                <TableCell>500</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>0</TableCell>
              </TableRow>

              <TableRow hover tabIndex={-1} role="checkbox">
                <TableCell>.</TableCell>
                <TableCell component="th" scope="row">
                  Фен
                </TableCell>
                <TableCell>styler</TableCell>
                <TableCell>500</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>0</TableCell>
              </TableRow>

              <TableRow hover tabIndex={-1} role="checkbox">
                <TableCell>.</TableCell>
                <TableCell component="th" scope="row">
                  Фен
                </TableCell>
                <TableCell>styler</TableCell>
                <TableCell>500</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow hover tabIndex={-1} role="checkbox">
                <TableCell>.</TableCell>
                <TableCell component="th" scope="row">
                  Фен
                </TableCell>
                <TableCell>styler</TableCell>
                <TableCell>500</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow hover tabIndex={-1} role="checkbox">
                <TableCell>.</TableCell>
                <TableCell component="th" scope="row">
                  Фен
                </TableCell>
                <TableCell>styler</TableCell>
                <TableCell>500</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>100</TableCell>
                <TableCell>0</TableCell>
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
