import Navbar from "../Components/navbar/Navbar";
import Content from "../Components/PageContent/Content";
import { useState } from "react";
import TittleWebsite from "../Components/TittleWebsite";
import Footer from "../Components/footer/Footer";
import Profile from "./Profile";
import CarouselNew from "../Components/PageContent/components/CarouselNew";
import CarouselBiasa from "../Components/PageContent/components/CarouselBiasa";

export default function Home() {
  return (
    <main>
      <TittleWebsite />
      {/* <Flex> */}
      {/* <MenuBar data={data} /> */}
      {/* <CarouselBiasa/> */}
      <CarouselNew />
      <Content />
      {/* <Profile /> */}
      {/* </Flex> */}
      {/* <Pages/> */}
      <Footer />
    </main>
  );
}
