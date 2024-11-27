import { Button, Grid2 } from '@mui/material';
import { Iconify } from 'src/components/iconify';
import { ProductCard } from 'src/components/product-card';

export const Step1 = () => (
  <>
    <Button
      startIcon={<Iconify icon="mingcute:add-line" />}
      sx={{ width: 'max-content', marginTop: '24px' }}
      variant="contained"
      color="inherit"
      size="large"
    >
      Добавить товар
    </Button>

    <Grid2 container mt={3} spacing={2}>
      <Grid2 size={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }}>
        <ProductCard />
      </Grid2>

      <Grid2 size={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }}>
        <ProductCard />
      </Grid2>
    </Grid2>
  </>
);
