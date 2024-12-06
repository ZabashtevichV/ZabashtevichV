import { Box, Card, TextField, Typography } from '@mui/material';

export const Step2 = () => (
  <>
    <Card sx={{ padding: '24px', marginTop: '24px' }}>
      <Typography variant="h4" display="block" mb={2}>
        Ozon
      </Typography>

      <Box display="flex" flexDirection="column" gap={1.5}>
        <TextField
          sx={{ borderRadius: 0 }}
          label="API key"
          fullWidth
          InputProps={{
            style: {
              borderRadius: 0,
            },
          }}
        />

        <TextField
          sx={{ borderRadius: 0 }}
          label="Client ID"
          fullWidth
          InputProps={{
            style: {
              borderRadius: 0,
            },
          }}
        />
      </Box>
    </Card>

    <Card sx={{ padding: '24px', marginTop: '24px' }}>
      <Typography variant="h4" display="block" mb={2}>
        Wildberries
      </Typography>

      <Box display="flex" flexDirection="column" gap={1.5}>
        <TextField
          sx={{ borderRadius: 0 }}
          label="API key"
          fullWidth
          InputProps={{
            style: {
              borderRadius: 0,
            },
          }}
        />

        <TextField
          sx={{ borderRadius: 0 }}
          label="Client ID"
          fullWidth
          InputProps={{
            style: {
              borderRadius: 0,
            },
          }}
        />
      </Box>
    </Card>
  </>
);
