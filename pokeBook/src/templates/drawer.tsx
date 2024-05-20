import { Drawer, Progress } from "antd";
import { useState } from "react";

interface prop {
  image?: any;
  name?: string;
  types?: string[];
  stat?: any;
  height?: any;
  weight?: any;
  abilities?: any;
  openDrawer?: boolean;
  setOpenDrawer?: (openDrawer: boolean) => void;
}
export const DrawerTemplate = ({
  image,
  name,
  types,
  stat,
  height,
  weight,
  abilities,
  openDrawer,
  setOpenDrawer,
}: prop) => {
  //   const [openDrawer, setOpenDrawer] = useState(false);
  const [StatsBgColour, setStatsBgColour] = useState({
    about_Bg: true,
    stats_Bg: false,
    similar_Bg: false,
  });
  const Status = () => {
    return (
      <>
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
      </>
    );
  };
  const Similar = () => {
    return (
      <>
        <p className="text-2xl mb-2 font-mono font-bold">{`Similar`}</p>{" "}
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
      </>
    );
  };
  const About = () => {
    return (
      <>
        <p className="text-2xl mb-2 font-mono font-bold">{`About`}</p>{" "}
        <div className="grid grid-flow-row">
          <p className="flex gap-[30%]">
            <span className="text-right text-xl">{`Height:`}</span>
            <span className="text-xl font-bold text-left">{height}</span>
          </p>
          <p className="flex gap-[30%]">
            <span className="text-right text-xl">{`weight:`}</span>
            <span className="text-xl font-bold text-left">{weight}</span>
          </p>
          <p className="flex gap-[25%]">
            <span className="text-right text-xl">{`Abilities:`}</span>
            <span className="grid grid-flow-row text-xl text-left font-bold">
              {abilities.map((item: any, id: number) => (
                <ul>
                  <li key={id}>.{item.ability.name}</li>
                </ul>
              ))}
            </span>
          </p>
        </div>
      </>
    );
  };
  return (
    <Drawer
      title="Basic Drawer"
      onClose={() => {
        setOpenDrawer && setOpenDrawer(false);
      }}
      open={openDrawer}
      width={659}
      closeIcon={null}
      headerStyle={{ display: "none" }}
    >
      <main className="w-full -mt-4  p-2 grid grid-flow-row">
        <div className="relative w-[624px] grid grid-col justify-items-center  border rounded-lg bg-gradient-to-t from-teal-500 to-emerald-300">
          <div
            className="absolute left-0 border rounded-lg px-4 py-4 bg-white w-16 h-16 m-2 mb-5 cursor-pointer"
            onClick={() => {
              setOpenDrawer && setOpenDrawer(false);
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
            {StatsBgColour.about_Bg && <About />}
            {StatsBgColour.stats_Bg && <Status />}
            {StatsBgColour.similar_Bg && <Similar />}
          </div>
          <div
            className="w-[55%] flex mt-20 justify-between  border rounded-l-full rounded-r-full p-5"
            style={{ backgroundColor: "#E9E9E9" }}
          >
            <span
              className={`cursor-pointer p-2 px-5 border rounded-l-full rounded-r-full text-lg font-sans ${
                StatsBgColour.about_Bg && "bg-white shadow-lg"
              } hover:bg-white hover:shadow-lg`}
              onClick={() => {
                setStatsBgColour((prev) => ({
                  ...prev,
                  about_Bg: true,
                  stats_Bg: false,
                  similar_Bg: false,
                }));
              }}
            >
              About
            </span>
            <span
              className={`cursor-pointer p-2 px-5 border rounded-l-full rounded-r-full text-lg font-sans ${
                StatsBgColour.stats_Bg && "bg-white shadow-lg"
              } hover:bg-white hover:shadow-lg`}
              onClick={() => {
                setStatsBgColour((prev) => ({
                  ...prev,
                  about_Bg: false,
                  stats_Bg: true,
                  similar_Bg: false,
                }));
              }}
            >
              Stats
            </span>
            <span
              className={`cursor-pointer p-2 px-5 border rounded-l-full rounded-r-full text-lg font-sans ${
                StatsBgColour.similar_Bg && "bg-white shadow-lg"
              } hover:bg-white hover:shadow-lg`}
              onClick={() => {
                setStatsBgColour((prev) => ({
                  ...prev,
                  about_Bg: false,
                  stats_Bg: false,
                  similar_Bg: true,
                }));
              }}
            >
              Similar
            </span>
          </div>
        </section>
      </main>
    </Drawer>
  );
};
