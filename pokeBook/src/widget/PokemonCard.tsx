import { Drawer, Progress } from "antd";
import { useColourStore } from "../ZustansStore/store";
import { useState } from "react";
interface prop {
  image?: any;
  name?: string;
  types?: string[];
  stat?: any;
}
export function PokemonCard({ image, name, types, stat }: prop) {
  const theme = useColourStore((state: any) => state.colorTheme.colour_holder);
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        title="Basic Drawer"
        onClose={() => {
          setOpenDrawer(false);
        }}
        open={openDrawer}
        width={659}
        closeIcon={null}
        headerStyle={{ display: "none" }}
      >
        <main className="w-full -mt-4 justify-center  p-2 grid grid-flow-row">
          <div className="relative w-[624px] grid grid-col justify-items-center  border rounded-lg bg-gradient-to-t from-teal-500 to-emerald-300">
            <div
              className="absolute left-0 border rounded-lg px-4 py-4 bg-white w-16 h-16 m-2 mb-5 cursor-pointer"
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7001 23.0333C13.9668 22.7667 14.0948 22.4445 14.0841 22.0667C14.0734 21.6889 13.9343 21.3667 13.6668 21.1L9.90009 17.3333H24.7668C25.1445 17.3333 25.4614 17.2053 25.7174 16.9493C25.9734 16.6933 26.101 16.3769 26.1001 16C26.1001 15.6222 25.9721 15.3053 25.7161 15.0493C25.4601 14.7933 25.1436 14.6658 24.7668 14.6667H9.90009L13.7001 10.8667C13.9668 10.6 14.1001 10.2831 14.1001 9.91601C14.1001 9.5489 13.9668 9.23246 13.7001 8.96668C13.4334 8.70001 13.1165 8.56668 12.7494 8.56668C12.3823 8.56668 12.0659 8.70001 11.8001 8.96668L5.70009 15.0667C5.56676 15.2 5.47209 15.3445 5.41609 15.5C5.36009 15.6556 5.33253 15.8222 5.33342 16C5.33342 16.1778 5.36143 16.3445 5.41743 16.5C5.47343 16.6556 5.56765 16.8 5.70009 16.9333L11.8334 23.0667C12.0779 23.3111 12.3832 23.4333 12.7494 23.4333C13.1156 23.4333 13.4325 23.3 13.7001 23.0333Z"
                  fill="black"
                />
              </svg>
            </div>
            <img className="w-64 -m-10 mt-16" src={image} />
          </div>
          <section className=" mt-20">
            <div className="grid grid-rows justify-items-center text-center">
              <p className="text-5xl mb-2 font-mono font-bold">{name}</p>
              <div className="flex gap-2">
                {types?.map(({ type }: any, id) => (
                  <span
                    key={id}
                    className="bg-zinc-100 text-center font-mono border rounded-xl p-1"
                  >
                    {type?.name}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="mt-20 grid grid-rows justify-items-center">
            <div className="grid grid-rows  text-center">
              <p className="text-2xl mb-2 font-mono font-bold">{`Stats`}</p>
              <div>
                <span className="grid grid-flow-row text-right">
                  {stat.map((stats: any) => (
                    <div className="flex gap-5">
                      <label>{stats.stat.name}:</label>
                      <Progress percent={stats.base_stat} />
                    </div>
                  ))}
                </span>
              </div>
            </div>
            <div className="w-64 flex justify-between  border rounded-l-full rounded-r-full p-2">
              <span>About</span>
              <span>Stats</span>
              <span>Similar</span>
            </div>
          </section>
        </main>
      </Drawer>
      <main className="">
        <div className="p-2 items-center text-center border bg-white rounded-lg shadow-lg  ">
          <div className="items-center border px-10 bg-zinc-100 rounded-lg mb-5 ">
            <img src={image} className="overflow-visible -mt-[35%]" />
          </div>
          <p className="text-2xl mb-2 font-mono font-bold">{name}</p>
          <div className=" w-full justify-center item-center flex space-x-2">
            {types?.map(({ type }: any, id) => (
              <span
                key={id}
                className="bg-zinc-100 text-center font-mono border rounded-xl p-1"
              >
                {type?.name}
              </span>
            ))}
          </div>
          <div
            style={{ backgroundColor: `${theme}` }}
            className="mt-8  flex justify-between p-2 rounded-lg max-h-0 overflow-hidden transition-all duration-300 ease-in-out hover:max-h-40"
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
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
    </>
  );
}
