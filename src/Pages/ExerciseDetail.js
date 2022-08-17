import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exercisesOptions, FetchData} from '../utils/FetchData'
import Detail from '../Components/Detail/Detail'
import ExerciseVideos from '../Components/ExerciseVideos/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises/SimilarExercises'


function ExerciseDetail() {
  
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams() ; 

  useEffect(() => {

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'; 
      const YoutubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/'

      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);
      setExerciseDetail(exerciseDetailData);


    } 

    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail