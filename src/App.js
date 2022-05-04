import About from "./components/About ";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      {/* <Home />
      <About />
      <Work />
      <Experience />
      <Contact /> */}
    </div>
  );
}

export default App;
