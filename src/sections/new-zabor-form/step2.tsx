import { Card, Grid2, Typography } from '@mui/material';

import { ProductTable } from 'src/components/product-table';

export const Step2 = () => {
  console.log(1);

  return (
    <>
      <Card sx={{ padding: '24px', marginTop: '24px' }}>
        <Typography variant="h4">Состав приемки</Typography>
      </Card>

      <Grid2 container mt={3} spacing={2}>
        <Grid2 size={{ xl: 12, lg: 12, sm: 12, md: 12, xs: 12 }}>
          <ProductTable isPreview />
        </Grid2>
      </Grid2>
    </>
  );
};
