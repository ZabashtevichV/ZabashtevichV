


import { ProductTable } from 'src/components/product-table';

import { CargoTable } from './cargo-table';

export const Step2 = () => (
  <>
    <div style={{ marginTop: '24px' }} />
    <ProductTable isDetailsVisible isButtonVisible={false} />

    <CargoTable />
  </>
);
