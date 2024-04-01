import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import SingUp from './pages/signup/SingUp'
import {Routes,Route, Navigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './contexts/AuthContext'
function App() {
  const {authUser} = useAuthContext();
  console.log(authUser)
 return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
         <Route path='/' element={authUser ?<Home/> : <Navigate to={"/login"}/>}/>
         <Route path='/login' element={authUser ?<Navigate to ='/'/> :<Login/>}/>
         <Route path='/signup' element={authUser ?<Navigate to ='/'/> : <SingUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
