import {
  Box,
  Button,
  Card,
  IconButton,
  MenuItem,
  menuItemClasses,
  MenuList,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getProductList, getProductListInfo } from 'src/api';
import { Iconify } from 'src/components/iconify';
import { DashboardContent } from 'src/layouts/dashboard';
import { openModal } from 'src/store/modal/create-product-item';

export const TemplatesView = () => {
  const { data } = useQuery('templates', getProductList);
  const offerIds = data?.map(({ offer_id }) => offer_id);

  const { data: data2 } = useQuery({
    queryFn: () => getProductListInfo(offerIds),
    queryKey: ['info', offerIds],
    enabled: !!data,
  });

  console.log(data2);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(openModal());
  };

  const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      <Card>
        <Box sx={{ padding: '24px 24px 12px 24px' }} display="flex" gap={2}>
          <Typography variant="h4">Список шаблонов</Typography>
          <Button
            startIcon={<Iconify icon="mingcute:add-line" />}
            variant="contained"
            onClick={onClick}
            color="inherit"
          >
            Добавить шаблон
          </Button>
        </Box>

        <Typography sx={{ padding: '0px 24px 12px 24px' }} mb={2} display="block" variant="caption">
          Шаблон используется для всех товаров поступаемых на склад, карточка товара - для тех,
          которые отгружаются на МП
        </Typography>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Изображение</TableCell>
                <TableCell>Название</TableCell>
                <TableCell>Тип</TableCell>
                <TableCell>Состав</TableCell>
                <TableCell>Цвет</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell size="small">
                  <Box
                    component="button"
                    position="relative"
                    borderRadius="50%"
                    display="block"
                    height={42}
                    width={42}
                    sx={{
                      border: '3px solid transparent',
                      '&:hover': {
                        border: `3px solid ${theme.vars.palette.primary.main}`,
                      },
                      cursor: 'pointer',
                    }}
                  >
                    <Box
                      component="img"
                      alt="preview"
                      src="/assets/images/cover/cover-1.webp"
                      sx={{
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: '50%',
                        width: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        borderRadius: '24px',
                        height: '100%',
                      }}
                    />
                  </Box>
                </TableCell>

                <TableCell>Фен</TableCell>
                <TableCell>Товар</TableCell>
                <TableCell>Фен в коробке</TableCell>
                <TableCell>Красный</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardContent>
  );
};
