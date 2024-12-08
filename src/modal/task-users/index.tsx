import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { UserTable } from 'src/sections/user/user-table';
import { useSelector } from 'src/store';
import { closeModal } from 'src/store/modal/task-users';

export default function TaskUsersModal() {
  const { isModalOpen } = useSelector((state) => state.taskUsers);
  const dispatch = useDispatch();
  const theme = useTheme();

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      open={isModalOpen}
      disableAutoFocus
    >
      <Container maxWidth="lg">
        <Card>
          <Scrollbar sx={{ maxHeight: '80vh' }}>
            <Typography sx={{ padding: '24px 24px 12px 24px' }} variant="h4">
              Участники задачи
            </Typography>

            <TableContainer sx={{ padding: 0 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Сотрудник</TableCell>
                    <TableCell>Роль</TableCell>
                    <TableCell>На смене</TableCell>

                    <TableCell />
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow sx={{ borderBottom: `1px solid ${theme.vars.palette.grey[300]}` }}>
                    <TableCell size="small">1</TableCell>

                    <TableCell size="small" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src="/assets/images/avatar/avatar-1.webp" />
                      Альберт
                    </TableCell>

                    <TableCell>Упаковщик</TableCell>

                    <TableCell size="small">
                      <Iconify
                        width={22}
                        icon="solar:check-circle-bold"
                        sx={{ color: 'success.main' }}
                      />
                    </TableCell>

                    <TableCell width={40} size="small">
                      <IconButton color="error" title="Удалить из списка">
                        <Iconify width={24} icon="mdi:times" />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ borderBottom: `1px solid ${theme.vars.palette.grey[300]}` }}>
                    <TableCell size="small">2</TableCell>

                    <TableCell size="small" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src="/assets/images/avatar/avatar-1.webp" />
                      Мустафа
                    </TableCell>

                    <TableCell size="small">Упаковщик</TableCell>

                    <TableCell size="small">
                      <Iconify
                        width={22}
                        icon="solar:check-circle-bold"
                        sx={{ color: 'success.main' }}
                      />
                    </TableCell>

                    <TableCell width={40} size="small">
                      <IconButton color="error" title="Удалить из списка">
                        <Iconify width={24} icon="mdi:times" />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ borderBottom: `1px solid ${theme.vars.palette.grey[300]}` }}>
                    <TableCell size="small">3</TableCell>

                    <TableCell size="small" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src="/assets/images/avatar/avatar-1.webp" />
                      Роман
                    </TableCell>

                    <TableCell size="small">Упаковщик</TableCell>

                    <TableCell size="small">
                      <Iconify
                        width={22}
                        icon="solar:check-circle-bold"
                        sx={{ color: 'success.main' }}
                      />
                    </TableCell>

                    <TableCell width={40} size="small">
                      <IconButton color="error" title="Удалить из списка">
                        <Iconify width={24} icon="mdi:times" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography sx={{ padding: '24px 24px 0px 24px' }} variant="h4">
              Список сотрудников
            </Typography>

            <UserTable />
          </Scrollbar>

          <Box justifyContent="flex-end" display="flex" gap={2} sx={{ padding: '24px' }}>
            <Button variant="outlined" color="inherit" size="large" onClick={onClose}>
              Закрыть
            </Button>

            <Button variant="contained" color="inherit" size="large">
              Сохранить изменений
            </Button>
          </Box>
        </Card>
      </Container>
    </Modal>
  );
}
