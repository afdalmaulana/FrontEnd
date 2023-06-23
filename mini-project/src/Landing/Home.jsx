import Navbar from "../Components/navbar/Navbar";
import Content from "../Components/Content";
import { useState } from "react";
import TittleWebsite from "../Components/TittleWebsite";
import Footer from "../Components/footer/Footer";
import CarouselNew from "../Components/CarouselNew";
import Profile from "./Profile";


export default function Home() {


  return (
    <main>
      <TittleWebsite />
      {/* <Flex> */}
        {/* <MenuBar data={data} /> */}
      <CarouselNew/>
        <Content/>
        <Profile/>
      {/* </Flex> */}
      <Footer />
    </main>
  );
}
