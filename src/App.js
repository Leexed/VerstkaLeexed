import logo from './logo.svg';
import './styles/text.scss'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoursesPage from './pages/courses';
import HomePage from './pages/home';
import SketchingPage from './pages/sketching';
import GhotingPage from './pages/ghoting';
import FashionPage from './pages/fashion';
import { HeaderPage } from './pages/header';
import Footer from './pages/footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage/>
          <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/courses'} element={<CoursesPage/>}/>
            <Route path={'/sketching'} element={<SketchingPage/>}/>
            <Route path={'/ghoting'} element={<GhotingPage/>}/>
            <Route path={'/fashion'} element={<FashionPage/>}/>
        </Routes>
        <Footer/>
    
      </BrowserRouter>
      
    </div>
  );
}

export default App;
