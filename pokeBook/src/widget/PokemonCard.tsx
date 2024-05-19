
interface prop {
  image?: any;
  name?: string;
  types?: string[];
}
export function PokemonCard({ image, name, types }: prop) {
  return (
    <main className="">
      <div className="p-2 items-center text-center border bg-white rounded-lg shadow-lg  ">
        <div className="items-center border px-10 bg-zinc-100 rounded-lg mb-5 ">
          <img src={image} className="overflow-visible -mt-[35%]" />
        </div>
        <p className="text-2xl mb-2 font-mono font-bold">{name}</p>
        <div className=" w-full justify-center item-center flex space-x-2">
          {types?.map(({type}:any,id) => (
            <span key={id} className="bg-zinc-100 text-center font-mono border rounded-xl p-1">
              {type?.name}
            </span>
          ))}
        </div>
        <div className="mt-8  flex justify-between p-2 rounded-lg bg-pink-400 max-h-0 overflow-hidden transition-all duration-300 ease-in-out hover:max-h-40">
          <span className="font-sans">{`View Pokemon`}</span>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-2"
          >
            <path
              d="M9.99992 0.75C5.83325 0.75 2.27492 3.34167 0.833252 7C2.27492 10.6583 5.83325 13.25 9.99992 13.25C14.1666 13.25 17.7249 10.6583 19.1666 7C17.7249 3.34167 14.1666 0.75 9.99992 0.75ZM9.99992 11.1667C7.69992 11.1667 5.83325 9.3 5.83325 7C5.83325 4.7 7.69992 2.83333 9.99992 2.83333C12.2999 2.83333 14.1666 4.7 14.1666 7C14.1666 9.3 12.2999 11.1667 9.99992 11.1667ZM9.99992 4.5C8.61659 4.5 7.49992 5.61667 7.49992 7C7.49992 8.38333 8.61659 9.5 9.99992 9.5C11.3833 9.5 12.4999 8.38333 12.4999 7C12.4999 5.61667 11.3833 4.5 9.99992 4.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
