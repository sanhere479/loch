import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme"; 
import Whales from "./Whales";

export default function App() {
  return <MantineProvider theme={theme}>
    <Whales />
  </MantineProvider>;
}
