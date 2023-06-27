import Content from "../Components/PageContent/Content";
import TittleWebsite from "../Components/PageContent/components/TittleWebsite";
import Footer from "../Components/footer/Footer";
import CarouselNew from "../Components/PageContent/components/CarouselNew";
import Explore from "../Components/PageContent/components/Explore";

export default function Home() {
  return (
    <main>
      <TittleWebsite />
      {/* <Flex> */}
      {/* <MenuBar data={data} /> */}
      {/* <CarouselBiasa/> */}
      <CarouselNew />
      <Content />
      {/* <Explore/> */}
      {/* <Profile /> */}
      {/* </Flex> */}
      {/* <Pages/> */}
      <Footer />
    </main>
  );
}
