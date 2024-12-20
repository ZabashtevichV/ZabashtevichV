import { Box, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { CostsTalbe } from './auxillary/costs-table';
import { CollapsibleTable } from './auxillary/remains-table';

export const RemainsView = () => {
  console.log('hi');

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h4" flexGrow={1}>
          Ваши складские остатки
        </Typography>
      </Box>

      <CollapsibleTable />

      <Box display="flex" alignItems="center" mb={2} mt={10}>
        <Typography variant="h4" flexGrow={1}>
          Ваши остатки расходников
        </Typography>
      </Box>

      <CostsTalbe />
    </DashboardContent>
  );
};
