import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

export type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  status: string;
  coverUrl: string;
  colors: string[];
  priceSale: number | null;
};

export function FinishedZabor({ product }: { product: ProductItemProps }) {
  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === 'ЗАВЕРШЕНА' && 'success') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
        borderRadius: 0,
        height: '32px',
        padding: '0 12px',
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.coverUrl}
      sx={{
        top: 0,
        width: '100%',
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  return (
    <Card
      sx={{
        cursor: 'pointer',
        borderRadius: 0,
        '&:hover': {
          outline: '2px solid blue',
        },
      }}
    >
      <Box display="flex">
        <Box sx={{ position: 'relative' }} flex={3}>
          {product.status && renderStatus}

          {renderImg}
        </Box>

        <Box flex={4}>123</Box>
      </Box>
    </Card>
  );
}
