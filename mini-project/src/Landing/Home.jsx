import Content from "../Components/PageContent/Content";
import TittleWebsite from "../Components/PageContent/components/TittleWebsite";
import Footer from "../Components/footer/Footer";
import CarouselNew from "../Components/PageContent/components/CarouselNew";

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
