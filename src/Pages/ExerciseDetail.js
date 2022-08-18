import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exercisesOptions, FetchData, youtubeOptions} from '../utils/FetchData'
import Detail from '../Components/Detail/Detail'
import ExerciseVideos from '../Components/ExerciseVideos/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises/SimilarExercises'


function ExerciseDetail() {
  
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const [exerciseDetail, setExerciseDetail] = useState({});

  const [targetMuscleExercises, settargetMuscleExercises] = useState({})

  const [equipmentExercises, setequipmentExercises] = useState({})

  const { id } = useParams() ; 

  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth'})
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'; 
      const YoutubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);
      setExerciseDetail(exerciseDetailData);

      const exercisesVideosData = await FetchData(`${YoutubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)

      setExerciseVideos(exercisesVideosData.contents);

      const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)
      
      settargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)

      setequipmentExercises(equipmentExercisesData);
    } 

    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail