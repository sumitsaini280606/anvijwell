import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import Section_i from './components/Section_i';
// import Section_ii from './components/Section_ii';
// import Counter from './components/Counter';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';


function App() {
  return (
    <>

    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="aboutus" element={<Aboutus/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    
  </>
  );
}

export default App;
