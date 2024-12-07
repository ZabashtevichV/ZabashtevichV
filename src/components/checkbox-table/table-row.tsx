import { useState, useCallback, Fragment } from 'react';
import { nanoid } from 'nanoid';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';

import { Iconify } from 'src/components/iconify';
import dayjs from 'dayjs';
import { useTheme } from '@mui/material';

// ----------------------------------------------------------------------

export type CheckboxTableRowType = {
  type: 'image' | 'cell' | 'icon' | 'date';
  value: string | boolean;
  url?: string;
};

type CheckboxTableRowProps = {
  isButtonCellVisible?: boolean;
  cells: CheckboxTableRowType[];
  onSelectRow: () => void;
  selected: boolean;
};

export function CheckboxTableRow({
  isButtonCellVisible = false,
  onSelectRow,
  selected,
  cells,
}: CheckboxTableRowProps) {
  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);
  const theme = useTheme();

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  return (
    <>
      <TableRow
        hover
        tabIndex={-1}
        role="checkbox"
        selected={selected}
        sx={{ borderBottom: `1px solid ${theme.vars.palette.grey['300']}` }}
      >
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={onSelectRow} />
        </TableCell>

        {cells.map((cell) => (
          <Fragment key={nanoid()}>
            {cell.type === 'image' && (
              <TableCell component="th" scope="row">
                <Box gap={2} display="flex" alignItems="center">
                  <Avatar alt={cell.value as string} src={cell.url} />
                  {cell.value}
                </Box>
              </TableCell>
            )}

            {cell.type === 'cell' && <TableCell>{cell.value}</TableCell>}
            {cell.type === 'icon' && (
              <TableCell align="center">
                {cell.value ? (
                  <Iconify
                    width={22}
                    icon="solar:check-circle-bold"
                    sx={{ color: 'success.main' }}
                  />
                ) : (
                  '-'
                )}
              </TableCell>
            )}
            {cell.type === 'date' && (
              <TableCell>
                {dayjs(cell.value as unknown as Date)
                  .format('YYYY MM DD')
                  .toString()}
              </TableCell>
            )}
          </Fragment>
        ))}

        {isButtonCellVisible && (
          <TableCell align="right">
            <IconButton onClick={handleOpenPopover}>
              <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
          </TableCell>
        )}
      </TableRow>

      {isButtonCellVisible && (
        <Popover
          open={!!openPopover}
          anchorEl={openPopover}
          onClose={handleClosePopover}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuList
            disablePadding
            sx={{
              p: 0.5,
              gap: 0.5,
              width: 140,
              display: 'flex',
              flexDirection: 'column',
              [`& .${menuItemClasses.root}`]: {
                px: 1,
                gap: 2,
                borderRadius: 0.75,
                [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
              },
            }}
          >
            <MenuItem onClick={handleClosePopover}>
              <Iconify icon="solar:pen-bold" />
              Edit
            </MenuItem>

            <MenuItem onClick={handleClosePopover} sx={{ color: 'error.main' }}>
              <Iconify icon="solar:trash-bin-trash-bold" />
              Delete
            </MenuItem>
          </MenuList>
        </Popover>
      )}
    </>
  );
}
