import './video.css';
import 'video-react/dist/video-react.css';

import { Box } from '@mui/material';

import { SwiperImgs } from 'src/components/swiper';


export const GallerySection = () => {
  console.log('hi');
  return (
    <Box>
      <SwiperImgs />
    </Box>
  );
};
