
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Components/Service';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Features from './Pages/Features';

function App() {
  return (
    <>
      <Nav />
      {/* <Home/> */}

      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/services" element={<Service />}>
          </Route>
          <Route path="/project" element={<Project />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/feature" element={<Features />}>
          </Route>


        </Routes></BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
