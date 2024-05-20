import { useState } from "react";
import { useColourStore, useGetAllPokeMonData } from "../ZustansStore/store";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const theme = useColourStore((state: any) => state.colorTheme.colour_holder);
  const navigate = useNavigate();
  const searchFilter = useGetAllPokeMonData((state: any) => state.searchFilter);
  const SetRefresh = useGetAllPokeMonData((state: any) => state.setRefresh);
  const [searchText, setSearchText] = useState('')
  return (
    <main className="w-full -mt-24 grid justify-center">
      <div
        className={`laptop:w-[536px] tablet:w-[536px] mobile_L:w-[386px]  mobile_M:w-[356px] mobile_S:w-full p-2 border rounded-r-full rounded-l-full `}
        style={{ backgroundColor: `${theme}` }}
      >
        <div className="w-full border bg-[url('./assets/BackImage.png/')] bg-white flex  rounded-r-full rounded-l-full shadow-lg">
          <input
            type="text"
            onClick={(e:any) => {
              SetRefresh();
              setSearchText(e.target.value);
            }}
            className="w-full p-2 pl-4 font-sans  rounded-r-full  text-neutral-500 rounded-l-full bg-[url('./assets/BackImage.png/')]  mobile_S:text-lg laptop:text-2xl tablet:text-2xl"
            placeholder="Enter pokemon name"
          />
          <span
            className={`my-2 mx-2 p-2 border rounded-full shadow-lg cursor-pointer`}
            style={{ backgroundColor: `${theme}` }}
            onClick={() => {
              navigate("/ListView");
              searchFilter(searchText);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex place-items-center"
            >
              <path
                d="M14.2939 12.5786H13.3905L13.0703 12.2699C14.2297 10.9251 14.8669 9.20834 14.8656 7.43282C14.8656 5.96275 14.4297 4.52569 13.613 3.30337C12.7963 2.08105 11.6354 1.12837 10.2772 0.565793C8.91907 0.00322052 7.42457 -0.143974 5.98275 0.142823C4.54092 0.42962 3.21652 1.13753 2.17702 2.17702C1.13753 3.21652 0.42962 4.54092 0.142823 5.98275C-0.143974 7.42457 0.00322052 8.91907 0.565793 10.2772C1.12837 11.6354 2.08105 12.7963 3.30337 13.613C4.52569 14.4297 5.96275 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L12.5786 13.3905V14.2939L18.2962 20L20 18.2962L14.2939 12.5786ZM7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
      <span
        onClick={() => {
          navigate("/ListView");
        }}
        className="mt-4 underline cursor-pointer"
      >
        View all
      </span>
    </main>
  );
};
