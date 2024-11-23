import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Player } from 'video-react';

import { Box, Modal, Backdrop, ImageList, ImageListItem, useMediaQuery } from '@mui/material';

import { itemData } from 'src/sections/request-item/data';

export const SwiperImgs = () => {
  const [{ open, src }, setState] = useState({ open: false, src: '' });

  const handleClose = () => setState({ open: false, src: '' });

  const matches = useMediaQuery('(max-width: 1200px)');

  return (
    <Box>
      <ImageList sx={{ pr: 1 }} cols={matches ? 5 : 3} rowHeight="auto">
        {itemData.map((item) => (
          <ImageListItem
            onClick={() => setState({ open: true, src: item.img })}
            key={item.img}
            sx={{
              aspectRatio: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.5,
              },
            }}
          >
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            backgroundcolor: 'red',
          },
        }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={{ position: 'relative', width: '90%' }}>
          <Player playsInline poster="https://video-react.js.org/assets/poster.png">
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
          </Player>
        </Box>
      </Modal>
    </Box>
  );
};
