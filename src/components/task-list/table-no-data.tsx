import type { TableRowProps } from '@mui/material/TableRow';

import { useState } from 'react';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import { AddProductModal } from 'src/sections/new-zabor-form/AddProductModal';

import { Iconify } from '../iconify';

// ----------------------------------------------------------------------

type TableNoDataProps = TableRowProps;

export function TaskTableNoData({ ...other }: TableNoDataProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClick = () => setIsModalVisible(true);

  return (
    <TableRow {...other}>
      <TableCell align="center" colSpan={7}>
        <Box sx={{ py: 3, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Вы не добавили товар
          </Typography>

          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={onClick}
          >
            Добавить товар к задаче
          </Button>
        </Box>
      </TableCell>

      {isModalVisible && <AddProductModal />}
    </TableRow>
  );
}
