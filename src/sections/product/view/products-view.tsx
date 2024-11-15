import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export function ProductsView() {
  return (
    <DashboardContent>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Отгрузки
      </Typography>

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
    </DashboardContent>
  );
}
