import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import MenuBar from '../Components/MenuBar'
import { useState } from 'react'
import { Flex } from '@chakra-ui/react';
import TittleWebsite from '../Components/TittleWebsite';

export default function Home(){
    const blogList = [{
        title : "Kisah kasih di sekolah",
        desc : "Ada apa sih di sekolah?",
    },
    {
        title : "Awas ada semut",
        desc : "Ternyata ada ant-man yang mendampingi",
    },
    {
        title : "Cara agar hidup anda terasa tidak seperti itu saja",
        desc : "Hidup anda terasa santai dan kurang pusing? Tenang ... solusinya adalah dengan cara menjadi seorang web developer"
    },
];
    const [data, setData] = useState(blogList)
    return (
        <>
        <Navbar/>
        <TittleWebsite/>
        <Flex>
            {/* <BlogList data={data}/> */}
        <MenuBar data={data}/>
        <Content data={data}/>
        </Flex>
        </>
    )
}