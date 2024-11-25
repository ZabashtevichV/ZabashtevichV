import { useState } from 'react';

import { Info, AddBox, AddToPhotos } from '@mui/icons-material';
import {
  Box,
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
} from '@mui/material';

import { Scrollbar } from 'src/components/scrollbar';

export const ProductsTable = () => {
  const [image, setImage] = useState('');
  console.log(image);

  return (
    <Scrollbar>
      <TableContainer sx={{ overflow: 'unser', paddingBottom: '4px' }}>
        <Table sx={{ minWidth: 1500 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  Изображение
                  <Tooltip title="Добавьте изображение товара для легкой идентификации">
                    <IconButton size="small">
                      <Info fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
              <TableCell width={100}>
                ID
                <Tooltip title="Наш внутренний уникальный идентификатор">
                  <IconButton size="small">
                    <Info fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>

              <TableCell>Название</TableCell>

              <TableCell>
                Артикулы
                <Tooltip title="Позволяет связать остатки на фулфилменте с остатками на маркетплейсах">
                  <IconButton size="small">
                    <Info fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell>Кол-во</TableCell>
              <TableCell>
                Штрихкод
                <Tooltip title="Если вы не добавите штрихкод, то мы создадим уникальный для вас, который потом привяжем к карточке товара">
                  <IconButton size="small">
                    <Info fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>

              <TableCell>Цвет</TableCell>

              <TableCell>Описание</TableCell>

              <TableCell>
                Состав
                <Tooltip title="Опишите что входит в состав товара">
                  <IconButton size="small">
                    <Info fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
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

                {image && <img src={image} alt="" width="40px" height="40px" />}
              </TableCell>

              <TableCell size="small">
                <Typography>1sdfs</Typography>
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

              <TableCell size="small">
                <Box display="flex" gap={0.5}>
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
                </Box>
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

              <TableCell>
                <TextField
                  placeholder="Описание"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
              </TableCell>

              <TableCell>
                <TextField
                  placeholder="Состав"
                  size="small"
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
