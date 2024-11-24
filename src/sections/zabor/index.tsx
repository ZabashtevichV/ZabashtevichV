import { Box, Link, Grid2, Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { _products } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import { NewZabor } from './new-zabor';
import { FinishedZabor } from './finished-zabor';

export function ZaborView() {
  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h3" flexGrow={1}>
          Приемки
        </Typography>

        <Link
          sx={{ borderRadius: 0, display: 'flex', alignItems: 'center' }}
          href="/zabor"
          component={RouterLink}
        >
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
            <NewZabor product={product} />
          </Grid2>
        ))}
      </Grid2>

      <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
        Завершенные заявки
      </Typography>

      <Grid2 container spacing={3} width="100%">
        {_products.map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 12, md: 12 }}>
            <FinishedZabor product={product} />
          </Grid2>
        ))}
      </Grid2>

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
    </DashboardContent>
  );
}
