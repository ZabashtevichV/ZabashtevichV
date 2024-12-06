import { useTheme } from '@mui/material/styles';
import { Box, Card, Link, Grid2, Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

export const RequestView = () => {
  const theme = useTheme();

  return (
    <DashboardContent>
      <Card sx={{ padding: '24px' }}>
        <Typography variant="h3" mb={1.5}>
          Создание заявок
        </Typography>

        <Typography variant="subtitle1">Выберите необходимый тип заявки</Typography>

        <Grid2 mt={2.5} container spacing={4}>
          <Grid2 size={{ lg: 6, sm: 12, xs: 12, md: 6 }}>
            <Box
              sx={{
                border: `1px solid ${theme.vars.palette.grey[300]}`,
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                gap: '20px',
              }}
            >
              <img src="/assets/icons/car.svg" alt="" width={40} height={40} />

              <Box>
                <Typography variant="h5" mb={1}>
                  Заявка на поставку
                </Typography>

                <Typography color="textSecondary" mb={2}>
                  Заявка на поставку с предварительным расчетом услуг. После согласования ожидается
                  доставка на наш склад и приём товара.
                </Typography>

                <Link
                  component={RouterLink}
                  href="new"
                  sx={{
                    width: 'max-content',
                    alignItems: 'center',
                    borderRadius: '12px',
                    padding: '4px 12px',
                    display: 'flex',
                    gap: '6px',
                    border: 1,
                    '&:hover': {
                      backgroundColor: theme.vars.palette.primary.main,
                      textDecoration: 'none',
                      color: 'white',
                    },
                  }}
                >
                  <Iconify icon="mingcute:add-line" />
                  Создать
                </Link>
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ lg: 6, sm: 12, xs: 12, md: 6 }}>
            <Box
              sx={{
                border: `1px solid ${theme.vars.palette.grey[300]}`,
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                height: '100%',
                gap: '20px',
              }}
            >
              <img src="/assets/icons/car.svg" alt="" width={40} height={40} />

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" mb={1}>
                  Заявка на отгрузку
                </Typography>

                <Typography color="textSecondary" mb={2}>
                  После согласования заявки ожидается отгрузка на маркетплейсы товаров с нашего
                  склада.
                </Typography>

                <Link
                  component={RouterLink}
                  href="sending"
                  sx={{
                    width: 'max-content',
                    alignItems: 'center',
                    borderRadius: '12px',
                    padding: '4px 12px',
                    marginTop: 'auto',
                    display: 'flex',
                    gap: '6px',
                    border: 1,
                    '&:hover': {
                      backgroundColor: theme.vars.palette.primary.main,
                      textDecoration: 'none',
                      color: 'white',
                    },
                  }}
                >
                  <Iconify icon="mingcute:add-line" />
                  Создать
                </Link>
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ lg: 6, sm: 12, xs: 12, md: 6 }}>
            <Box
              sx={{
                border: `1px solid ${theme.vars.palette.grey[300]}`,
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                gap: '20px',
              }}
            >
              <img src="/assets/icons/slave.svg" alt="" width={40} height={40} />

              <Box>
                <Typography variant="h5" mb={1}>
                  Заявка на работу с товаром
                </Typography>

                <Typography color="textSecondary" mb={2}>
                  Укажите перечень необходимых задач, которые нужно сделать с товаром: упаковка,
                  фотосъемка, видеосъемка, проверка на брак и другие.
                </Typography>

                <Link
                  component={RouterLink}
                  href="pack"
                  sx={{
                    width: 'max-content',
                    alignItems: 'center',
                    borderRadius: '12px',
                    padding: '4px 12px',
                    display: 'flex',
                    gap: '6px',
                    border: 1,
                    '&:hover': {
                      backgroundColor: theme.vars.palette.primary.main,
                      textDecoration: 'none',
                      color: 'white',
                    },
                  }}
                >
                  <Iconify icon="mingcute:add-line" />
                  Создать
                </Link>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Card>
    </DashboardContent>
  );
};
