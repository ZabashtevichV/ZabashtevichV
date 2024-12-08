import { Box, Card, Grid2, useTheme, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Label } from 'src/components/label';
import ChatComponent from 'src/components/chat';
import { ProductTable } from 'src/components/product-table';
import { TaskTable } from 'src/components/task-table';

import { GallerySection } from './gallery-section';
import { AnalyticsOrderTimeline } from '../overview/analytics-order-timeline';

export const ZaborItemView = () => {
  const theme = useTheme();

  return (
    <DashboardContent>
      <Card sx={{ padding: '24px', mb: 5 }}>
        <Typography variant="h3" flexGrow={1}>
          Оформление заявки
        </Typography>
      </Card>

      <Grid2 container spacing={1.5} mb={3}>
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

            <Box>
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

      <Grid2 container spacing={2}>
        <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
          <AnalyticsOrderTimeline title="" list={_timeline} />
        </Grid2>

        <Grid2 size={{ lg: 8, md: 8, sm: 12, xs: 12 }}>
          <Card sx={{ padding: '24px' }}>
            <Box>
              <Typography variant="h3" mb={3}>
                Итоговый расчёт
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

        <Grid2 size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <ProductTable isButtonVisible={false} title="Состав заявки" isDetailsVisible isPreview />
        </Grid2>

        <Grid2 size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <TaskTable />
        </Grid2>

        <Grid2 size={{ lg: 12, md: 12, sm: 12, xs: 12 }} mt={1.5}>
          <ChatComponent />
        </Grid2>
      </Grid2>
    </DashboardContent>
  );
};
