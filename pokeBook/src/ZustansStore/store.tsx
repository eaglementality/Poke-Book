import { create } from "zustand";

const ColourOps = {
  colours: {
    pink: `#E85382` ,
    blue: `#39BADF` ,
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


export const useGetAllPokeMonData = create((set)=>({
  PokeMonData:[],
  // GetPokeMonData:(PokeData:any)=>(set((state:any)=>({PokeMonData: [...state.PokeMonData, ...PokeData]})))
  GetPokeMonData:(PokeData:any)=>(set(()=>({PokeMonData: [ ...PokeData]})))
}))

