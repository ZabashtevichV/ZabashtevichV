import { SyntheticEvent, useState } from 'react';

import {
  Box,
  Card,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  Tabs,
  Tab,
} from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { Step1 } from './step1';
import { Step2 } from './step2';

export const SettingsView = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <DashboardContent>
      <Card sx={{ padding: '24px', position: 'relative' }}>
        <Box>
          <Tabs
            aria-label="basic tabs example"
            indicatorColor="primary"
            onChange={handleChange}
            textColor="inherit"
            value={value}
          >
            <Tab label="Реквизиты" />
            <Tab label="API ключи" />
          </Tabs>
        </Box>
      </Card>

      {value === 0 && <Step1 />}
      {value === 1 && <Step2 />}

      <Box display="flex" gap={1.5} justifyContent="flex-end" mt={3.5}>
        <Button variant="outlined" color="inherit" size="large" sx={{ borderRadius: 0 }}>
          Назад
        </Button>
        <Button variant="contained" color="inherit" size="large" sx={{ borderRadius: 0 }}>
          Сохранить
        </Button>
      </Box>
    </DashboardContent>
  );
};
