import React from 'react'
import {Stack, Box, Typography} from '@mui/material'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'
import Loader from '../Loader/Loader'

function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}}>
      <Typography variant="h4" mb={8} color="#fff">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader /> }
      </Stack>
      <Typography variant="h4" mt={6} mb={8} color="#fff">
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}} >
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader /> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises