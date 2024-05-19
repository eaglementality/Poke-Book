import pokemon from "../assets/PokeImage.png";

interface prop{
    image?:any;
    name?:string;
    types?:string[];
}
export function PokemonCard({image,name,types}:prop) {
  return (
    <main>
      <div className="p-2 items-center text-center border bg-white rounded-lg shadow-lg">
        <div className="items-center border px-10 bg-zinc-100 rounded-lg mb-5 ">
          <img src={pokemon} className="-mt-[35%]" />
        </div>
        <p className="text-2xl mb-2 font-mono font-bold">{`charizard`}</p>
        <div className=" w-full justify-center item-center flex space-x-2">
          <span className="bg-zinc-100 text-center font-mono border rounded-xl p-1">fire</span>
          <span className="bg-zinc-100 text-center font-mono border rounded-xl p-1">flying</span>
        </div>
      </div>
    </main>
  );
}
