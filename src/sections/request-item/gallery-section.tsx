import './video.css';
import 'video-react/dist/video-react.css';
import { SwiperImgs } from 'src/components/swiper';

import { useState } from 'react';
import { Player } from 'video-react';

import { Backdrop, Box, CardMedia, Fade, ImageList, ImageListItem, Modal } from '@mui/material';

import { itemData } from './data';

export const GallerySection = () => {
  console.log('hi');
  return (
    <Box>
      <SwiperImgs />
    </Box>
  );
};
