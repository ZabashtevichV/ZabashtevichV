import { Grid2 } from '@mui/material';

import { BoxTable } from 'src/components/box-table';
import { ProductTable } from 'src/components/product-table';

export const Step2 = () => {
  console.log(1);

  return (
    <Grid2 container mt={3} spacing={2}>
      <Grid2 size={{ xl: 12, lg: 12, sm: 12, md: 12, xs: 12 }}>
        <ProductTable isPreview isButtonVisible={false} />
      </Grid2>

      <Grid2 size={{ xl: 12, lg: 12, sm: 12, md: 12, xs: 12 }}>
        <BoxTable />
      </Grid2>
    </Grid2>
  );
};
