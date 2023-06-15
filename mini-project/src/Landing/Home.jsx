import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import MenuBar from '../Components/MenuBar'
import { useState } from 'react'
import { Flex } from '@chakra-ui/react';
import TittleWebsite from '../Components/TittleWebsite';
import UnderPage from '../Components/UnderPage';

export default function Home(){
    const blogList = [
        {
        images : "https://plus.unsplash.com/premium_photo-1682284079685-657fb4f33de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        title : "Kisah kasih di sekolah",
        desc : "Ada apa sih di sekolah?",
        author : "Sophie Lucido Johnson",
    },
    {
        images : "https://images.unsplash.com/photo-1558983925-ea9372bf2ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        title : "Awas ada semut",
        desc : "Ternyata ada ant-man yang mendampingi",
        author : "Paul Rodd",
    },
    {
        images : "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
        title : "Cara agar hidup anda terasa tidak seperti itu saja",
        desc : "Hidup anda terasa santai dan kurang pusing? Tenang ... solusinya adalah dengan cara menjadi seorang web developer"
    },
    {
        images : "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        title : "Rajin berolahraga membuat pikiran semakin tenang dan lebih fokus",
        desc : "Olahraga adalah salah satu aktivitas yang sangat penting dalam menjalani kehidupan. Olahraga dapat dilakukan setiap 3x dalam seminggu agar tubuh dan pikiran tetap dalam keadaan bugar"
    },
    {
        images : "https://i.pinimg.com/564x/73/19/23/731923f3fd95b3b0cc4f3e3003123a46.jpg",
        title : "Kapankah Straw Hat mencapai pulau terakhir?",
        desc : "Apakah jalan yang akan di tempuh oleh Monkey D. Luffy akan berat dalam perjalanan dia bersama Straw Hat Pirate menuju pulau terakhir dengan mengumpulkan  semua poneglyph yang tersebar di Grand Line"
    },
];
const [data, setData] = useState(blogList)

    const populerBlog = [
        {
            images : "https://images.unsplash.com/photo-1553108715-308e8537ce55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
            title : "Sport",
    },
    {
        images : "https://images.unsplash.com/photo-1597015174180-72506858e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        title : "LifeStyle"
    },
];
const [populer, setPopuler] = useState(populerBlog)
    return (
        <>
        <Navbar/>
        <TittleWebsite/>
        <Flex>
            {/* <BlogList data={data}/> */}
        <MenuBar data={data}/>
        <Content data={data}/>
        </Flex>
        <UnderPage/>
        </>
    )
}