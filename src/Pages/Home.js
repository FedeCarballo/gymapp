import React, {useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import SearchExercises from '../Components/SearchExercises/SearchExercises'
import Exercises from '../Components/Exercises/Exercises'

function Home() {
  return (
    <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
    </Box>
  )
}

export default Home