import {
  Box,
  Card,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';
import { Scrollbar } from 'src/components/scrollbar';
import { DashboardContent } from 'src/layouts/dashboard';
import { RouterLink } from 'src/routes/components';

export const TasksView = () => {
  const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h3">Список задач</Typography>

      <Typography variant="h5" mt={4}>
        Новые задачи
      </Typography>

      <Grid2 container mt={2}>
        <Grid2 size={{ xl: 4, lg: 5, md: 6, sm: 6, xs: 6 }}>
          <Card
            sx={{
              justifyContent: 'space-between',
              padding: '12px 24px',
              display: 'flex',
              gap: 2,
              textDecoration: 'none',
              '&:hover': {
                outline: `2px solid ${theme.vars.palette.warning.main}`,
              },
              '@media (max-width: 700px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
            component={RouterLink}
            href="cargo-take"
          >
            <Iconify
              color={theme.vars.palette.warning.main}
              icon="mdi:truck"
              height={120}
              width={120}
            />

            <Box display="flex" flexDirection="column" gap={0.5}>
              <Typography variant="h4" align="center" whiteSpace="nowrap">
                Забор с КАРГО
              </Typography>

              <Label color="warning" variant="filled">
                НОВАЯ
              </Label>

              <Typography
                variant="body2"
                align="center"
                mt="auto"
                fontWeight={700}
                sx={{
                  '@media (max-width: 700px)': {
                    marginTop: '24px',
                  },
                }}
              >
                23 ноября 18:56
              </Typography>
            </Box>
          </Card>
        </Grid2>
      </Grid2>

      <Typography variant="h5" mt={4}>
        Активные задачи
      </Typography>

      <Grid2 container mt={2}>
        <Grid2 size={{ xl: 4, lg: 5, md: 6, sm: 6, xs: 6 }}>
          <Card
            sx={{
              justifyContent: 'space-between',
              padding: '12px 24px',
              display: 'flex',
              gap: 2,
              textDecoration: 'none',
              '&:hover': {
                outline: `2px solid ${theme.vars.palette.primary.main}`,
              },
              '@media (max-width: 700px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
            component={RouterLink}
            href="cargo-take"
          >
            <Iconify
              color={theme.vars.palette.primary.main}
              icon="mdi:truck"
              height={120}
              width={120}
            />

            <Box display="flex" flexDirection="column" gap={0.5}>
              <Typography variant="h4" align="center" whiteSpace="nowrap">
                Забор с КАРГО
              </Typography>

              <Label color="primary" variant="filled">
                В РАБОТЕ
              </Label>

              <Typography
                variant="body2"
                align="center"
                mt="auto"
                fontWeight={700}
                sx={{
                  '@media (max-width: 700px)': {
                    marginTop: '24px',
                  },
                }}
              >
                23 ноября 18:56
              </Typography>
            </Box>
          </Card>
        </Grid2>
      </Grid2>

      <Typography variant="h5" mt={6} mb={2}>
        Завершенные задачи
      </Typography>

      <Card sx={{ padding: '24px' }}>
        <Grid2 container>
          <Grid2 size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
            <Scrollbar>
              <TableContainer sx={{ overflow: 'unset', minWidth: 1000 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Тип задачи</TableCell>
                      <TableCell>Автор</TableCell>
                      <TableCell>Заказчик</TableCell>
                      <TableCell>Дата</TableCell>
                      <TableCell>Время</TableCell>
                      <TableCell>Дата завершения</TableCell>
                      <TableCell>Время завершения</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell>Забор с КАРГО</TableCell>
                      <TableCell>Какой-то мудак</TableCell>
                      <TableCell>Селлер</TableCell>
                      <TableCell>24 ноября</TableCell>
                      <TableCell>16:54</TableCell>
                      <TableCell>24 ноября</TableCell>
                      <TableCell>17:54</TableCell>
                      <TableCell>
                        <Typography
                          color={theme.vars.palette.primary.main}
                          component={RouterLink}
                          href="/cargo-take"
                          fontWeight={700}
                          variant="h6"
                        >
                          ССЫЛКА
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          </Grid2>
        </Grid2>
      </Card>
    </DashboardContent>
  );
};
