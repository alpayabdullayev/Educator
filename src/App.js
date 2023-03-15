
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";


import { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";






import FirstSection from './Companents/FirstSection/FirstSection';
import Newest from './Companents/Newest/Newest';

import AOS from 'aos'
import'aos/dist/aos.css'


import Homes from './Pages/Homes';
import NotFound from './Pages/NotFound/NotFound';
import CoursesList from './Pages/CoursesList/CoursesList';
import KursPage2Container from './Pages/KursPages2/KursPage2Container';
import Faq from './Pages/Faq/Faq';
import ComingSoon from './Pages/ComingSoon/CoominaSoon'
import AboutMe from './Pages/AboutMe/AboutMe';
import Standart2ColumnsContainer from './Pages/Standart2Columns/Standart2ColumnsContainer';
import EventsListContainer from './Pages/EventsList/EventsListContainer';
import User from './Pages/UserDashboard/User';
import EventsSingle from './Pages/EventsSingle/EventsSingle';

AOS.init();

function App() {


  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
  <>

      <div>


      {
        loading ?
          <div className='loading-effect'>
            <HashLoader
              color={'#2d76b2'}
              loading={loading}
              size={90}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div> :


  
    <BrowserRouter>
      
    
      <Routes>
      

        <Route path='/' element={<Homes/>}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='courses-list-4-columns' element={<CoursesList />}/>
        <Route path='courses-list-4-columns/courses-list-4-columns/2' element={<KursPage2Container />}/>
        <Route path='faq' element={<Faq />}/>
        <Route path='aboutme' element={<AboutMe />}/>
        <Route path='standart2columns' element={<Standart2ColumnsContainer />}/>
        <Route path='eventslist' element={<EventsListContainer />}/>
        <Route path='userdashboard' element={<User />}/>
        <Route path='eventsingle' element={<EventsSingle />}/>
        {/* nestet root */}
        
        
        
      </Routes>

    </BrowserRouter>}

</div>
  
  
 
  
  
  </>
  );
}

export default App;
