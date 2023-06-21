import Navbar from "../Components/navbar/Navbar";
import Content from "../Components/Content";
import { useState } from "react";
import TittleWebsite from "../Components/TittleWebsite";
import Footer from "../Components/footer/Footer";
import CarouselNew from "../Components/CarouselNew";


export default function Home() {
  const blogList = [
    {
      images:
        "https://plus.unsplash.com/premium_photo-1682284079685-657fb4f33de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      title: "Kisah kasih di sekolah",
      desc: "Ada apa sih di sekolah?",
      author: "Sophie Lucido Johnson",
    },
    {
      images:
        "https://i.pinimg.com/564x/73/19/23/731923f3fd95b3b0cc4f3e3003123a46.jpg",
      title: "Kapankah Straw Hat mencapai pulau terakhir?",
      desc: "Apakah jalan yang akan di tempuh oleh Monkey D. Luffy akan berat dalam perjalanan dia bersama Straw Hat Pirate menuju pulau terakhir dengan mengumpulkan  semua poneglyph yang tersebar di Grand Line",
      author: "Eiichiro Oda",
      open: 200,
    },
    {
      images:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      title: "Cara agar hidup anda terasa tidak seperti itu saja",
      desc: "Hidup anda terasa santai dan kurang pusing? Tenang ... solusinya adalah dengan cara menjadi seorang web developer",
    },
    {
      images:
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "Rajin berolahraga membuat pikiran semakin tenang dan lebih fokus",
      desc: "Olahraga adalah salah satu aktivitas yang sangat penting dalam menjalani kehidupan. Olahraga dapat dilakukan setiap 3x dalam seminggu agar tubuh dan pikiran tetap dalam keadaan bugar",
    },
    {
      images:
        "https://images.unsplash.com/photo-1558983925-ea9372bf2ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "Awas ada semut",
      desc: "Ternyata ada ant-man yang mendampingi",
      author: "Paul Rodd",
    },
    {
        images : "https://images.unsplash.com/photo-1628336707631-68131ca720c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        title: "How give a toast",
        desc: "You have been asked to give a toast. Do it well and everyone will love you. Mess it up and you will lose the trust and support of everyone",
        author: "Ben Beckman"

    },
  ];
  const [data, setData] = useState(blogList);

  const populerBlog = [
    {
      images:
        "https://images.unsplash.com/photo-1553108715-308e8537ce55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
      title: "Sport",
      desc: "Hidup Seperti Larry",
    },
    {
      images:
        "https://images.unsplash.com/photo-1597015174180-72506858e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "LifeStyle",
      desc: "Bergaya perlu tapi yang lebih perlu adalah bernafas",
    },
    {
      images:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Food",
      desc: "Sebelum makan jangan lupa bismillah",
    },
    {
      images:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Travel",
      desc: "Jalan-jalan belum afdol kalau belum ke Ka'Bah",
    },
  ];
  const [populer, setPopuler] = useState(populerBlog);

  const topLike = [
    {
        images : "https://images.unsplash.com/photo-1686859161298-0d0159e9c71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        title : "Peaky Blindes",
        desc : "Peaky Blinders sangat berkuasa untuk wilayah Birmingham London pada tahun 80an sampai akhir 2000an"
    },
    {
        images: "https://images.unsplash.com/photo-1686956263841-406eabe5ac7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        title: "Street Art Photography",
        desc : "Kalangan anak muda gemar membuat gambar-gambar yang terkadang mengarah ke protes kepada pemegang kekuasaan melalui coretan absrak"
    },
    {
        images : "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        title: "Harry Potter Hogwarts",
        desc : "Apakah Harry Potter akan menjadi kepala sekolah Hogwart pada tahun depan atau menjadi guru?"
    },
    {
        images: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        title: "Tokyo in the Middle Night",
        desc : "Most people in all over the Country like to walking on the street Tokyo in the middle of Night"
    }
  ]
  const [like, setLike] = useState(topLike);
  return (
    <main>
      <Navbar />
      <TittleWebsite />
      {/* <Flex> */}
        {/* <MenuBar data={data} /> */}
      <CarouselNew populer={populer} />
        <Content like={like} blogList={blogList}/>
      {/* </Flex> */}
      <Footer />
    </main>
  );
}
