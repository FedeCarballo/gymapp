import React from 'react'
import {Box, Link, Stack, Typography} from '@mui/material';
import Logo from '../../assets/images/Logo-1.png'
import Github from '../../assets/images/github.png'
import Linkedin from '../../assets/images/linkedin.png'


function Footer() {
  return (
    <Box mt="90px">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" bgcolor= "#22203d">
        <img src={Logo} alt="logo" width= "150px"/>
        <Typography variant="h5" pb="40px" mt="30px" color="#fff">
          Designed By Federico Carballo 
        </Typography>
        <Stack flexDirection='row' gap="40px" mb="20px">
          <a href='https://github.com/FedeCarballo' target="_blank" rel="noreferrer">
          <img src={Github} width="100px"/>
          </a>
          <a href='https://www.linkedin.com/in/federico-concepcion-carballo-benitez/' target="_blank" rel="noreferrer">
          <img src={Linkedin} width="100px"/>
          </a>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer