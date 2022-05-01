import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portifolio from './pages/Portifolio';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="portifolio" element={ <Portifolio /> } />
      </Routes>
    </div>
  );
}

export default App;
