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
import { useDispatch } from 'react-redux';
import { Iconify } from 'src/components/iconify';
import { DashboardContent } from 'src/layouts/dashboard';
import { openModal } from 'src/store/modal/add-product-item';
import { openModal as openHandModal } from 'src/store/modal/create-product-item';

export const TemplatesView = () => {
  const dispatch = useDispatch();

  const onLoadClick = () => {
    dispatch(openModal());
  };

  const onHandClick = () => {
    dispatch(openHandModal());
  };

  const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      <Card>
        <Box
          sx={{
            padding: '24px 24px 12px 24px',
            '@media (max-width: 700px)': {
              flexDirection: 'column',
            },
          }}
          display="flex"
          gap={2}
        >
          <Typography variant="h4">Список шаблонов</Typography>
          <Button
            startIcon={<Iconify icon="mingcute:add-line" />}
            variant="contained"
            onClick={onLoadClick}
            color="inherit"
          >
            Загрузить с МП
          </Button>

          <Button
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={onHandClick}
            variant="contained"
            color="inherit"
          >
            Добавить в ручную
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
                <TableCell>Штрихкод</TableCell>
                <TableCell>Артикулы</TableCell>

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
                <TableCell>234234</TableCell>

                <TableCell>stylerBag</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardContent>
  );
};
