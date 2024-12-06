import type { FC } from 'react';

import {
  Box,
  Table,
  Select,
  Collapse,
  MenuItem,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  TextField,
  IconButton,
  InputLabel,
  Typography,
  FormControl,
} from '@mui/material';

import { Iconify } from '../iconify';

export const TaskRow: FC<{ open: boolean }> = ({ open }) => {
  const theme = useTheme();
  return (
    <TableRow>
      <TableCell colSpan={10} padding="none">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell padding="none" width={52}>
                    <IconButton
                      sx={{
                        background: theme.vars.palette.primary.main,
                        margin: '0 auto',
                        borderRadius: 0,
                        width: '52px',
                        '&:hover': {
                          background: theme.vars.palette.primary.dark,
                        },
                      }}
                      title="Добавить действие"
                    >
                      <Iconify icon="ic:baseline-plus" color="white" height={24} width={24} />
                    </IconButton>
                  </TableCell>
                  <TableCell padding="none" width={180}>
                    <FormControl size="small" fullWidth>
                      <InputLabel size="small">Тип задания</InputLabel>

                      <Select
                        sx={{
                          '.MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                        }}
                        size="small"
                      >
                        <MenuItem>Своё тех. задание</MenuItem>
                        <MenuItem>Маркировка</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell padding="none">
                    <TextField
                      sx={{
                        '.MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                      }}
                      slotProps={{ input: { style: { borderRadius: 0 } } }}
                      label="Кол-во"
                      size="small"
                    />
                  </TableCell>

                  <TableCell>
                    <Typography variant="caption" whiteSpace="nowrap">
                      Здесь вы можете добавить действия к товару выше или описать своё тех. задание.
                      Мы обработаем товар и отправим его на склад.
                    </Typography>
                  </TableCell>

                  <TableCell padding="none" size="small" width={40}>
                    <IconButton sx={{ marginRight: '8px' }} title="Убрать из списка" color="error">
                      <Iconify icon="ic:baseline-minus" width={24} height={24} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
