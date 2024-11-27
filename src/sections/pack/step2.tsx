import { Grid2 } from '@mui/material';
import { ProductCard } from 'src/components/product-card';

export const Step2 = () => (
  <Grid2 container spacing={2} mt={3}>
    <Grid2 size={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }}>
      <ProductCard isEditable />
    </Grid2>

    <Grid2 size={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }}>
      <ProductCard isEditable />
    </Grid2>
  </Grid2>
);
