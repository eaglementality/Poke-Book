import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Pokemon_lib } from "./components/PokemonPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/ListView" element={<Pokemon_lib/>}/>
      </Routes>
    </Router>
  );
}

export default App;
