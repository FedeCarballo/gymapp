import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'
import Footer from './Components/Footer/Footer';
import {IntlProvider} from 'react-intl';

function App() {
  return (
    <IntlProvider messages={{}}>
      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
            <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Exercise/:id" element={<ExerciseDetail /> }/>
        </Routes>
            <Footer />
      </Box>
    </IntlProvider>
  );
}

export default App;