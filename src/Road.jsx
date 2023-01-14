import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login, Register, Home } from "./pages"


function Road() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/home" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default Road
