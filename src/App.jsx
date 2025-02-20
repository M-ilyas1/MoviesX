import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import TVshows from './Pages/TVshows';
import Movies from './Pages/Movies';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';

import ProtectedRoute from "./Components/ProtectedRoute";
import LogIn from './Components/Anth/Login'
import Signup from './Components/Anth/Signup'

import "./App.css";
import InProcessPage from "./Pages/InProcessPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ProtectedRoute Element={Home} />} />
        <Route path="/movies" element={<ProtectedRoute Element={Movies} />} />
        <Route path="/tvshows" element={<ProtectedRoute Element={TVshows} />} />
        <Route path="/about" element={<ProtectedRoute Element={About} />} />
        <Route path="/contact" element={<ProtectedRoute Element={Contact} />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path='/inprocess' element={<InProcessPage/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
