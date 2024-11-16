import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';
import { _timeline } from 'src/_mock';

import { Label } from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';
import { AnalyticsOrderTimeline } from '../overview/analytics-order-timeline';

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

export function NewRequest({ product }: { product: ProductItemProps }) {
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

        <Box flex={4}>
          <AnalyticsOrderTimeline title="Отгрузка Коледино #124" list={_timeline} />
        </Box>
      </Box>
    </Card>
  );
}
