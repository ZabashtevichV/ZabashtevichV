import { Box, Button, Card, Modal, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { alpha, makeStyles } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

export const AddProductModal = () => (
  <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} open>
    <Card sx={{ width: '90%' }}>
      <Box style={{ maxHeight: '100%', overflow: 'auto', padding: '24px' }}>
        <Typography variant="h3" whiteSpace="nowrap" mb={3.5} textAlign="center">
          Добавление товара в задачу
        </Typography>

        <Typography variant="h4" whiteSpace="nowrap" mb={1.5}>
          Товары в составе данной приёмке
        </Typography>

        <EnhancedTable />

        <Typography variant="h4" whiteSpace="nowrap" mb={1.5}>
          Товары на складе фулфилмента
        </Typography>

        <EnhancedTable />

        <Box display="flex" gap={1.5} justifyContent="flex-end" flex={1} mt={4.5}>
          <Button variant="outlined" color="inherit" sx={{ borderRadius: 0 }} size="large">
            Закрыть окно
          </Button>

          <Button variant="contained" color="inherit" sx={{ borderRadius: 0 }} size="large">
            Добавить товары в задачу
          </Button>
        </Box>
      </Box>
    </Card>
  </Modal>
);

interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
}

function createData(id: number, name: string, calories: number, fat: number, carbs: number): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
  };
}

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67),
  createData(2, 'Donut', 452, 25.0, 51),
  createData(3, 'Eclair', 262, 16.0, 24),
  createData(4, 'Frozen yoghurt', 159, 6.0, 24),
  createData(5, 'Gingerbread', 356, 16.0, 49),
  createData(6, 'Honeycomb', 408, 3.2, 87),
  createData(7, 'Ice cream sandwich', 237, 9.0, 37),
  createData(8, 'Jelly Bean', 375, 0.0, 94),
  createData(9, 'KitKat', 518, 26.0, 65),
  createData(10, 'Lollipop', 392, 0.2, 98),
  createData(11, 'Marshmallow', 318, 0, 81),
  createData(12, 'Nougat', 360, 19.0, 9),
  createData(13, 'Oreo', 437, 18.0, 63),
];

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'image',
    numeric: false,
    disablePadding: true,
    label: 'Изображение',
  },
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Название',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Общее количество',
  },
  {
    id: 'amountToAdd',
    numeric: true,
    disablePadding: false,
    label: 'Добавляемое количество',
  },
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'ID',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) => theme.vars.palette.grey[900],
        },
      ]}
    >
      {!!numSelected && (
        <Typography sx={{ flex: '1 1 100%' }} color="white" variant="subtitle1" component="div">
          {numSelected} выбрано
        </Typography>
      )}
    </Toolbar>
  );
}

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        onClick={() => handleClick(row.id)}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="center">
                      <TextField
                        defaultValue={0}
                        type="number"
                        size="small"
                        sx={{
                          '.MuiOutlinedInput-input': {
                            padding: '4px 8px',
                            fontSize: '12px',
                          },
                        }}
                        InputProps={{
                          style: {
                            borderRadius: 0,
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
