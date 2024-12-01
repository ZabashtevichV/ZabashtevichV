import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Card,
  Grid2,
  Button,
  Select,
  Checkbox,
  MenuItem,
  useTheme,
  FormLabel,
  TextField,
  IconButton,
  InputLabel,
  Typography,
  FormControl,
} from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

export const CalculatorView = () => {
  const theme = useTheme();

  return (
    <DashboardContent maxWidth={false} sx={{ overflow: 'unset' }}>
      <Scrollbar sx={{ flexGrow: 0, paddingBottom: '32px' }}>
        <Grid2 container spacing={2} minWidth={1000}>
          <Grid2 size={{ xl: 8, lg: 8, md: 8, sm: 8, xs: 8 }}>
            <Typography variant="h3">Калькулятор</Typography>

            <Card sx={{ padding: '12px 24px', marginTop: '12px', borderRadius: '12px' }}>
              <Typography variant="h5" mb={2}>
                Приемка грузомест
              </Typography>

              <Grid2 container spacing={2}>
                <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 3, xs: 3 }}>
                  <FormControl size="small" fullWidth>
                    <InputLabel sx={{ bgcolor: 'white' }} size="small">
                      Кто привезёт
                    </InputLabel>

                    <Select size="small">
                      <MenuItem>Селлер</MenuItem>
                      <MenuItem>Фулфилмент</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>

                <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 3, xs: 3 }}>
                  <FormControl size="small" fullWidth>
                    <InputLabel sx={{ bgcolor: 'white' }} size="small">
                      Объём и вес грузомест
                    </InputLabel>

                    <Select size="small">
                      <MenuItem>
                        до 1 м<sup>3</sup>
                      </MenuItem>
                      <MenuItem>
                        до 3 м<sup>3</sup>
                      </MenuItem>

                      <MenuItem>
                        до 5 м<sup>3</sup>
                      </MenuItem>

                      <MenuItem>
                        От 5 м<sup>3</sup> до 20 м<sup>3</sup>, до 3 тонн, до 3х китайских паллет
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>

                <Grid2 size={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}>
                  <FormLabel>
                    Услуги грузчика
                    <Checkbox title="" />
                  </FormLabel>
                </Grid2>

                <Grid2
                  size={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                  justifyContent="flex-end"
                  alignItems="center"
                  display="flex"
                >
                  <IconButton title="Детальные цены" size="small" color="primary">
                    <Iconify icon="material-symbols:info" height={24} width={24} />
                  </IconButton>
                </Grid2>
              </Grid2>
            </Card>

            <Card sx={{ padding: '12px 24px', marginTop: '12px', borderRadius: '12px' }}>
              <Typography variant="h5" mb={2}>
                Приемка товара
              </Typography>

              <Box display="flex" gap={2} alignItems="center">
                <TextField label="Количество товара" size="small" fullWidth />

                <IconButton title="Детальные цены" size="small" color="primary">
                  <Iconify icon="material-symbols:info" height={24} width={24} />
                </IconButton>
              </Box>
            </Card>

            <Card sx={{ padding: '12px 24px', marginTop: '12px', borderRadius: '12px' }}>
              <Typography variant="h5" mb={2}>
                Обработка товара
              </Typography>

              <Box display="flex" gap={2} alignItems="center">
                <TextField label="Количество для упаковки" size="small" fullWidth />

                <FormControl size="small" fullWidth>
                  <InputLabel sx={{ bgcolor: 'white' }} size="small">
                    Тип упаковки
                  </InputLabel>

                  <Select size="small">
                    <MenuItem>Материал клиента</MenuItem>
                    <MenuItem>В материал ФФ + цена материала</MenuItem>
                    <MenuItem>упаковка и запайка в ПВД рукав</MenuItem>
                    <MenuItem>Термоусадочный станок</MenuItem>
                    <MenuItem>Белый стретч</MenuItem>
                    <MenuItem>2 слоя воздушно-пузырчатая плёнка + скотчевание</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Card>

            <Card sx={{ padding: '12px 24px', marginTop: '12px', borderRadius: '12px' }}>
              <Typography variant="h5" mb={2}>
                Проверка на брак
              </Typography>

              <Box display="flex" gap={2} alignItems="center">
                <FormControl size="small" fullWidth>
                  <InputLabel sx={{ bgcolor: 'white' }} size="small">
                    Тип проверки
                  </InputLabel>

                  <Select size="small">
                    <MenuItem>Проверка на любой вид брака с устранением</MenuItem>
                    <MenuItem>Проверка электроники на работоспособность</MenuItem>
                    <MenuItem>Проверка комплектов на точное содержание комплектующих</MenuItem>
                    <MenuItem>Удаление ниток</MenuItem>
                    <MenuItem>Прорезание отверстий под пуговицы</MenuItem>
                    <MenuItem>Осмотр на сколы и вкрапления стеклынных предметов</MenuItem>
                    <MenuItem>Различные тестирования товара по ТЗ заказчика</MenuItem>
                  </Select>
                </FormControl>

                <Typography variant="body1" whiteSpace="nowrap" fontSize={20}>
                  12р/мин
                </Typography>
              </Box>
            </Card>

            <Card sx={{ padding: '12px 24px', marginTop: '12px', borderRadius: '12px' }}>
              <Typography variant="h5">Честный знак</Typography>

              <Typography variant="caption" mb={2} display="block">
                *Маркировка нашими знаками дешевле чем заказываемые на стороне
              </Typography>

              <Box display="flex" gap={2} alignItems="center">
                <TextField label="Количество товара для маркировки" fullWidth size="small" />

                <IconButton title="Детальные цены" size="small" color="primary">
                  <Iconify icon="material-symbols:info" height={24} width={24} />
                </IconButton>
              </Box>
            </Card>

            <Card sx={{ padding: '12px 24px', marginTop: '12px', borderRadius: '12px' }}>
              <Typography variant="h5" mb={2}>
                Комплектация
              </Typography>

              <Box display="flex" gap={2} alignItems="center">
                <TextField label="Количество комплектов" fullWidth size="small" />

                <FormControl size="small" fullWidth>
                  <InputLabel sx={{ bgcolor: 'white' }} size="small">
                    Тип набора
                  </InputLabel>

                  <Select size="small">
                    <MenuItem>до 2 предметов</MenuItem>
                    <MenuItem>до 3 предметов</MenuItem>
                    <MenuItem>до 6 предметов</MenuItem>
                    <MenuItem>от 10 предметов</MenuItem>
                  </Select>
                </FormControl>

                <IconButton title="Детальные цены" size="small" color="primary">
                  <Iconify icon="material-symbols:info" height={24} width={24} />
                </IconButton>
              </Box>
            </Card>

            <Card sx={{ padding: '12px 24px', marginTop: '12px', borderRadius: '12px' }}>
              <Typography variant="h5" mb={2}>
                Раскомплектация
              </Typography>

              <Box display="flex" gap={2} alignItems="center">
                <TextField label="Количество комплектов" fullWidth size="small" />

                <FormControl size="small" fullWidth>
                  <InputLabel sx={{ bgcolor: 'white' }} size="small">
                    Тип набора
                  </InputLabel>

                  <Select size="small">
                    <MenuItem>до 2 предметов</MenuItem>
                    <MenuItem>до 3 предметов</MenuItem>
                    <MenuItem>до 6 предметов</MenuItem>
                    <MenuItem>от 10 предметов</MenuItem>
                  </Select>
                </FormControl>

                <IconButton title="Детальные цены" size="small" color="primary">
                  <Iconify icon="material-symbols:info" height={24} width={24} />
                </IconButton>
              </Box>
            </Card>

            <Card sx={{ padding: '12px 24px', marginTop: '12px', borderRadius: '12px' }}>
              <Typography variant="h5" mb={2}>
                Материалы
              </Typography>

              <Box display="flex" gap={0.5}>
                <Button
                  title="Добавить материал"
                  sx={{ padding: 0, minWidth: '40px' }}
                  variant="contained"
                  color="inherit"
                  size="small"
                >
                  <Add fontSize="medium" />
                </Button>

                <Button
                  title="Убрать материал"
                  sx={{ padding: 0, minWidth: '40px' }}
                  variant="contained"
                  color="inherit"
                  size="small"
                >
                  <Remove fontSize="medium" />
                </Button>

                <TextField label="Количество" size="small" sx={{ marginLeft: '12px' }} fullWidth />

                <FormControl
                  sx={{ maxWidth: '300px', width: '100%', marginLeft: '12px' }}
                  size="small"
                >
                  <InputLabel sx={{ bgcolor: 'white' }}>Тип материал</InputLabel>
                  <Select variant="outlined">
                    <MenuItem>Бопп пакет</MenuItem>
                    <MenuItem>Зип пакет</MenuItem>
                    <MenuItem>Зип пакет с бегунком</MenuItem>
                    <MenuItem>Курьер пакет непрозрачный белый</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  sx={{ maxWidth: '300px', width: '100%', marginLeft: '12px' }}
                  size="small"
                >
                  <InputLabel sx={{ bgcolor: 'white' }}>Размер</InputLabel>
                  <Select variant="outlined">
                    <MenuItem>10*15</MenuItem>
                    <MenuItem>12*24</MenuItem>
                    <MenuItem>15*21</MenuItem>
                    <MenuItem>17*24</MenuItem>
                    <MenuItem>19*24</MenuItem>
                    <MenuItem>24*32</MenuItem>
                    <MenuItem>30*40</MenuItem>
                  </Select>
                </FormControl>

                <IconButton
                  title="Детальные цены"
                  size="small"
                  color="primary"
                  sx={{ marginLeft: '12px' }}
                >
                  <Iconify icon="material-symbols:info" height={24} width={24} />
                </IconButton>
              </Box>
            </Card>
          </Grid2>

          <Grid2 size={{ xl: 4, lg: 4, md: 4, sm: 4, xs: 4 }} pt="60px">
            <Card sx={{ padding: '12px 24px 48px 24px', borderRadius: '12px' }}>
              <Typography variant="h4" fontWeight={600}>
                Расчёт
              </Typography>

              <Typography variant="h2" fontWeight={400} mt={2}>
                6000₽
              </Typography>

              <Box mt={4} display="flex" flexDirection="column" gap={0.2}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: theme.vars.palette.grey['300'],
                    justifyContent: 'space-between',
                    padding: '4px 8px',
                    display: 'flex',
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Визуальный осмотр на брак
                  </Typography>

                  <Typography variant="body1" fontWeight={600} color="success">
                    БЕСПЛАТНО
                  </Typography>
                </Box>

                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: theme.vars.palette.grey['300'],
                    justifyContent: 'space-between',
                    padding: '4px 8px',
                    display: 'flex',
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Приемка товара
                  </Typography>

                  <Typography variant="body1" fontWeight={600}>
                    12000 ₽
                  </Typography>
                </Box>

                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: theme.vars.palette.grey['300'],
                    justifyContent: 'space-between',
                    padding: '4px 8px',
                    display: 'flex',
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Приемка товара
                  </Typography>

                  <Typography variant="body1" fontWeight={600}>
                    12000 ₽
                  </Typography>
                </Box>

                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: theme.vars.palette.grey['300'],
                    justifyContent: 'space-between',
                    padding: '4px 8px',
                    display: 'flex',
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Приемка товара
                  </Typography>

                  <Typography variant="body1" fontWeight={600}>
                    12000 ₽
                  </Typography>
                </Box>

                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: theme.vars.palette.grey['300'],
                    justifyContent: 'space-between',
                    padding: '4px 8px',
                    display: 'flex',
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Приемка товара
                  </Typography>

                  <Typography variant="body1" fontWeight={600}>
                    12000 ₽
                  </Typography>
                </Box>

                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: theme.vars.palette.grey['300'],
                    justifyContent: 'space-between',
                    padding: '4px 8px',
                    display: 'flex',
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Приемка товара
                  </Typography>

                  <Typography variant="body1" fontWeight={600}>
                    12000 ₽
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid2>
        </Grid2>
      </Scrollbar>
    </DashboardContent>
  );
};
