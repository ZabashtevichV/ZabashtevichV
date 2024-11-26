
import type { UserProps } from 'src/sections/user/user-table-row';

import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Card,
  Table,
  Button,
  Select,
  MenuItem,
  TextField,
  TableBody,
  InputLabel,
  Typography,
  FormControl,
  TableContainer,
} from '@mui/material';

import { _users } from 'src/_mock';

import { Scrollbar } from 'src/components/scrollbar';

import { useTable } from 'src/sections/user/view';
import { emptyRows, applyFilter } from 'src/sections/user/utils';

import { TaskTableRow } from './task-table-row';
import { TaskTableHead } from './task-table-head';
import { TaskTableNoData } from './table-no-data';
import { TableEmptyRows } from './table-empty-rows';

export const TaskList = () => {
  const dataFiltered: UserProps[] = applyFilter({
    inputData: _users,
    filterName: '',
  });
  const table = useTable();

  return (
    <>
      <Card
        sx={{
          marginTop: '32px',
          padding: '24px',
        }}
      >
        <Typography variant="h4" whiteSpace="nowrap">
          Список задач
        </Typography>
      </Card>

      <Card
        sx={{
          marginTop: '24px',
          padding: '24px',
        }}
      >
        <Typography variant="h3" mb={2}>
          Задача #1
        </Typography>

        <Scrollbar sx={{ paddingTop: '6px' }}>
          <Box display="flex" gap={1} mb={2.5}>
            <FormControl sx={{ maxWidth: '300px', width: '100%' }} size="small">
              <InputLabel sx={{ bgcolor: 'white' }}>Задача</InputLabel>
              <Select variant="outlined">
                <MenuItem>Маркировка</MenuItem>
                <MenuItem>Создание комплекта</MenuItem>
              </Select>
            </FormControl>

            <TextField size="small" label="Количество" type="number" />
          </Box>

          <Typography variant="h4">Список товаров</Typography>

          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <TaskTableHead
                rowCount={_users.length}
                numSelected={table.selected.length}
                onSelectAllRows={(checked) =>
                  table.onSelectAllRows(
                    checked,
                    _users.map((user) => user.id)
                  )
                }
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'company', label: 'Company' },
                  { id: 'role', label: 'Role' },
                  { id: 'isVerified', label: 'Verified', align: 'center' },
                  { id: 'comment', label: 'Комментарий' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row) => (
                    <TaskTableRow
                      key={row.id}
                      row={row}
                      selected={table.selected.includes(row.id)}
                      onSelectRow={() => table.onSelectRow(row.id)}
                    />
                  ))}

                <TableEmptyRows height={68} emptyRows={emptyRows(1, 5, _users.length)} />
                <TaskTableNoData />
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h4" whiteSpace="nowrap" mt={2.5} mb={1}>
            Список дополнительных задач
          </Typography>

          <Box display="flex" gap={1} mb={2.5}>
            <Box display="flex" gap={0.5}>
              <Button
                title="Добавить дополнительную задачу"
                sx={{ padding: 0, minWidth: '40px' }}
                variant="contained"
                color="inherit"
                size="small"
              >
                <Add fontSize="medium" />
              </Button>

              <Button
                title="Убрать дополнительную задачу"
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
          </Box>
        </Scrollbar>
      </Card>

      <Button
        title="Добавить дополнительную задачу"
        sx={{
          padding: '0 16px',
          minWidth: '40px',
          display: 'flex',
          width: 'max-content',
          marginTop: '24px',
        }}
        variant="contained"
        color="primary"
        size="large"
      >
        <Add fontSize="medium" />
        Добавить задачу
      </Button>
    </>
  );
};
