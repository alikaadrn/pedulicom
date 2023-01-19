import {React} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import Artikel from "./components/Artikel";
import Kampanye from "./components/Kampanye";
import Program from "./components/Program";

function App() {
  return (
    <>
    <Routes>
    <Route path="/Artikel" element={<Artikel />} />
    <Route path="/Kampanye" element={<Kampanye />} />
    <Route path="/Program" element={<Program />} />

    </Routes>
    </>
  )
}

export default App;