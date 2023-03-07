
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";



import FirstNavbar from './Companents/FirstNavbar/FirstNavbar';
import SecondaNavbar from './Companents/SecondNavbar/SecondaNavbar';
import FirstSection from './Companents/FirstSection/FirstSection';
import Newest from './Companents/Newest/Newest';

import AOS from 'aos'
import'aos/dist/aos.css'
import FourMan from './Companents/FourMan/FourMan';
import Parallaxdi from './Companents/Parallaxdi/Parallaxdi';

import CoursesContainer from './Companents/Courses/CoursesContainer';
import StudyingContainer from './Companents/Studying/StudyingContainer';
import Footer from './Companents/Footer/Footer';
import Signup from './Companents/Signup/Signup';
import Header from './Companents/Header/Header'
import Axmed from './Companents/AXMED/Axmed';
import Homes from './Pages/Homes';
import NotFound from './Pages/NotFound/NotFound';
import CoursesList from './Pages/CoursesList/CoursesList';
import KursPage2Container from './Pages/KursPages2/KursPage2Container';
import Faq from './Pages/Faq/Faq';

AOS.init();

function App() {
  return (
  <>


  
    <BrowserRouter>
      
    
      <Routes>
      

        <Route path='/' element={<Homes/>}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='courses-list-4-columns' element={<CoursesList />}/>
        <Route path='courses-list-4-columns/2' element={<KursPage2Container />}/>
        <Route path='faq' element={<Faq />}/>
        
        
      </Routes>

    </BrowserRouter>


  
  
 
  
  
  </>
  );
}

export default App;
