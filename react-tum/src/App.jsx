import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import Navbar from "./components/Navbar";
import Owner from "./page/Owner";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
     <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Owner' element={<Owner />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}