import './App.css';
import Homepage from './components/Homepage';
import Contactus from './components/Contactus';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <Header />
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/contact" element={<Contactus/>}></Route>
    </Routes>
    </Router>
  </>
  );
} 

export default App;
