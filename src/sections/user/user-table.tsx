import { useState, useCallback } from 'react';

import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';

import { Scrollbar } from 'src/components/scrollbar';
import { TableToolbarHeader } from 'src/components/checkbox-table/toolbar-header';

import {
  applyFilter,
  ApplyFilterProps,
  CheckboxTableHead,
  CheckboxTableRow,
  CheckboxTableRowType,
  emptyRows,
  TableEmptyRows,
  TableNoData,
  useTable,
} from 'src/components/checkbox-table';
import { _users } from 'src/_mock';

export const UserTable = () => {
  const table = useTable();

  const [filterName, setFilterName] = useState('');

  const dataFiltered = applyFilter({
    inputData: _users as unknown as ApplyFilterProps['inputData'],
    filterName,
  });

  const onReset = () => {
    table.onSelectAllRows(
      false,
      _users.map(({ id }) => id)
    );
  };

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <>
      <TableToolbarHeader
        numSelected={table.selected.length}
        filterName={filterName}
        onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFilterName(event.target.value);
          table.onResetPage();
        }}
        onReset={onReset}
      />

      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table sx={{ minWidth: 800 }}>
            <CheckboxTableHead
              order={table.order}
              orderBy={table.orderBy}
              rowCount={_users.length}
              numSelected={table.selected.length}
              onSort={table.onSort}
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
                { id: 'status', label: 'Status' },
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
                  <CheckboxTableRow
                    key={row.id}
                    cells={row.items}
                    selected={table.selected.includes(row.id)}
                    onSelectRow={() => table.onSelectRow(row.id)}
                  />
                ))}

              <TableEmptyRows
                height={68}
                emptyRows={emptyRows(table.page, table.rowsPerPage, _users.length)}
              />

              {notFound && <TableNoData searchQuery={filterName} />}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        component="div"
        page={table.page}
        count={_users.length}
        rowsPerPage={table.rowsPerPage}
        onPageChange={table.onChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={table.onChangeRowsPerPage}
      />
    </>
  );
};
