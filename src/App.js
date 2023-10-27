import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Authenication from './Components/Authenication';

function App() {
  return (
    <div className="App">
     <Routes>
      // Your routes here
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Authenication />}/>
      <Route path='/register' element={<Authenication register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>



     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
