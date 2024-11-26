import { Box, Button, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { TaskList } from '../../components/task-list';

export const PackView = () => (
  <DashboardContent>
    <Typography variant="h3">Заявка на обработку товара</Typography>

    <TaskList />

    <Box mt={2.5} gap={1} display="flex" justifyContent="flex-end">
      <Button color="inherit" variant="outlined" size="large">
        Назад
      </Button>

      <Button color="inherit" variant="contained" size="large">
        Отправить на согласование
      </Button>
    </Box>
  </DashboardContent>
);
