/** Design tokens for consistent styling across the app. */
export const tokens = {
  colors: {
    background: "#0D0D1A",
    surface: "#1A1A2E",
    surfaceHover: "#252540",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0B8",
    accent: "#6C5CE7",
    accentLight: "#A29BFE",
    error: "#FF6B6B",
    success: "#51CF66",
  },

  moodColors: {
    1: "#FF6B6B", // Very negative — red
    2: "#FFA502", // Negative — orange
    3: "#FFD43B", // Neutral — yellow
    4: "#51CF66", // Positive — green
    5: "#6C5CE7", // Very positive — purple
  } as Record<number, string>,

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  radius: {
    sm: "6px",
    md: "12px",
    lg: "16px",
    full: "9999px",
  },
} as const;
