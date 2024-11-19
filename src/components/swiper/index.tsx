import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Backdrop, Box, ImageList, ImageListItem, Modal } from '@mui/material';
import { Player } from 'video-react';
import { useState } from 'react';
import { itemData } from 'src/sections/request-item/data';

export const SwiperImgs = () => {
  const [{ open, src }, setState] = useState({ open: false, src: '' });

  const handleClose = () => setState({ open: false, src: '' });

  return (
    <Box>
      <Swiper
        style={{ maxWidth: '100%' }}
        pagination={{
          type: 'fraction',
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {itemData.map((item) => (
          <SwiperSlide key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ImageList sx={{ pr: 1 }} cols={3} rowHeight="auto">
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
