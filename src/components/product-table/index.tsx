import { useDispatch } from 'react-redux';
import { FC, useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

import { openModal } from 'src/store/modal/create-product-item';

import {
  Box,
  Button,
  Card,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  menuItemClasses,
  MenuList,
  Paper,
  Popover,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Iconify } from '../iconify';

export const ProductTable: FC<{ isPreview?: boolean }> = ({ isPreview = false }) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(openModal());
  };

  return (
    <Card
      sx={{ padding: '24px 0px 0px 0px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
    >
      <Box display="flex" alignItems="center" sx={{ padding: '0px 24px 24px 24px' }} gap={2}>
        <Typography variant="h4" whiteSpace="nowrap">
          Состав приемки
        </Typography>

        {!isPreview && (
          <Button
            startIcon={<Iconify icon="mingcute:add-line" />}
            variant="contained"
            onClick={onClick}
            color="inherit"
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
        <Table>
          <TableHead>
            <TableRow>
              {!isPreview && <TableCell sx={{ background: theme.vars.palette.text.primary }} />}
              <TableCell sx={{ background: theme.vars.palette.text.primary, color: 'white' }}>
                Изображение
              </TableCell>
              <TableCell sx={{ background: theme.vars.palette.text.primary, color: 'white' }}>
                Название
              </TableCell>
              <TableCell sx={{ background: theme.vars.palette.text.primary, color: 'white' }}>
                Состав
              </TableCell>
              <TableCell sx={{ background: theme.vars.palette.text.primary, color: 'white' }}>
                Красный
              </TableCell>
              <TableCell sx={{ background: theme.vars.palette.text.primary, color: 'white' }}>
                ШК
              </TableCell>
              <TableCell sx={{ background: theme.vars.palette.text.primary, color: 'white' }}>
                Артикулы МП
              </TableCell>
              <TableCell sx={{ background: theme.vars.palette.text.primary, color: 'white' }}>
                Количество
              </TableCell>
              <TableCell sx={{ background: theme.vars.palette.text.primary }} />
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              {!isPreview && (
                <TableCell
                  sx={{ background: theme.vars.palette.background.neutral }}
                  padding="none"
                  width={52}
                >
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
                sx={{ background: theme.vars.palette.background.neutral, color: 'white' }}
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

              <TableCell
                sx={{
                  background: theme.vars.palette.background.neutral,
                  color: theme.vars.palette.text.primary,
                }}
                size="small"
              >
                Фен
              </TableCell>
              <TableCell
                sx={{
                  background: theme.vars.palette.background.neutral,
                  color: theme.vars.palette.text.primary,
                }}
                size="small"
              >
                Фен в коробке
              </TableCell>
              <TableCell
                sx={{
                  background: theme.vars.palette.background.neutral,
                  color: theme.vars.palette.text.primary,
                }}
                size="small"
              >
                Красный
              </TableCell>
              <TableCell
                sx={{
                  background: theme.vars.palette.background.neutral,
                  color: theme.vars.palette.text.primary,
                }}
              >
                2342356234
              </TableCell>
              <TableCell
                sx={{
                  background: theme.vars.palette.background.neutral,
                  color: theme.vars.palette.text.primary,
                }}
              >
                2342356234
              </TableCell>
              <TableCell
                sx={{
                  background: theme.vars.palette.background.neutral,
                  color: theme.vars.palette.text.primary,
                }}
                size="small"
              >
                {!isPreview && (
                  <TextField
                    InputProps={{ style: { background: 'white' } }}
                    size="small"
                    label="Кол-во"
                  />
                )}
                {isPreview && 123}
              </TableCell>

              <TableCell
                sx={{
                  background: theme.vars.palette.background.neutral,
                  color: theme.vars.palette.text.primary,
                }}
                padding="none"
                size="small"
                width={40}
              >
                <IconButton sx={{ marginRight: '8px' }} color="error" title="Убрать из списка">
                  <Iconify icon="mdi:times" width={24} height={24} />
                </IconButton>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={9} padding="none">
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
                              <Iconify
                                icon="ic:baseline-plus"
                                color="white"
                                height={24}
                                width={24}
                              />
                            </IconButton>
                          </TableCell>
                          <TableCell padding="none" width={180}>
                            <FormControl size="small" fullWidth>
                              <InputLabel sx={{ bgcolor: 'white' }} size="small">
                                Тип задания
                              </InputLabel>

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
                            <Typography variant="caption">
                              Здесь вы можете добавить действия к товару выше или описать своё тех.
                              задание. Мы обработаем товар и отправим его на склад.
                            </Typography>
                          </TableCell>

                          <TableCell padding="none" size="small" width={40}>
                            <IconButton
                              sx={{ marginRight: '8px' }}
                              title="Убрать из списка"
                              color="error"
                            >
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
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
