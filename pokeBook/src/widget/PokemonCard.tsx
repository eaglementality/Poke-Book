import { Button } from "antd";
import { useColourStore } from "../ZustansStore/store";
import { useState } from "react";
import { DrawerTemplate } from "../templates/drawer";
interface prop {
  image?: any;
  name?: string;
  types?: string[];
  stat?: any;
  height?: any;
  weight?: any;
  abilities?: any;
}
export function PokemonCard({
  image,
  name,
  types,
  stat,
  height,
  weight,
  abilities,
}: prop) {
  const theme = useColourStore((state: any) => state.colorTheme.colour_holder);
  const [openDrawer, setOpenDrawer] = useState(false);

  const pokeEmojis = {
    ghost: "👻",
    poison: "☠️",
    normal: "🐻",
    flying: "🦋",
    grass: "🌿",
    fire: "🔥",
    water: "💧",
    electric: "⚡",
    ground: "🏜",
    rock: "🏞️",
    bug: "🐞",
    psychic: "🧠",
    ice: "❄️",
    dragon: "🐉",
    dark: "🌑",
    steel: "⚙️",
    fairy: "🧚‍♀️",
    fighting: "🥊",
  };
  function getPokeEmoji(type: string) {
    console.log(type);
    return pokeEmojis[type as keyof typeof pokeEmojis] || "❔";
  }

  return (
    <>
      <DrawerTemplate
        image={image}
        name={name}
        types={types}
        stat={stat}
        height={height}
        weight={weight}
        abilities={abilities}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      {/* <main className=" flex justify-center  mx-6 my-5">
        <div className=" grid w-[400px] h-[300px]  bg-white cursor-pointer justify-items-center rounded-t-[20px]  py-2.5">
          <div className="size-full px-2.5">
            <div className="flex  w-full items-center justify-center rounded-[15px] bg-[#F1F1F1] px-2.5 h-[148px]">
              <img
                className="relative -top-12 w-[110.9px]"
                src={image}
                alt={"image"}
              />
            </div>
          </div>
          <p className="px-2.5 text-2xl font-medium">{name}</p>
          <ul className="relative z-20 flex w-full items-center justify-center gap-x-2.5 bg-background px-2.5">
            {types?.map(({ type }: any, id) => (
              <li
                key={id}
                className="flex items-center justify-center gap-x-1 rounded-full bg-[#EEEEEE] px-[12px] py-[4px] font-sans capitalize"
              >
                <span>{getPokeEmoji(type?.name)}</span>
                {type?.name}
              </li>
            ))}
          </ul>
          <div
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <Button
              className="w-full justify-between group-hover:flex"
              style={{ backgroundColor: theme }}
            >
              <span>View Pokemon</span>
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-1"
              >
                <path
                  d="M9.99992 0.75C5.83325 0.75 2.27492 3.34167 0.833252 7C2.27492 10.6583 5.83325 13.25 9.99992 13.25C14.1666 13.25 17.7249 10.6583 19.1666 7C17.7249 3.34167 14.1666 0.75 9.99992 0.75ZM9.99992 11.1667C7.69992 11.1667 5.83325 9.3 5.83325 7C5.83325 4.7 7.69992 2.83333 9.99992 2.83333C12.2999 2.83333 14.1666 4.7 14.1666 7C14.1666 9.3 12.2999 11.1667 9.99992 11.1667ZM9.99992 4.5C8.61659 4.5 7.49992 5.61667 7.49992 7C7.49992 8.38333 8.61659 9.5 9.99992 9.5C11.3833 9.5 12.4999 8.38333 12.4999 7C12.4999 5.61667 11.3833 4.5 9.99992 4.5Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
      </main> */}

      <article className="flex h-[20rem] w-[20rem] flex-col border shadow-lg rounded-lg bg-white p-3 overflow-hidden hover:h-[28rem]  transition ease-in-out duration-500 scale-y-90">
        <span className="flex flex-col items-center py-2 flex-1">
          <span className="flex px-10 py-10 justify-center rounded-lg bg-stone-200 w-full">
            <img
              className="relative -top-12 w-[110.9px] h-[110.9px]"
              src={image}
              alt={"image"}
            />
          </span>
          <p className="mt-5 mb-2 px-2.5 text-2xl font-bold text-neutral-800">{name}</p>
          <p className="text-base text-neutral-600 ">
            {" "}
            <ul className="relative z-20 flex w-full items-center justify-center gap-x-2.5 bg-background px-2.5">
              {types?.map(({ type }: any, id) => (
                <li
                  key={id}
                  className="flex items-center justify-center gap-x-1 rounded-full bg-[#EEEEEE] px-[12px] py-[4px] font-sans capitalize"
                >
                  <span>{getPokeEmoji(type?.name)}</span>
                  {type?.name}
                </li>
              ))}
            </ul>
          </p>
        </span>
        {/* <button className="mt-16 block transition ease-in-out duration-300 rounded-xl bg-fuchsia-400 px-3 py-1 font-bold text-stone-50">
          View Pokemon
        </button> */}
         <div
            onClick={() => {
              setOpenDrawer(true);
            }}
            className="mt-16"
          >
            <Button
              className="w-full justify-between flex"
              style={{ backgroundColor: theme }}
            >
              <span>View Pokemon</span>
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-1"
              >
                <path
                  d="M9.99992 0.75C5.83325 0.75 2.27492 3.34167 0.833252 7C2.27492 10.6583 5.83325 13.25 9.99992 13.25C14.1666 13.25 17.7249 10.6583 19.1666 7C17.7249 3.34167 14.1666 0.75 9.99992 0.75ZM9.99992 11.1667C7.69992 11.1667 5.83325 9.3 5.83325 7C5.83325 4.7 7.69992 2.83333 9.99992 2.83333C12.2999 2.83333 14.1666 4.7 14.1666 7C14.1666 9.3 12.2999 11.1667 9.99992 11.1667ZM9.99992 4.5C8.61659 4.5 7.49992 5.61667 7.49992 7C7.49992 8.38333 8.61659 9.5 9.99992 9.5C11.3833 9.5 12.4999 8.38333 12.4999 7C12.4999 5.61667 11.3833 4.5 9.99992 4.5Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
      </article>
    </>
  );
}
