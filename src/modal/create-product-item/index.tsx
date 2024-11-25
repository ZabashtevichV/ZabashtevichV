import { Box, Button, Card, Container, Grid2, Modal, TextField, Typography } from '@mui/material';
import { ImageUploader } from 'src/components/image-uploader';
import { Scrollbar } from 'src/components/scrollbar';
import { layoutClasses } from 'src/layouts/classes';

export default function CreateProductItem() {
  console.log(1);
  return (
    <Modal
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      disableAutoFocus
      open
    >
      <Container maxWidth="lg" className={layoutClasses.content}>
        <Card sx={{ padding: '24px' }}>
          <Scrollbar>
            <Typography variant="h3">Создание товара</Typography>

            <Grid2 container mt={4.5} spacing={4.5}>
              <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                <ImageUploader />
              </Grid2>
              <Grid2 size={{ lg: 8, md: 8, sm: 12, xs: 12 }}>
                <Typography variant="h5" mt={-1.2} fontWeight={400}>
                  Характеристики
                </Typography>

                <Box sx={{ marginTop: '12px' }} display="flex" gap={2}>
                  <TextField label="Название *" fullWidth size="small" />

                  <TextField label="Цвет *" fullWidth size="small" />
                </Box>

                <Box sx={{ marginTop: '12px' }} display="flex" gap={2}>
                  <TextField label="Баркод *" fullWidth size="small" />
                </Box>

                <Box sx={{ marginTop: '12px' }} display="flex" gap={2}>
                  <TextField label="Артикул OZ" fullWidth size="small" />

                  <TextField label="Артикул WB" fullWidth size="small" />

                  <TextField label="Артикул YM" fullWidth size="small" />
                </Box>

                <Box sx={{ marginTop: '12px' }} display="flex" gap={2}>
                  <TextField label="Описание" fullWidth size="small" multiline minRows={5} />
                </Box>
              </Grid2>
            </Grid2>

            <Typography
              variant="body1"
              mt={12}
              display="block"
              textAlign="right"
              fontStyle="italic"
            >
              * После создания карточки она появится в ваших складских остатках
            </Typography>

            <Box display="flex" gap={1} justifyContent="flex-end" mt={2}>
              <Button size="large" variant="outlined" color="inherit">
                Закрыть
              </Button>

              <Button size="large" variant="contained" color="inherit">
                Создать карточку
              </Button>
            </Box>
          </Scrollbar>
        </Card>
      </Container>
    </Modal>
  );
}
