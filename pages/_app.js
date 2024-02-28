import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@/styles/globals.css";

import "@fontsource-variable/outfit";

// import "@fontsource/inter/100.css";
// import "@fontsource/inter/200.css";
// import "@fontsource/inter/300.css";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/500.css";
// import "@fontsource/inter/600.css";
// import "@fontsource/inter/700.css";
// import "@fontsource/inter/800.css";
// import "@fontsource/inter/900.css";

const theme = extendTheme({
  fonts: {
    primary: "Outfit Variable, sans-serif",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
