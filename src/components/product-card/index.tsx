import { Box, Card, Tooltip, useTheme, TextField, IconButton, Typography } from '@mui/material';
import { CargoTable } from 'src/sections/new-zabor-form/cargo-table';
import { FC } from 'react';

// import { useDispatch } from 'react-redux';

// import { openModal } from 'src/store/modal/add-process';

import { Iconify } from '../iconify';

export const ProductCard: FC<{ isEditable?: boolean }> = ({ isEditable = false }) => (
  <Card sx={{ padding: '24px' }}>
    <Typography variant="h4">Товар #1</Typography>

    <Box mt={2} justifyContent="space-between" display="flex" alignItems="center">
      <Box position="relative" height={40} width={40}>
        <Box
          component="img"
          alt="preview"
          src="/assets/images/cover/cover-1.webp"
          sx={{
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            width: '92%',
            objectFit: 'cover',
            position: 'absolute',
            borderRadius: '24px',
            height: '92%',
          }}
        />
      </Box>

      <Typography variant="h6">Фен</Typography>

      <Typography variant="body1">Красный</Typography>

      <Typography variant="body1">Фен в коробке</Typography>

      <TextField value="12313" label="штрихкод" size="small" disabled />

      <TextField label="Количество" size="small" />

      <IconButton color="error">
        <Iconify icon="fa-solid:times-circle" />
      </IconButton>
    </Box>

    {isEditable && (
      <Box maxWidth={600} flexDirection="column" justifyContent="center" mt={4} display="flex">
        <CargoTable title="Тип задания" />

        <Typography variant="body1" textAlign="center" margin="16px 0px">
          ИЛИ
        </Typography>

        <TextField multiline minRows={3} label="Тех. задание" />
      </Box>
    )}
  </Card>
);
