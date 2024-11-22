import { Box, Card, Grid2, Typography, useTheme } from '@mui/material';

import { _timeline } from 'src/_mock';
import { Label } from 'src/components/label';
import ChatComponent from 'src/components/chat';

import { DashboardContent } from 'src/layouts/dashboard';
import { RequestProductsTable } from './table';

import { GallerySection } from './gallery-section';
import { AdditionalTable } from './additional-table';
import { AnalyticsOrderTimeline } from '../overview/analytics-order-timeline';

export const RequestItemView = () => {
  const theme = useTheme();

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h3" flexGrow={1}>
          Описание заявки
        </Typography>
      </Box>

      <Grid2 container spacing={1.5}>
        <Grid2 size={{ lg: 5, md: 12 }}>
          <GallerySection />
        </Grid2>

        <Grid2 size={{ lg: 7, md: 12, xs: 12, sm: 12 }}>
          <Card sx={{ padding: '24px', height: '100%' }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h3">Заявка №1</Typography>

              <Label
                variant="filled"
                color="warning"
                sx={{
                  textTransform: 'uppercase',
                  borderRadius: 0,
                  height: '32px',
                  padding: '0 12px',
                }}
              >
                СОГЛАСОВАНИЕ
              </Label>
            </Box>

            <Box>
              <Typography variant="h5" textAlign="right" mt={2.5} mb={2.5} fontStyle="oblique">
                Грузоместа
              </Typography>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Грузоместо 1</Typography>

                <Typography>Малый пакет</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Грузоместо 2</Typography>

                <Typography>Китайский паллет</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Грузоместо 3</Typography>

                <Typography>Баул</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Грузоместо 4</Typography>

                <Typography>Баул</Typography>
              </Box>
            </Box>

            <Box mt={3.5}>
              <Typography variant="h5" textAlign="right" mt={2.5} mb={2.5} fontStyle="oblique">
                Описание
              </Typography>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Привезёт</Typography>

                <Typography>Фулфилмент</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Вес</Typography>

                <Typography>814кг</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Телефон</Typography>

                <Typography>8-800-555-35-35</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Адрес</Typography>

                <Typography>Южные ворота</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Дополнительная услуга 1</Typography>

                <Typography>Грузчик</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Дополнительная услуга 2</Typography>

                <Typography>Въезд на территорию</Typography>
              </Box>
            </Box>
          </Card>
        </Grid2>
      </Grid2>

      <Grid2 container mt={2.5}>
        <Grid2 size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <Card sx={{ padding: '24px', width: '100%' }}>
            <Typography variant="h3" textAlign="center" mb={2.5}>
              Товары в составе заявки
            </Typography>

            <RequestProductsTable />
          </Card>
        </Grid2>

        <Grid2 size={{ lg: 12, md: 12, sm: 12, xs: 12 }} mt={2.5}>
          <Card sx={{ padding: '24px' }}>
            <Typography variant="h3" textAlign="center" mb={2.5}>
              Дополнительные действия
            </Typography>

            <AdditionalTable />
          </Card>
        </Grid2>
      </Grid2>

      <Grid2 container mt={2.5} spacing={1.5}>
        <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <AnalyticsOrderTimeline title="" list={_timeline} />
        </Grid2>

        <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Card sx={{ padding: '24px' }}>
            <Box>
              <Typography variant="h3" mb={2.5}>
                Расчёт
              </Typography>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Приёмка товара</Typography>

                <Typography fontStyle="oblique">Ожидает согласования</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Демонтаж деревянного паллета</Typography>

                <Typography fontStyle="oblique">Ожидает согласования</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Маркировка товара</Typography>

                <Typography fontStyle="oblique">Ожидает согласования</Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
                  padding: '4px',
                }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>Утилизация мусора</Typography>

                <Typography fontStyle="oblique">Ожидает согласования</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3" mt={4.5} mb={2.5}>
                  Итого
                </Typography>

                <Typography variant="h2" mt={4.5} mb={2.5} fontWeight={400}>
                  50Р
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid2>

        <Grid2 size={{ lg: 12, md: 12, sm: 12, xs: 12 }} mt={1.5}>
          <ChatComponent />
        </Grid2>
      </Grid2>
    </DashboardContent>
  );
};
