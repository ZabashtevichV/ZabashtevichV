import {
  Box,
  Grid2,
  Typography,
} from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { GallerySection } from './gallery-section';

export const RequestItemView = () => (
  <DashboardContent>
    <Box display="flex" alignItems="center" mb={5}>
      <Typography variant="h3" flexGrow={1}>
        Заявка на приемку 1
      </Typography>
    </Box>

    <Grid2 container>
      <Grid2 size={{ lg: 4 }}>
        <GallerySection />
      </Grid2>

      <Grid2 size={{ lg: 8 }}>
        <div>123</div>
      </Grid2>
    </Grid2>
  </DashboardContent>
);
