import { Box, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Produk from "./Produk";

export default function Home() {
  return (
    <>
      <Box>
        <Navbar />
        <Banner />
        <Produk/>
      </Box>
    </>
  );
}
