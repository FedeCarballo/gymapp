import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import HeroBannerimg from '../../assets/images/banner.jpg'
function HeroBanner() {
  return (
    <Box sx={{
      mt: { lg:'212px',xs:"70px"},
      ml: {sm:"50px"}
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontSize="26px" fontWeight="600"> 
        Beast Mode
      </Typography>
      <Typography fontWeight={700}
      sx={{
        fontSize:{
          lg:"44px",
          xs:"40px"
        }
      }}
      mb="23px" mt="30px" color="#fff"> 
        Sweat, Smile <br/> And repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} color="#fff">
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href='#exercises' sx={{backgroundColor:"#ff2625", padding:"10px"}}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0,
          display:{lg:"block", xs:"none"}
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerimg} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner