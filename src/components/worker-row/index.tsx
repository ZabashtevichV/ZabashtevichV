import { useDispatch } from 'react-redux';
import { openModal } from 'src/store/modal/task-users';

import {
  Box,
  Table,
  Collapse,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  TableHead,
  Avatar,
  AvatarGroup,
  Button,
} from '@mui/material';

import { Iconify } from '../iconify';

export const WorkerRow = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const onEditClick = () => {
    dispatch(openModal());
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell
            sx={{
              color: theme.vars.palette.grey[900],
            }}
          >
            Сотрудники
            <Button
              startIcon={<Iconify icon="mdi:gear" />}
              onClick={onEditClick}
              variant="contained"
              color="inherit"
              sx={{ ml: 2 }}
            >
              Редактировать
            </Button>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell size="small" sx={{ position: 'relative', height: '60px' }}>
            <AvatarGroup
              sx={{
                transform: 'translateY(-50%)',
                flexDirection: 'row-reverse',
                position: 'absolute',
                left: '12px',
                top: '50%',
              }}
            >
              <Avatar src="/assets/images/avatar/avatar-1.webp" />
              <Avatar src="/assets/images/avatar/avatar-3.webp" />
              <Avatar src="/assets/images/avatar/avatar-2.webp" />
              <Avatar src="/assets/images/avatar/avatar-4.webp" />
            </AvatarGroup>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
