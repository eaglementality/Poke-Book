import { create } from "zustand";

const ColourOps = {
  colours: {
    pink: `#E85382`,
    blue: `#39BADF`,
    yellow: `#E1A725`,
  },

  colour_holder: `#E85382`,
};

type ColourOpsType = typeof ColourOps;

interface ColourState {
  colorTheme: ColourOpsType;
  changeColour: (colorType: keyof ColourOpsType["colours"]) => void;
}

export const useColourStore = create<ColourState>((set) => ({
  colorTheme: ColourOps,
  changeColour: (colorType) =>
    set((state) => {
      const newColor = state.colorTheme.colours[colorType];
      return {
        colorTheme: {
          ...state.colorTheme,
          colour_holder: newColor,
        },
      };
    }),
}));

export const useGetAllPokeMonData = create((set) => ({
  PokeMonData: [],
  default: `https://pokeapi.co/api/v2/pokemon?limit=8&offset=0`,
  next:'https://pokeapi.co/api/v2/pokemon?offset=8&limit=8',
  prev:null,
  page:8,
  refresh:false,
  setRefresh:() => set((state:any)=>({refresh: !state.refresh})),
  GetPokeMonData: (PokeData: any) => set(() => ({ PokeMonData: [...PokeData] })),
  GetNext: (url: string) => set({next : url}),
  GetPrev: (url: string) => set({prev : url}),
  SetNextUrl: (next: string) => set({ default: next }),
  SetPrevUrl: (prev: string) => set({default: prev }),
  SetLimit: (limit: string) => set({ default: limit }),
  SetPage: (limit: string) => set({ page: limit }),
  searchFilter:(text:string)=>set((state:any)=>(
    {
      PokeMonData: state.PokeMonData.filter((item:any) => {return item.name == text})
    }
  ))
}));


