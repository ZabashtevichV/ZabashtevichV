import './video.css';
import 'video-react/dist/video-react.css';

import { Box } from '@mui/material';

import { SwiperImgs } from 'src/components/swiper';
import { Scrollbar } from 'src/components/scrollbar';

export const GallerySection = () => {
  console.log('hi');
  return (
    <Box
      sx={{
        '@media(max-width: 1200px)': {
          overflow: 'scroll',
          height: '600px',
        },
      }}
    >
      <Scrollbar>
        <SwiperImgs />
      </Scrollbar>
    </Box>
  );
};
