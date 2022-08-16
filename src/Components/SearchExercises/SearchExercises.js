import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {exercisesOptions, FetchData} from '../../utils/FetchData'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'


function SearchExercises({setExercises,bodyPart, setBodyPart}) {
  const [Search, setSearch] = useState('')
  const [bodyparts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions);

      setBodyParts(['All', ...bodyPartsData])
    }

    fetchExercisesData();
  },[])
  const handleSearch = async() => {
    if(Search){
      const exercisesData = await FetchData(
        'https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

      const searchedExercises = 
      exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(Search) ||
        exercise.target.toLowerCase().includes(Search) ||
        exercise.equipment.toLowerCase().includes(Search) ||
        exercise.bodyPart.toLowerCase().includes(Search))

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: {
          lg: "44px", xs:"30px"}}}
          mb="50px" textAlign="center">
        Awesome Exercises you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: {
                fontWeight:"700",
                border:"none",
                borderRadius: "4px"
              },
              width: {lg:"800px", xs: "350px"},
              backgroundColor:"#fff",
              borderRadius:"40px"
            }}
            height="76px"
            value={Search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
        <Button className='search-btn'
          sx={{
            bgcolor:"#FF2625",
            color:"#fff",
            textTransform:"none",
            width: {lg:"175px", xs:"80px"},
            fontSize:{lg:"20px", xs:"14px"},
            height: "56px",
            position: 'absolute',
            right: "0"}}
            onClick={handleSearch}
            >
            search
        </Button>
      </Box>
      <Box sx={{ position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyparts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>

    </Stack>
  )
}

export default SearchExercises