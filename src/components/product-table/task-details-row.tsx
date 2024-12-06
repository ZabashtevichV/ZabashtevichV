import './styles.css';

import type { FC } from 'react';

import {
  Box,
  Table,
  Collapse,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from '@mui/material';

import { Iconify } from '../iconify';

export const TaskDetailsRow: FC<{ open: boolean }> = ({ open }) => {
  const theme = useTheme();
  return (
    <TableRow>
      <TableCell colSpan={10} padding="none">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: theme.vars.palette.grey[900] }} />
                  <TableCell
                    sx={{ backgroundColor: theme.vars.palette.grey[900], color: 'white' }}
                    padding="none"
                  >
                    Тип задания
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: theme.vars.palette.grey[900], color: 'white' }}
                    padding="none"
                  >
                    Статус
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: theme.vars.palette.grey[900], color: 'white' }}
                    padding="none"
                  >
                    Количество
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: theme.vars.palette.grey[900], color: 'white' }}
                    padding="none"
                  />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      paddingLeft: '24px',
                      display: 'flex',
                    }}
                  >
                    <Iconify
                      sx={{ animation: 'spin 4s linear infinite' }}
                      color={theme.vars.palette.warning.main}
                      icon="mdi:gear"
                      height={24}
                      width={24}
                    />
                  </TableCell>

                  <TableCell padding="none" width={180}>
                    Упаковка
                  </TableCell>
                  <TableCell padding="none" width={180}>
                    <Typography
                      color={theme.vars.palette.warning.main}
                      fontWeight={800}
                      variant="h6"
                    >
                      В работе
                    </Typography>
                  </TableCell>
                  <TableCell padding="none">200</TableCell>

                  <TableCell>
                    <Typography variant="caption" whiteSpace="nowrap">
                      Здесь вы можете добавить действия к товару выше или описать своё тех. задание.
                      Мы обработаем товар и отправим его на склад.
                    </Typography>
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
