import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Produk from "./Produk";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Home() {
  const [dog, setDog] = useState("");
    const fetchDog = async () => {
        try{
            const {data} = await axios.get ("http://localhost:3000/dog")
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }
    const postData = async () => {
        try {
            const send = await axios.post("http://localhost:3000/users", {
                firstName : "Jamse",
                lastName : "King",
                email : "King@gmail.com",
                password : "king123"
            });
            console.log(send)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDog()
        postData()
    })
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
