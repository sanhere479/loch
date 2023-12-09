import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: "Inter, sans-serif",
  headings: {
    fontFamily: "Inter, sans-serif",
    fontWeight: '500',
    sizes: {
      h1: {
        fontSize: rem(40),
        fontWeight: "500", 
      },
      h2: {
        fontSize: rem(30),
        fontWeight: "500", 
        lineHeight: rem(37.5),
      },
    },
  },

});
