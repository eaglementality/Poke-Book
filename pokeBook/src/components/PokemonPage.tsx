import logo from "../assets/PokemonLogoSmall.png";
import backgroundImage from "../assets/BackImage.png";
import { SearchBar_2 } from "../widget/SearchBar2";
import { useNavigate } from "react-router-dom";
import { useColourStore, useGetAllPokeMonData } from "../ZustansStore/store";
import { PokemonCard } from "../widget/PokemonCard";
import { ConfigProvider, Modal} from "antd";
import { useState } from "react";
import { Pagination_UI } from "../widget/Pagination";

export function Pokemon_lib() {
  const theme = useColourStore((state: any) => state.colorTheme.colour_holder);
  const PokemonData = useGetAllPokeMonData((state: any) => state.PokeMonData);
  

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [themeBorder, setThemeBorder] = useState({
    pink_Border: false,
    blue_Border: false,
    yellow_Border: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // const [totalItems, setTotalItems] = useState(100); // Example total number of items

  const totalPages = Math.ceil(100 / pageSize);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: any) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when page size changes
  };
  const modalStyles = {
    header: {
      borderLeft: ``,
      borderRadius: 5,
      paddingInlineStart: 0,
      padding: "5px",
    },
    body: {
      boxShadow: "border",
      borderRadius: 5,
      outerHeight: "70px",
      outerWidth: "70px",
    },
    mask: {
      backdropFilter: "blur(3px)",
      backgroundImage: `URL(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    content: {
      padding: "0px",
    },
  };
 console.log(PokemonData);
  return (
    <>
      <ConfigProvider
        modal={{
          styles: modalStyles,
        }}
      >
        <Modal
          title={`Choose Theme`}
          open={isModalOpen}
          centered
          footer={null}
          maskClosable={true}
          closeIcon={null}
          mask={true}
          onCancel={() => setIsModalOpen(false)}
          className="text-2xl font-mono text-center"
          width={"427px"}
        >
          <div className="left-0 right-0  py-10 flex justify-center gap-2 bg-[url('./assets/BackImage.png/')] ">
            {" "}
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 w-[15%] h-[15%] cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setThemeBorder((prev) => ({
                  ...prev,
                  pink_Border: true,
                  blue_Border: false,
                  yellow_Border: false,
                }));
              }}
            >
              <rect
                x="5.09424"
                y="5.09433"
                width="34.8113"
                height="34.8113"
                rx="17.4057"
                fill={"#E85382"}
              />
              <rect
                x="0.5"
                y="0.5"
                width="44"
                height="44"
                rx="22"
                stroke={`${themeBorder.pink_Border && "#868686"}`}
              />
            </svg>{" "}
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 w-[15%] h-[15%] cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setThemeBorder((prev) => ({
                  ...prev,
                  pink_Border: false,
                  blue_Border: true,
                  yellow_Border: false,
                }));
              }}
            >
              <rect
                x="5.09424"
                y="5.09433"
                width="34.8113"
                height="34.8113"
                rx="17.4057"
                fill={"#39BADF"}
              />
              <rect
                x="0.5"
                y="0.5"
                width="44"
                height="44"
                rx="22"
                stroke={`${themeBorder.blue_Border && "#868686"} `}
              />
            </svg>{" "}
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 w-[15%] h-[15%] cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setThemeBorder((prev) => ({
                  ...prev,
                  pink_Border: false,
                  blue_Border: false,
                  yellow_Border: true,
                }));
              }}
            >
              <rect
                x="5.09424"
                y="5.09433"
                width="34.8113"
                height="34.8113"
                rx="17.4057"
                fill={`#E1A725`}
              />
              <rect
                x="0.5"
                y="0.5"
                width="44"
                height="44"
                rx="22"
                stroke={`${themeBorder.yellow_Border && "#868686"} `}
              />
            </svg>
          </div>
        </Modal>
      </ConfigProvider>
      <main className="bg-[url('./assets/BackImage.png/')] w-screen h-screen">
        <nav className=" w-full h-20 border shadow-lg">
          <div className="ml-10 mr-12 flex justify-between ">
            <div className="w-84 flex space-x-2  ">
              <img
                className="mt-3 laptop_L:w-full laptop:w-full mobile_S:w-20 mobile_M:w-20 mobile_L:w-20"
                src={logo}
              />
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="font-sans font-bold text-2xl pt-6 pb-4 cursor-default laptop_L:block laptop:block mobile_S:hidden mobile_M:hidden  mobile_L:hidden"
              >
                <span className="">{`Poke`}</span>
                <span className="text-pink-400">{`book`}</span>
              </div>
            </div>
            <SearchBar_2 />
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
        <section className="w-full grid grid-flow-col justify-center  item-center">
          <div className="grid grid-cols-4 justify-center gap-4 pt-[76px] ">
           {PokemonData.map(({sprites,types,name}:any) => <PokemonCard image={sprites?.other.showdown?.front_default} types={types} name={name}/>)}
          </div>
        </section>
        <footer className="w-full fixed bottom-5 flex justify-center items-center">
          <Pagination_UI
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        </footer>
      </main>
    </>
  );
}
