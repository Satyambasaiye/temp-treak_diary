import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from '../home/HomePage'
import TrekInfo from '../TrekInfo/TrekInfo'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/description" element={<TrekInfo />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
