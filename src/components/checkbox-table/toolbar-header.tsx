import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/iconify';
import { Button } from '@mui/material';

// ----------------------------------------------------------------------

type TableToolbarHeaderProps = {
  onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onReset: () => void;
  numSelected: number;
  filterName: string;
};

export function TableToolbarHeader({
  placeholder = 'Искать пользователя...',
  onFilterName,
  numSelected,
  filterName,
  onReset,
}: TableToolbarHeaderProps) {
  return (
    <Toolbar
      sx={{
        height: 72,
        display: 'flex',
        padding: '0px 24px !important',
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {!!numSelected && (
        <>
          <Typography component="div" variant="subtitle1">
            {numSelected} выбрано
          </Typography>

          <Button
            startIcon={<Iconify icon="mingcute:add-line" />}
            variant="contained"
            color="inherit"
            sx={{ ml: 2 }}
          >
            Сформировать шаблон
          </Button>
        </>
      )}
      {!numSelected && (
        <OutlinedInput
          fullWidth
          value={filterName}
          onChange={onFilterName}
          placeholder={placeholder}
          startAdornment={
            <InputAdornment position="start">
              <Iconify width={20} icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
          sx={{ maxWidth: 320 }}
          size="small"
        />
      )}

      {!!numSelected && (
        <Tooltip title="Очистить список" sx={{ mr: 2, ml: 'auto' }}>
          <IconButton onClick={onReset}>
            <Iconify icon="solar:trash-bin-trash-bold" />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
