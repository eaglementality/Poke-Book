import { create } from "zustand";

const ColourOps = {
  colours: {
    pink: "#E85382"||'pink-500',
    blue: "#39BADF"||'sky-400',
    yellow: "#E1A725"||'yellow-500',
  },
  colour_holder: `#E85382`||'pink-500',
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
