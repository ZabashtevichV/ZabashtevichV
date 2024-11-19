import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { Box, Grid2, Button, Link } from '@mui/material';

import { _products } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { NewRequest } from './new-request';
import { FinishedRequest } from './finished-request';

export function RequestView() {
  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h3" flexGrow={1}>
          Приемки
        </Typography>

        <Link sx={{ borderRadius: 0 }} href="/new" component={RouterLink}>
          <Iconify icon="mingcute:add-line" />
          Новая приемка
        </Link>
      </Box>

      <Typography variant="h4" sx={{ mb: 2 }}>
        Новые заявки
      </Typography>

      <Grid2 container spacing={3} width="100%">
        {_products.map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 12, md: 12 }}>
            <NewRequest product={product} />
          </Grid2>
        ))}
      </Grid2>

      <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
        Завершенные заявки
      </Typography>

      <Grid2 container spacing={3} width="100%">
        {_products.map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 12, md: 12 }}>
            <FinishedRequest product={product} />
          </Grid2>
        ))}
      </Grid2>

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
    </DashboardContent>
  );
}
