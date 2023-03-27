
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Footer from './components/footer/Footer'
import Home from "./pages/Home"
import Login from './pages/Login'
import SignUp from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
        <NavigationBar/>
       <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
