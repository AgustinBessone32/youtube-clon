import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backgChannel } from '../utils/backgroundChannel'
import { fetchFromAPI } from '../utils/fetrchFromAPI'
import ChannelCard from './ChannelCard'
import Spinner from './Spinner'
import Videos from './Videos'


const ChannelDetail = () => {
  const {id} = useParams()
  const [channel, setChannel] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => {setChannel(data?.items[0])})

    fetchFromAPI(`search?channelId=${id}&part=snippet&oeder=date`)
      .then(data => {setVideos(data?.items)})
  }, [id])
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: backgChannel, zIndex: 10, height: '300px'}}
        />
          
          {
            channel === null && videos.length === 0 
            ?
              <Spinner />
            :
              <>
                <ChannelCard  channelDetail={channel} />
                <Box display='flex' p='2' justifyContent='center' />
                  <Box sx={{mr:{sm:'100px'}}}>
                    <Videos videos={videos} justify='center'/>
                </Box>
              </>
          }
          
      </Box>
    </Box>
  )
}

export default ChannelDetail