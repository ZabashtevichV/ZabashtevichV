import { PieChart, LineChart } from '@mui/x-charts';
import {
  Card,
  Grid2,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from '@mui/material';

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

      <Grid2 size={{ lg: 6, md: 6, xs: 12, sm: 12 }}>
        <Card sx={{ padding: '24px', height: '100%' }}>
          <Typography variant="h3" mb={4.5}>
            Ваши траты
          </Typography>

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'Маркировка' },
                  { id: 1, value: 15, label: 'Упаковка' },
                  { id: 2, value: 20, label: 'Иные' },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </Card>
      </Grid2>

      <Card sx={{ padding: '24px', margin: '0 auto', flex: 1 }}>
        <Typography variant="h3" textAlign="left" mb={2.5}>
          Баланс
        </Typography>

        <Typography variant="h2" textAlign="left" mb={4.5} fontWeight={600} color="success">
          236 110 Р
        </Typography>

        <Typography variant="h3" textAlign="center" mb={4.5}>
          Детализация расходов
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Сумма</TableCell>
              <TableCell align="center">Дата</TableCell>
              <TableCell align="right">Остаток на момент транзакции</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Пополнение баланса</Typography>
              </TableCell>
              <TableCell>
                <Typography color="success">4000</Typography>
              </TableCell>
              <TableCell align="center">22.11.2024</TableCell>
              <TableCell align="right">
                <Typography color="error">-3000</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Grid2>
  </DashboardContent>
);
