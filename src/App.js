import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/Aboutus/About';
import Home from './Components/Home/Home';
import Teamcard from './Components/Team/Team';
import ContactUs from './Components/ContactUs/ContactUs';
// write a function to return navbar 
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Teamcard/>
    <ContactUs/>
    <Footer/>
    </>
  );
}

export default App;
