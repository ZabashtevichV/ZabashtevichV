import { nanoid } from 'nanoid';
import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  LinearProgress,
  linearProgressClasses,
  Modal,
  Tab,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import { SyntheticEvent, useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { varAlpha } from 'src/theme/styles';
import { getProductList, getProductListInfo } from 'src/api';
import {
  CheckboxTableHead,
  CheckboxTableRow,
  CheckboxTableRowType,
  emptyRows,
  TableEmptyRows,
  TableNoData,
  TableToolbarHeader,
  useTable,
} from 'src/components/checkbox-table';
import { closeModal } from 'src/store/modal/add-product-item';
import { useSelector } from 'src/store';
import { applyFilter, mapProductsResponse } from './utils';

export default function AddProductItemModal() {
  const [filterName, setFilterName] = useState('');
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { isModalOpen } = useSelector((state) => state.addProductItem);

  const { data: offerIds } = useQuery('templates', getProductList, {
    enabled: isModalOpen,
    select: (data) => data.map((item) => item.offer_id),
  });

  const { data: products = [], isSuccess } = useQuery({
    queryFn: () => getProductListInfo(offerIds),
    queryKey: ['info', offerIds],
    select: mapProductsResponse,
    enabled: !!offerIds,
  });

  const onClose = () => {
    setFilterName('');
    dispatch(closeModal());
  };

  const table = useTable();

  const dataFiltered = applyFilter({
    inputData: products,
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Modal
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      open={isModalOpen}
      disableAutoFocus
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            borderBottom: `1px solid ${theme.vars.palette.grey['300']}`,
            borderRadius: '16px 16px 0px 0px',
            background: 'white',
          }}
        >
          <Typography sx={{ padding: '24px 24px 0px 24px' }} variant="h4">
            Список продаваемых товаров
          </Typography>

          <Typography variant="body1" sx={{ padding: '12px 24px 12px 24px' }}>
            Вы можете загрузить в базу данных фулфилмента шаблон из списка готовых товаров на
            маркетплейсе. Выберите необходимые товары и нажмите &quot;Сформировать шаблон&quot;.
          </Typography>
        </Box>

        <AppBar
          sx={{
            borderBottom: `1px solid ${theme.vars.palette.grey['300']}`,
            padding: '0px 24px 0px 24px',
            borderRadius: '0px',
          }}
          position="static"
          color="inherit"
        >
          <Box display="flex" alignItems="center">
            <Tabs
              TabIndicatorProps={{ style: { background: theme.vars.palette.grey['900'] } }}
              aria-label="basic tabs example"
              indicatorColor="secondary"
              onChange={handleChange}
              textColor="inherit"
              value={value}
            >
              <Tab label="Ozon" sx={{ fontSize: '18px', color: '#005BFF', paddingTop: '24px' }} />
              <Tab
                sx={{ fontSize: '18px', color: '#7D256F', paddingTop: '24px' }}
                label="Wildberries"
              />
            </Tabs>
          </Box>
        </AppBar>

        <Card sx={{ borderRadius: '0px 0px 16px 16px', minHeight: '40vh' }}>
          {isSuccess && (
            <TableToolbarHeader
              numSelected={table.selected.length}
              placeholder="Искать по названию"
              onReset={() =>
                table.onSelectAllRows(
                  false,
                  dataFiltered.map((p) => p.id)
                )
              }
              filterName={filterName}
              onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFilterName(event.target.value);
                table.onResetPage();
              }}
            />
          )}

          {isSuccess && (
            <TableContainer sx={{ position: 'relative', maxHeight: '55vh' }}>
              <Table sx={{ minWidth: 1200 }}>
                <CheckboxTableHead
                  order={table.order}
                  orderBy={table.orderBy}
                  rowCount={dataFiltered.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      dataFiltered.map((p) => p.id)
                    )
                  }
                  headLabel={[
                    { id: 'name', label: 'Название', width: '600px' },
                    { id: 'price', label: 'Цена' },
                    { id: 'articul', label: 'Артикул' },
                    { id: 'barcode', label: 'Штрихкод' },
                    { id: 'visible', label: 'Видимость', align: 'center' },
                    { id: 'created', label: 'Создан' },
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
                        key={nanoid()}
                        cells={row.cells}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
                    height={68}
                  />

                  {notFound && <TableNoData searchQuery={filterName} />}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {!isSuccess && (
            <Box justifyContent="center" alignItems="center" height="400px" display="flex">
              <LinearProgress
                sx={{
                  width: 1,
                  maxWidth: 320,
                  minWidth: 320,
                  bgcolor: varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
                  [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
                }}
              />
            </Box>
          )}

          <TablePagination
            component="div"
            page={table.page}
            count={dataFiltered.length}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            lang="ru"
          />

          <Box sx={{ padding: '24px' }} mt="auto" display="flex" justifyContent="flex-end" gap={2}>
            <Button size="large" variant="outlined" color="inherit" onClick={onClose}>
              Закрыть
            </Button>
          </Box>
        </Card>
      </Container>
    </Modal>
  );
}
