import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Pokemon_lib } from "./components/PokemonPage";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useGetAllPokeMonData } from "./ZustansStore/store";
// import { Pagination_UI } from "./widget/Pagination";

function App() {
  // const GetPokeMonData = useGetAllPokeMonData(
  //   (state: any) => state.GetPokeMonData
  // );
  // const [nextUrl, setNextUrl] = useState<any>(``);
  // const [prevUrl, setPrevUrl] = useState<any>(``);

  // const defaultUrl = useGetAllPokeMonData((state: any) => state.default);
  // const GetNextUrl = useGetAllPokeMonData((state: any) => state.GetNext);
  // const GetPrevUrl = useGetAllPokeMonData((state: any) => state.GetPrev);
  // const [currentUrl, setCurrentUrl] = useState(defaultUrl);

  // async function getPokemonData() {
  //   try {
  //     const response = await axios.get(`${defaultUrl}`);
  //     const pokemonList = response.data.results;
  //     const pokemonData = pokemonList.map(({ url }: any) => axios.get(url));
  //     const pokemonDataResponse = await Promise.all(pokemonData);
  //     const poke = pokemonDataResponse.map((res) => res.data);
  //     GetNextUrl(response.data.next);
  //     GetPrevUrl(response.data.prev);
  //     GetPokeMonData(poke);
  //   } catch (error) {
  //     console.error("Error fetching Pokémon data:", error);
  //   }
  // }
  // console.log(nextUrl);
  // console.log(prevUrl);

  // useEffect(() => {
  //   getPokemonData();
  //   return () => {};
  // }, [nextUrl, prevUrl]);

  return (
    <main className="bg-[url('./assets/BackImage.png/')] w-screen h-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ListView" element={<Pokemon_lib />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
