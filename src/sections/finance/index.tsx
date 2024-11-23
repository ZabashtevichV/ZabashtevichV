import { Card, Grid2, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { DashboardContent } from 'src/layouts/dashboard';

const pData = [0, 190, 20, 300, 100, 200, 500, 150];
const xLabels = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг'];
const yLabels = [35, 45, 60, 75, 90, 105, 120];

export const FinanceView = () => (
  <DashboardContent>
    <Grid2 container spacing={3}>
      <Grid2 size={{ lg: 6, md: 6, xs: 12, sm: 12 }}>
        <Card sx={{ padding: '24px' }}>
          <Typography variant="h3">Оборот</Typography>

          <LineChart
            sx={{ width: '100%' }}
            series={[
              {
                type: 'line',
                data: pData,
                area: true,
                showMark: false,
                stack: 'pv',
              },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            yAxis={[{ scaleType: 'linear', data: yLabels }]}
            height={300}
          />
        </Card>
      </Grid2>

      <Grid2 size={{ lg: 6, md: 6, xs: 12, sm: 12 }}>123</Grid2>
    </Grid2>
  </DashboardContent>
);
