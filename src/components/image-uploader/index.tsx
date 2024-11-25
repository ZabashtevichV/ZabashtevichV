import { Box, Button, Skeleton } from '@mui/material';
import { useState } from 'react';

export const ImageUploader = () => {
  const [image, setImage] = useState('');

  return (
    <Box width="100%" height="100%" sx={{ position: 'relative' }}>
      {!image && <Skeleton width="100%" height="100%" sx={{ transform: 'none' }} />}
      {!!image && <img src={image} alt="" width="100%" height="100%" />}

      <label htmlFor="contained-uploader-file">
        <Button
          component="span"
          sx={{
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            position: 'absolute',
            left: '50%',
            top: '50%',
          }}
          variant="contained"
          size="large"
        >
          {image ? 'Заменить фото' : 'Загрузить фото'}

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
            id="contained-uploader-file"
            accept="image/*"
            multiple
            type="file"
          />
        </Button>
      </label>
    </Box>
  );
};
