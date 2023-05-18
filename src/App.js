import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/main/Main';
import About from './about/About';
import Header from './components/header/Header';
// import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
