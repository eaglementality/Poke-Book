import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Pokemon_lib } from "./components/PokemonPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetAllPokeMonData } from "./ZustansStore/store";

function App() {
  const GetPokeMonData = useGetAllPokeMonData(
    (state: any) => state.GetPokeMonData
  );
  async function getPokemonData() {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=8&offset=0"
      );
      const pokemonList = response.data.results;
      const pokemonData = pokemonList.map(({ url }: any) => axios.get(url));
      const pokemonDataResponse = await Promise.all(pokemonData);
      const poke = pokemonDataResponse.map((res) => res.data);
      GetPokeMonData(poke);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  }

  useEffect(() => {
    getPokemonData();
    return () => {};
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ListView" element={<Pokemon_lib />} />
      </Routes>
    </Router>
  );
}

export default App;
