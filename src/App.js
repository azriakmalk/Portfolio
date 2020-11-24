// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import About from './component/AboutUs'
import Parallax from './component/Parallax'
import Portfolio from './component/Portfolio'
import Contact from './component/ContactUs'
import Footer from './component/Footer'
import 'materialize-css/dist/css/materialize.min.css'



function App() {  
  return (
    <div>
      <Navbar/> 
      <Slider/>
      <About/>
      <Parallax/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
