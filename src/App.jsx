import { Route, Routes } from 'react-router-dom'
import Login from "./Components/Login.jsx"
import ScanQR from './Components/Scanner.jsx'

function App() {

  return (
  <Routes>
    <Route path="/login" Component={Login} />
    <Route path="/" Component={ScanQR} />
    <Route path="/scanner" Component={ScanQR} />
  </Routes>
  
  
  
  )
}

export default App
