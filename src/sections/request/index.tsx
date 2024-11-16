import Grid from '@mui/material/Unstable_Grid2';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import { _products } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { NewRequest } from './new-request';
import { FinishedRequest } from './finished-request';

export function RequestView() {
  return (
    <DashboardContent>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Приемки
      </Typography>

      {/* <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Box gap={1} display="flex" flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            canReset={canReset}
            filters={filters}
            onSetFilters={handleSetFilters}
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            onResetFilter={() => setFilters(defaultFilters)}
            options={{
              genders: GENDER_OPTIONS,
              categories: CATEGORY_OPTIONS,
              ratings: RATING_OPTIONS,
              price: PRICE_OPTIONS,
              colors: COLOR_OPTIONS,
            }}
          />

          <ProductSort
            sortBy={sortBy}
            onSort={handleSort}
            options={[
              { value: 'featured', label: 'Featured' },
              { value: 'newest', label: 'Newest' },
              { value: 'priceDesc', label: 'Price: High-Low' },
              { value: 'priceAsc', label: 'Price: Low-High' },
            ]}
          />
        </Box>
      </Box> */}

      <Typography variant="h4" sx={{ mb: 2 }}>
        Новые заявки
      </Typography>

      <Grid container spacing={3} width="100%">
        {_products.map((product) => (
          <Grid key={product.id} xs={12} sm={12} md={12}>
            <NewRequest product={product} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
        Завершенные заявки
      </Typography>

      <Grid container spacing={3} width="100%">
        {_products.map((product) => (
          <Grid key={product.id} xs={12} sm={12} md={12}>
            <FinishedRequest product={product} />
          </Grid>
        ))}
      </Grid>

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
    </DashboardContent>
  );
}
