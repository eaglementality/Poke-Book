import logo from "../assets/PokemonLogoSmall.png";
import { SearchBar_2 } from "../widget/SearchBar2";
import { useNavigate } from "react-router-dom";
import { useColourStore, useGetAllPokeMonData } from "../ZustansStore/store";
import { PokemonCard } from "../widget/PokemonCard";
import { useEffect, useState } from "react";
import { Pagination_UI } from "../widget/Pagination";
import axios from "axios";
import { ModalTemplate } from "../templates/ModalTemplate";
import { BeatLoader } from "react-spinners";

export function Pokemon_lib() {
  const theme = useColourStore((state: any) => state.colorTheme.colour_holder);

  const PokemonData = useGetAllPokeMonData((state: any) => state.PokeMonData);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const GetPokeMonData = useGetAllPokeMonData(
    (state: any) => state.GetPokeMonData
  );
  const defaultUrl = useGetAllPokeMonData((state: any) => state.default);

  const GetNextUrl = useGetAllPokeMonData((state: any) => state.GetNext);
  const GetPrevUrl = useGetAllPokeMonData((state: any) => state.GetPrev);

  const refresh = useGetAllPokeMonData((state: any) => state.refresh);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const [searchtext, setSearchtext] = useState("");
  const [loading, setLoading] = useState(false);
  const getPokemonData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setLoading(true)
      if (response.status === 200) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        setLoading(false) 
      }
      const pokemonList = response.data.results;
      const pokemonData = pokemonList.map(({ url }: any) => axios.get(url));
      const pokemonDataResponse = await Promise.all(pokemonData);
      const poke = pokemonDataResponse.map((res) => res.data);

      GetPokeMonData(poke);
      GetNextUrl(response.data.next);
      GetPrevUrl(response.data.prev);
      setTotalPages(Math.ceil(response.data.count / pageSize)); // Update total pages
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
    0;
  };

  useEffect(() => {
    getPokemonData(defaultUrl);
  }, [defaultUrl, pageSize, refresh]);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    const offset = (page - 1) * pageSize;
    getPokemonData(
      `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
    );
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when page size changes
    getPokemonData(`https://pokeapi.co/api/v2/pokemon?limit=${size}&offset=0`);
  };
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center p-5">
        <BeatLoader color={theme} />
      </div>
    );
  }
  return (
    <>
      <ModalTemplate
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <main className="w-full h-full flex flex-col">
        <nav className=" w-full h-20 border shadow-lg relative">
          <div className="ml-10 mr-12 flex justify-between laptop:ml-10 laptop:mr-12 mobile_S:ml-2 mobile_S:mr-4">
            <div className="w-84 flex space-x-1">
              <img
                className="mt-3"
                src={logo}
              />
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="font-sans font-bold text-2xl pt-6 pb-4 cursor-default laptop_L:block laptop:block mobile_S:hidden mobile_M:hidden  mobile_L:hidden"
              >
                <span className="">{`Poke`}</span>
                <span className="" style={{ color: `${theme}` }}>{`book`}</span>
              </div>
            </div>
            <SearchBar_2 text={searchtext} changeSearchText={setSearchtext} />
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <rect
                x="5.09424"
                y="5.09433"
                width="34.8113"
                height="34.8113"
                rx="17.4057"
                fill={theme}
              />
              <rect
                x="0.5"
                y="0.5"
                width="44"
                height="44"
                rx="22"
                stroke="#868686"
              />
            </svg>
          </div>
        </nav>

        <section className="flex item-center justify-center w-full h-full p-[5%] mobile_S:p-[2%] mobile_M:p-[2%]  overflow-y-auto">
          <div
            className={`px-6 py-10 w-2/3 h-1/2 gap-x-20 grid mobile_S:grid-cols-1 mobile_S:px-2 tablet:grid-cols-2 laptop:grid-cols-3  laptop_L:grid-cols-4  mobile_M:px-2 mobile_M:grid-cols-1`}
          >
            {PokemonData.map(
              ({
                sprites,
                types,
                name,
                stats,
                height,
                weight,
                abilities,
              }: any) => (
                <div className="">
                  <PokemonCard
                    image={sprites?.other.showdown?.front_default}
                    types={types}
                    name={name}
                    stat={stats}
                    height={height}
                    weight={weight}
                    abilities={abilities}
                  />
                </div>
              )
            )}
          </div>
        </section>
        <div className="flex justify-center items-center px-[3%] shadow-lg border-t p-2">
          <Pagination_UI
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        </div>
      </main>
    </>
  );
}
