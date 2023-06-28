import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Select,
  Card,
  CardBody,
  Stack,
  Tag,
  CardFooter,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsBookmarkPlus, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark } from "../../../redux/reducer/BlogReducer";

const Explore = ({ linkRef }) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.UserReducer.login);
  const toast = useToast();

  function toToastAdd() {
    toast({
      title: "Bookmark Success",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }
  function noToast() {
    toast({
      title: "Bookmark failed",
      status: "error",
      description: "You need to login first, to save the blog",
      duration: 3000,
      isClosable: true,
    });
  }

  const [articles, setArticles] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const url = `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${selectedCategory}&sort=${sortOrder}&page=${page}`;
      const response = await axios.get(url);
      // console.log(response.data);
      setArticles(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory, sortOrder, page]);

  const handleNextPage = () => {
    const totalPages = Math.ceil(articles.length / 3);
    if (activePage < totalPages && activePage < 3)
      setActivePage((prevPage) => prevPage + page);
  };

  const handlePrevPage = () => {
    if (activePage > 1) {
      setActivePage((prevPage) => prevPage - page);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryFilter = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortOrder = (event) => {
    setSortOrder(event.target.value);
  };

  const renderArticleIndex = (index) => {
    return (
      <Button
        key={index}
        onClick={() => setActivePage(index)}
        colorScheme={activePage === index ? "blackAlpha" : "gray"}
        mx={1}
        size="sm"
      >
        {index}
      </Button>
    );
  };

  const renderArticleIndexes = () => {
    const totalPages = Math.ceil(articles.length / 3);
    const indexes = [];
    for (let i = 1; i <= totalPages; i++) {
      indexes.push(renderArticleIndex(i));
    }
    return indexes;
  };

  const filteredArticles = articles.filter((article) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const lowerCaseTitle = article.title.toLowerCase();
    const lowerCaseAuthor = article.User.username.toLowerCase();
    const lowerCaseCategory = article.Category.name.toLowerCase();

    return (
      lowerCaseTitle.includes(lowerCaseSearchTerm) ||
      lowerCaseAuthor.includes(lowerCaseSearchTerm) ||
      lowerCaseCategory.includes(lowerCaseSearchTerm)
    );
  });

  const sortedArticles = filteredArticles.sort((a, b) => {
    if (sortOrder === "ASC") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "DESC") {
      return b.title.localeCompare(a.title);
    } else if (sortOrder === "createdAt_ASC") {
      return a.createdAt.localeCompare(b.createdAt);
    } else if (sortOrder === "createdAt_DESC") {
      return b.createdAt.localeCompare(a.createdAt);
    }
  });

  return (
    <Box>
      <Box m={"24px 60px 40px"}>
        <Heading
          fontSize={"5xl"}
          fontWeight={"bold"}
          fontFamily={"mono"}
          mt={"50px"}
        >
          All Blog and Book
        </Heading>
      </Box>
      <Box
        m={"16px 60px"}
        display={"flex"}
        justifyContent={"space-between"}
        gap={4}
      >
        <Input
          placeholder="Search..."
          rounded={"xl"}
          focusBorderColor="#E7B10A"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Select
          placeholder="All Categories"
          rounded={"xl"}
          focusBorderColor="#E7B10A"
          value={selectedCategory}
          onChange={handleCategoryFilter}
        >
          <option value="1">Bisnis</option>
          <option value="2">Ekonomi</option>
          <option value="3">Teknologi</option>
          <option value="4">Olahraga</option>
          <option value="5">Kuliner</option>
          <option value="6">Internasional</option>
          <option value="7">Fiksi</option>
        </Select>
        <Select
          rounded={"xl"}
          focusBorderColor="#E7B10A"
          value={sortOrder}
          onChange={handleSortOrder}
        >
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
          <option value="createdAt_ASC">Oldest First</option>
          <option value="createdAt_DESC">Newest First</option>
        </Select>
      </Box>
      <Box p={"24px 60px"} gap={4}>
        <Swiper slidesPerView={3}>
          {sortedArticles
            .slice((activePage - 1) * 3, activePage * 3)
            .map((article) => (
              <SwiperSlide key={article.id}>
                <Box display={"flex"} justifyContent={"space-between"} p={4}>
                  <Card w={"full"} h={"430px"}>
                    <CardBody>
                      <Box
                        height={"110px"}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        borderRadius="lg"
                        backgroundImage={`https://minpro-blog.purwadhikabootcamp.com/${article.imageURL}`}
                      ></Box>
                      <Stack mt="6" spacing="3">
                        <Heading size="md" noOfLines={1}>
                          {article.title}
                        </Heading>
                        <Text noOfLines={2}>{article.content}</Text>
                        <Text fontSize={"sm"} color={"gray.500"}>
                          {article.User.username}
                        </Text>
                        <Text fontSize={"sm"} color={"gray.500"}>
                          Published:{" "}
                          {new Date(article.createdAt).toLocaleDateString()}
                        </Text>
                      </Stack>
                      <Tag
                        size={"md"}
                        rounded={"full"}
                        mt={4}
                        fontWeight={"normal"}
                      >
                        {article.Category.name}
                      </Tag>
                    </CardBody>
                    <CardFooter
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt={"-4"}
                    >
                      {!login ? (
                        <IconButton
                          variant={"ghost"}
                          size={"md"}
                          rounded={"full"}
                          aria-label="Bookmark"
                          onClick={() => noToast()}
                          icon={<BsBookmarkPlus />}
                        />
                      ) : (
                        <IconButton
                          variant={"ghost"}
                          size={"md"}
                          rounded={"full"}
                          aria-label="Bookmark"
                          onClick={() =>
                            dispatch(addToBookmark(article), toToastAdd())
                          }
                          icon={<BsBookmarkPlus />}
                        />
                      )}

                      <IconButton
                        variant={"ghost"}
                        size={"md"}
                        rounded={"full"}
                        aria-label="Like"
                        icon={<BsHeart />}
                      />
                    </CardFooter>
                  </Card>
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <Button
          size={"sm"}
          colorScheme="yellow"
          onClick={handlePrevPage}
          disabled={activePage === 1}
        >
          Previous
        </Button>
        {renderArticleIndexes()}
        <Button
          size={"sm"}
          colorScheme="yellow"
          onClick={handleNextPage}
          disabled={activePage === Math.ceil(articles.length / 3)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Explore;
