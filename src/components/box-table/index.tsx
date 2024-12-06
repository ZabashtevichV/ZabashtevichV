import { Box, Card, Button, Typography } from '@mui/material';

import { Iconify } from '../iconify';

export const BoxTable = () => (
  <>
    <Card sx={{ padding: '24px 0px 0px 0px' }}>
      <Box display="flex" alignItems="center" sx={{ padding: '0px 24px 12px 24px' }} gap={2}>
        <Typography variant="h4" whiteSpace="nowrap">
          Список коробов
        </Typography>

        <Button
          startIcon={<Iconify icon="mingcute:add-line" />}
          variant="contained"
          color="inherit"
        >
          Добавить короб
        </Button>
      </Box>

      <Typography sx={{ padding: '0px 24px 24px 24px' }} variant="body1" color="textSecondary">
        Мы фасуем товар в короба 60x40x40см до максимальной вместительности. Вы можете сформировать
        короб с уникальным количеством товара или содержимым.
      </Typography>
    </Card>

    <Card sx={{ padding: '24px', marginTop: '12px' }}>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="h4" whiteSpace="nowrap">
          Короб #1
        </Typography>

        <Button
          startIcon={<Iconify icon="mingcute:add-line" />}
          variant="contained"
          color="inherit"
        >
          Добавить товар
        </Button>
      </Box>
    </Card>
  </>
);
