import { Box, Collapse, TableCell, TableRow } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const RowCollapseWrapper: FC<PropsWithChildren<{ open: boolean }>> = ({
  children,
  open,
}) => (
  <TableRow>
    <TableCell colSpan={10} padding="none">
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box>{children}</Box>
      </Collapse>
    </TableCell>
  </TableRow>
);
