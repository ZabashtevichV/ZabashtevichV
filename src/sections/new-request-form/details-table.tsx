import { useState } from 'react';

import { Info, AddBox, AddToPhotos } from '@mui/icons-material';
import {
  Table,
  Button,
  Tooltip,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  IconButton,
  Typography,
  TableContainer,
  Box,
} from '@mui/material';

import { Scrollbar } from 'src/components/scrollbar';

export const DetailsTable = () => {
  const [image, setImage] = useState('');
  return (
    <Scrollbar>
      <TableContainer sx={{ overflow: 'unser' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  Изображение
                  <Tooltip title="Добавьте изображение товара для легкой идентификации">
                    <IconButton>
                      <Info />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
              <TableCell>ID</TableCell>

              <TableCell>Название</TableCell>

              <TableCell>
                Артикулы
                <Tooltip title="Позволяет связать остатки на фулфилменте с остатками на маркетплейсах">
                  <IconButton>
                    <Info />
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell>Кол-во</TableCell>
              <TableCell>
                Штрихкод
                <Tooltip title="Если вы не добавите штрихкод, то мы создадим уникальный для вас, который потом привяжем к карточке товара">
                  <IconButton>
                    <Info />
                  </IconButton>
                </Tooltip>
              </TableCell>

              <TableCell>Цвет</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow
              sx={{
                border: '1px solid rgba(var(--palette-grey-500Channel) / 0.2)',
              }}
            >
              <TableCell size="small">
                <label htmlFor="contained-button-file">
                  <Button
                    sx={{ borderRadius: 0, minWidth: '24px', marginRight: '8px' }}
                    title="Добавить изображение"
                    component="span"
                  >
                    <AddToPhotos />

                    <input
                      onChange={(event) => {
                        const file = event?.target?.files?.[0];
                        const reader = new FileReader();
                        const url = reader.readAsDataURL(file!);

                        reader.onloadend = function () {
                          setImage(reader.result as string);
                        };
                      }}
                      style={{ display: 'none' }}
                      id="contained-button-file"
                      accept="image/*"
                      multiple
                      type="file"
                    />
                  </Button>
                </label>

                <img src={image} alt="" width="40px" height="40px" />
              </TableCell>

              <TableCell size="small">
                <Typography>1sdfsd234as234s</Typography>
              </TableCell>

              <TableCell size="small" padding="none">
                <TextField
                  placeholder="Название"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                  size="small"
                />
              </TableCell>

              <TableCell size="small" sx={{ display: 'flex', gap: 0.5 }}>
                <TextField
                  size="small"
                  placeholder="Ozon"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
                <TextField
                  size="small"
                  placeholder="WB"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
                <TextField
                  size="small"
                  placeholder="Яндекс маркет"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
              </TableCell>

              <TableCell size="small">
                <TextField
                  size="small"
                  placeholder="Кол-во"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
              </TableCell>

              <TableCell size="small">
                <TextField
                  size="small"
                  placeholder="Штрихкод"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
              </TableCell>

              <TableCell size="small">
                <TextField
                  size="small"
                  placeholder="Цвет"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
              </TableCell>
            </TableRow>

            <TableRow
              sx={{
                border: '1px solid rgba(var(--palette-grey-500Channel) / 0.2)',
              }}
            >
              <TableCell size="small">
                <IconButton sx={{ borderRadius: 0 }}>
                  <AddBox color="primary" />

                  <Typography ml={1.5} whiteSpace="nowrap">
                    Добавить строку
                  </Typography>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};
