import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AboutPage from './Components/Aboutus/AboutPage';
import HomePage from './Components/Home/HomeMain';
import Teamcard from './Components/Team/Team';
import ContactUs from './Components/ContactUs/ContactUs';
import Events from './Components/Events/Event'
import {Routes , Route} from 'react-router-dom';


// write a function to return navbar 
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/Team' element={<Teamcard/>}/>
      <Route path='/Events' element={ <Events/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
