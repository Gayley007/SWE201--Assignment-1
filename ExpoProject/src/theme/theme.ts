// ThemeName limits mode values to only two valid options.
export type ThemeName = "light" | "dark";

// AppTheme defines all color tokens used across screens.
export type AppTheme = {
  name: ThemeName;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    subText: string;
    border: string;
    success: string;
  };
};

// Light palette for default daytime UI.
export const lightTheme: AppTheme = {
  name: "light",
  colors: {
    primary: "#1769aa",
    background: "#f4f7fb",
    card: "#ffffff",
    text: "#1c2430",
    subText: "#5d6875",
    border: "#d7dfeb",
    success: "#1b8a5a",
  },
};

// Dark palette used when user toggles dark mode.
export const darkTheme: AppTheme = {
  name: "dark",
  colors: {
    primary: "#66b2ff",
    background: "#121720",
    card: "#1a2230",
    text: "#e7edf7",
    subText: "#a8b6cc",
    border: "#2d3748",
    success: "#5fd09b",
  },
};
