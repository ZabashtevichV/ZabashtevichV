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
  Select,
  MenuItem,
  Collapse,
  Box,
} from '@mui/material';

import { Scrollbar } from 'src/components/scrollbar';

export const TaskTable = () => {
  const [image, setImage] = useState('');
  return (
    <Scrollbar>
      <TableContainer sx={{ overflow: 'unser' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Тип задачи</TableCell>

              <TableCell>Комментарий</TableCell>

              <TableCell colSpan={3} />
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell size="small">
                <Select value={1} size="small" sx={{ borderRadius: 0 }}>
                  <MenuItem value={1}>Маркировка</MenuItem>
                  <MenuItem>Собрать комплект</MenuItem>
                </Select>
              </TableCell>

              <TableCell>
                <TextField multiline maxRows={2} />
              </TableCell>

              <TableCell colSpan={3} />
            </TableRow>

            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in timeout="auto" unmountOnExit>
                  <Box>
                    <Table size="small" aria-label="purchases">
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            123
                          </TableCell>
                          <TableCell>123</TableCell>
                          <TableCell align="right">123</TableCell>

                          <TableCell align="right">123</TableCell>
                          <TableCell align="right">123</TableCell>
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
    </Scrollbar>
  );
};
