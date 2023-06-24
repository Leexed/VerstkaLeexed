import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoursesPage from './pages/courses';
import HomePage from './pages/home';
import { HeaderPage } from './pages/header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/courses'} element={<CoursesPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
