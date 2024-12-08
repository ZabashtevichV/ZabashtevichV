import type { FC } from 'react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import {
  Box,
  Card,
  Paper,
  Table,
  Button,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  IconButton,
  Typography,
  TableContainer,
} from '@mui/material';

import { openModal } from 'src/store/modal/create-product-item';

import { Iconify } from '../iconify';
import { TaskRow } from './task-row';
import { TaskDetailsRow } from './task-details-row';
import { RowCollapseWrapper } from './row-collapse-wrapper';
import { WorkerRow } from '../worker-row';

export const ProductTable: FC<{
  isTaskButtonVisible?: boolean;
  isDetailsVisible?: boolean;
  isButtonVisible?: boolean;
  color?: 'light' | 'dark';
  isPreview?: boolean;
  title?: string;
}> = ({
  isTaskButtonVisible = false,
  isDetailsVisible = false,
  title = 'Состав приёмки',
  isButtonVisible = true,
  isPreview = false,
  color = 'light',
}) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(openModal());
  };

  return (
    <Card
      sx={{
        backgroundColor: color === 'dark' ? theme.vars.palette.grey[900] : '',
        padding: '24px 0px 0px 0px',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      }}
    >
      <Box display="flex" alignItems="center" sx={{ padding: '0px 24px 24px 24px' }} gap={2}>
        <Typography
          color={color === 'light' ? 'textPrimary' : 'white'}
          whiteSpace="nowrap"
          variant="h4"
        >
          {title}
        </Typography>

        {isButtonVisible && (
          <Button
            startIcon={<Iconify icon="mingcute:add-line" />}
            color={color === 'dark' ? 'primary' : 'inherit'}
            sx={{
              color: color === 'dark' ? theme.vars.palette.grey[900] : '',
              background: color === 'dark' ? 'white' : '',
            }}
            variant="contained"
            onClick={onClick}
          >
            Добавить товар
          </Button>
        )}
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Table sx={{ minWidth: '1150px' }}>
          <TableHead>
            <TableRow>
              {(isTaskButtonVisible || isDetailsVisible) && <TableCell />}

              <TableCell sx={{ pl: '24px' }}>Изображение</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>Тип</TableCell>
              <TableCell>Количество</TableCell>
              <TableCell>Состав</TableCell>
              <TableCell>Красный</TableCell>
              <TableCell>ШК</TableCell>
              <TableCell>Артикулы МП</TableCell>
              {isButtonVisible && <TableCell />}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              {(isTaskButtonVisible || isDetailsVisible) && (
                <TableCell padding="none" width={52}>
                  <IconButton
                    sx={{
                      height: '60px !important',
                      borderRadius: 0,
                      margin: '0 auto',
                      width: '52px',
                    }}
                    onClick={() => setOpen(!open)}
                    size="small"
                  >
                    {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
              )}

              <TableCell
                sx={{
                  pl: '24px',
                }}
                width={100}
                size="small"
              >
                <Box
                  component="button"
                  position="relative"
                  borderRadius="50%"
                  display="block"
                  height={48}
                  width={48}
                  sx={{
                    border: '3px solid transparent',
                    '&:hover': {
                      border: `3px solid ${theme.vars.palette.primary.main}`,
                    },
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="img"
                    alt="preview"
                    src="/assets/images/cover/cover-1.webp"
                    sx={{
                      transform: 'translate(-50%, -50%)',
                      left: '50%',
                      top: '50%',
                      width: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      borderRadius: '24px',
                      height: '100%',
                    }}
                  />
                </Box>
              </TableCell>

              <TableCell size="small">Фен</TableCell>
              <TableCell size="small">Товар</TableCell>
              <TableCell size="small">
                {!isPreview && (
                  <TextField
                    InputProps={{ style: { background: 'white' } }}
                    label="Кол-во"
                    size="small"
                    fullWidth
                  />
                )}
                {isPreview && 123}
              </TableCell>
              <TableCell size="small">Фен в коробке</TableCell>
              <TableCell size="small">Красный</TableCell>
              <TableCell>2342356234</TableCell>
              <TableCell>2342356234</TableCell>

              {isButtonVisible && (
                <TableCell padding="none" size="small" width={40}>
                  <IconButton sx={{ marginRight: '8px' }} color="error" title="Убрать из списка">
                    <Iconify icon="mdi:times" width={24} height={24} />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>

            {isTaskButtonVisible && <TaskRow open={open} />}
            {isDetailsVisible && (
              <RowCollapseWrapper open={open}>
                <TaskDetailsRow />
                <WorkerRow />
              </RowCollapseWrapper>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
