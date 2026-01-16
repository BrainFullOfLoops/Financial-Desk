import './App.css'
import { Routes, Route } from "react-router";
import { Nav } from './Components/Nav';
import { Home } from './Components/Home';
import { Menu } from './Components/Menu';

function App() {

  return (
    <div style={{ backgroundColor: 'rgb(255, 255, 255)' }} className='w-full overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<><Nav /><Home /></>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App
