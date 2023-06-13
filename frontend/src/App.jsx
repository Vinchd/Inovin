import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import NotreSelection from "@pages/NotreSelection";
import Profil from "@pages/Profil";
import Lexique from "@pages/Lexique";
import Avis from "@pages/Avis";
import ProfilDegustation from "@pages/ProfilDegustation";
import Page404 from "@pages/Page404";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avis" element={<Avis />} />
      <Route path="/lexique" element={<Lexique />} />
      <Route path="/selection" element={<NotreSelection />} />
      <Route path="/profil" element={<Profil />} />
      <Route
        path="/profil/profil_degustation"
        element={<ProfilDegustation />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
