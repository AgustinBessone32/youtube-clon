import { Box, Stack } from '@mui/material';
import { Spinner, VideoCard } from './';

const Videos = ({videos ,justify, direction}) => {

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent={justify} gap={2}>
      {
        videos.length !== 0 ?
        
        videos.map((item, idx)=> (
          <Box key={idx}>
              {item.id.videoId && <VideoCard video={item}/>}
          </Box>
        ))
      : 
        <Spinner />
      }
    </Stack>
  )
}

export default Videos