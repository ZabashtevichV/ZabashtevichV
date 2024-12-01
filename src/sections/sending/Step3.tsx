import {
  Card,
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Typography,
  TableContainer,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

export const Step3 = () => (
  <>
    <Card
      sx={{
        marginTop: '24px',
        padding: '24px',
      }}
    >
      <Typography variant="h4">Направления</Typography>
    </Card>

    <Card sx={{ marginTop: '24px' }}>
      <Typography variant="h4" mb={2} padding={2}>
        Коледино
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Изображение</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Количество</TableCell>
              <TableCell>Штрихкод</TableCell>
              <TableCell>Цвет</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <img alt="" width={40} height={40} />
              </TableCell>
              <TableCell>Фен</TableCell>

              <TableCell>sdfsd42</TableCell>

              <TableCell>
                <TextField
                  value="50"
                  size="small"
                  sx={{ borderRadius: 0 }}
                  InputProps={{
                    style: {
                      borderRadius: 0,
                    },
                  }}
                />
              </TableCell>

              <TableCell>234234</TableCell>

              <TableCell>Красный</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={6}>
                <Button
                  startIcon={<Iconify icon="mingcute:add-line" />}
                  sx={{ borderRadius: 0 }}
                  variant="contained"
                  color="inherit"
                >
                  Добавить товар
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  </>
);
