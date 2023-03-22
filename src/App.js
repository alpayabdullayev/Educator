
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";


import { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";








import AOS from 'aos'
import'aos/dist/aos.css'


import Homes from './Pages/Homes';
import NotFound from './Pages/NotFound/NotFound';
import CoursesList from './Pages/CoursesList/CoursesList';
import KursPage2Container from './Pages/KursPages2/KursPage2Container';
import Faq from './Pages/Faq/Faq';
import ComingSoon from './Pages/ComingSoon/CoomingSoon'
import AboutMe from './Pages/AboutMe/AboutMe';
import Standart2ColumnsContainer from './Pages/Standart2Columns/Standart2ColumnsContainer';
import EventsListContainer from './Pages/EventsList/EventsListContainer';
import User from './Pages/UserDashboard/User';
import EventsSingle from './Pages/EventsSingle/EventsSingle';
import ContactUs from './Pages/ContactUs/ContactUs';
import OurTeacher from './Pages/OurTeacher/OurTeacher';
import About from './Pages/About/About';
import KursSingle from './Pages/KursSingle/KursSingle';
import ScrollHander from './Companents/ScrollHander';
import Blog from './Pages/Blog/Blog';

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
    <ScrollHander/>
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
        <Route path='/courses-list-4-columns' element={<CoursesList />}/>
        <Route path='/courses-list-4-columns/courses-list-4-columns/2' element={<KursPage2Container />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/aboutme' element={<AboutMe />}/>
        <Route path='/standart2columns' element={<Standart2ColumnsContainer />}/>
        <Route path='/eventslist' element={<EventsListContainer />}/>
        <Route path='/userdashboard' element={<User />}/>
        <Route path='/eventsingle' element={<EventsSingle />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/ourteacher' element={<OurTeacher />}/>
        <Route path='/ourteacher' element={<OurTeacher />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/coursesingle' element={<KursSingle/>}/>
        <Route path='/coomingsoon' element={<ComingSoon />} />
        <Route path='/blog' element={<Blog />} />
        
        {/* nestet root */}
        
        
        
      </Routes>

    </BrowserRouter>}

</div>
  
  
 
  
  
  </>
  );
}

export default App;
