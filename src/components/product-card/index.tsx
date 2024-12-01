import type { FC } from 'react';

import { Info } from '@mui/icons-material';
import {
  Box,
  Card,
  Tooltip,
  useTheme,
  TextField,
  IconButton,
  Typography,
} from '@mui/material';
// import { useDispatch } from 'react-redux';

// import { openModal } from 'src/store/modal/add-process';

import { Iconify } from '../iconify';
import { Scrollbar } from '../scrollbar';

type Props = { isPreview?: boolean; isEditable?: boolean };

export const ProductCard: FC<Props> = ({ isPreview, isEditable }) => {
  // const dispatch = useDispatch();
  const theme = useTheme();
  const isVisible = !isEditable && !isPreview;

  // const handleAddProcess = () => {
  //   dispatch(openModal());
  // };

  return (
    <Card
      sx={{
        borderRadius: '24px',
        flexDirection: 'column',
        position: 'relative',
        display: 'flex',
      }}
    >
      {isVisible && (
        <IconButton
          sx={{ position: 'absolute', top: 4, right: 48, zIndex: 1 }}
          title="Убрать из списка"
          color="error"
        >
          <Iconify icon="mdi:trash" height={24} width={24} />
        </IconButton>
      )}

      <IconButton
        sx={{ position: 'absolute', top: 4, right: 12, zIndex: 1 }}
        title="Посмотреть инфо"
        color="primary"
      >
        <Iconify icon="material-symbols:settings" height={24} width={24} />
      </IconButton>

      <Box
        display="flex"
        sx={{
          height: '300px',
        }}
      >
        <Box position="relative" display="flex" flex={1}>
          <Box
            component="img"
            alt="123"
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

        <Scrollbar
          sx={{
            padding: '48px 24px 24px 24px',
            display: 'flex',
            flex: 1,
            '.simplebar-content': {
              height: '100%',
            },
          }}
        >
          <Box display="flex" flexDirection="column" gap={1} flex={1} height="100%">
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom={1}
              alignItems="center"
              borderColor={theme.palette.grey['400']}
            >
              <Typography fontWeight={500} variant="body1">
                Название
              </Typography>

              <Typography fontStyle="italic" variant="body2">
                Фен
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom={1}
              alignItems="center"
              borderColor={theme.palette.grey['400']}
            >
              <Typography fontWeight={500} variant="body1">
                Цвет
              </Typography>

              <Typography fontStyle="italic" variant="body2">
                Красный
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom={1}
              alignItems="center"
              borderColor={theme.palette.grey['400']}
            >
              <Typography fontWeight={500} variant="body1">
                Состав
              </Typography>

              <Typography fontStyle="italic" variant="body2">
                Фен с упаковкой
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom={1}
              alignItems="center"
              borderColor={theme.palette.grey['400']}
            >
              <Typography fontWeight={500} variant="body1">
                Штрихкод
              </Typography>

              <Typography fontStyle="italic" variant="body2">
                24234231
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom={1}
              alignItems="center"
              borderColor={theme.palette.grey['400']}
            >
              <Typography fontWeight={500} variant="body1">
                ID
              </Typography>

              <Typography fontStyle="italic" variant="body2">
                43534s234
              </Typography>
            </Box>

            {isVisible && (
              <TextField style={{ marginTop: 'auto' }} label="Количество" size="small" />
            )}
          </Box>
        </Scrollbar>
      </Box>

      {(isEditable || isPreview) && (
        <Box sx={{ padding: '12px' }} flex={1}>
          {!isPreview && (
            <Box display="flex" mb={2}>
              <Typography variant="h4">Действия</Typography>

              <Tooltip title="Применяемые действия к товару">
                <IconButton size="small">
                  <Info fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          <TextField
            minRows={isPreview ? 3 : 5}
            label="Тех. задание"
            disabled={isPreview}
            multiline
            fullWidth
          />
          {/* <Chip sx={{ borderRadius: 0 }} color="success" label="Визуальные осмотр на брак" />

          <Button
            startIcon={<Iconify icon="mingcute:add-line" />}
            sx={{ marginLeft: '6px', borderRadius: 0 }}
            onClick={handleAddProcess}
            variant="contained"
            color="inherit"
            size="small"
          >
            Добавить действие
          </Button> */}
        </Box>
      )}
      {isPreview && (
        <Box sx={{ padding: '0 12px 24px 12px' }}>
          <Typography variant="h4">Расчёт на товар</Typography>

          <Box display="flex" flex={1} gap={2} mt={1}>
            <Box
              display="flex"
              justifyContent="space-between"
              flex={1}
              sx={{
                borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
              }}
            >
              <Typography>Упаковка</Typography>

              <Typography fontStyle="oblique">12р</Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              flex={1}
              sx={{
                borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
              }}
            >
              <Typography>Упаковка</Typography>

              <Typography fontStyle="oblique">12р</Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Card>
  );
};
