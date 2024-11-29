import { Card, Grid2, Typography } from '@mui/material';
import { ProductCard } from 'src/components/product-card';

export const Step2 = () => {
  console.log(1);

  return (
    <>
      <Card sx={{ padding: '24px', marginTop: '24px' }}>
        <Typography variant="h4">Здесь вы можете обработать товар</Typography>
        <Typography variant="body1">Если это не требуется - пропустите шаг</Typography>
      </Card>

      <Grid2 container mt={3} spacing={2}>
        <Grid2 size={{ xl: 6, lg: 6, sm: 12, md: 12, xs: 12 }}>
          <ProductCard isEditable />
        </Grid2>

        <Grid2 size={{ xl: 6, lg: 6, sm: 12, md: 12, xs: 12 }}>
          <ProductCard isEditable />
        </Grid2>
      </Grid2>
    </>
  );
};
