import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import SingUp from './pages/signup/SingUp'
import {Routes,Route} from 'react-router-dom'
function App() {
 return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<SingUp/>}/>
      </Routes>
      
    </div>
  )
}

export default App
