import './styles.css';

import {
  Table,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from '@mui/material';

import { Iconify } from '../iconify';

export const TaskDetailsRow = () => {
  const theme = useTheme();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ backgroundColor: theme.vars.palette.grey[900] }} />
          <TableCell sx={{ backgroundColor: theme.vars.palette.grey[900], color: 'white' }}>
            Тип задания
          </TableCell>
          <TableCell sx={{ backgroundColor: theme.vars.palette.grey[900], color: 'white' }}>
            Статус
          </TableCell>

          <TableCell sx={{ backgroundColor: theme.vars.palette.grey[900], color: 'white' }}>
            Количество
          </TableCell>
          <TableCell sx={{ backgroundColor: theme.vars.palette.grey[900], color: 'white' }} />
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

          <TableCell>Упаковка</TableCell>
          <TableCell>
            <Typography color={theme.vars.palette.warning.main} fontWeight={600} variant="h6">
              В работе
            </Typography>
          </TableCell>
          <TableCell>200</TableCell>

          <TableCell>
            <Typography variant="caption" whiteSpace="nowrap">
              Здесь вы можете добавить действия к товару выше или описать своё тех. задание. Мы
              обработаем товар и отправим его на склад.
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
