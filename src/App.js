
import './App.css';
import Home from "./pages/home";
import Contact from './pages/contact';
import NoPage from './pages/nopage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
