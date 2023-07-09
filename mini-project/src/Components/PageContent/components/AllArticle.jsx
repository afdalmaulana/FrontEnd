import React, { useState, useEffect } from "react";
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
import { GrLike } from "react-icons/gr";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBookmark,
  likeBlog,
  viewArticle,
} from "../../../redux/reducer/BlogReducer";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function AllArticle({ linkRef }) {
  const navigate = useNavigate();
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
  const [index, setIndex] = useState(1);
  const [page, setPage] = useState(0);

  const [likes, setLikes] = useState({});

  const fetchData = async () => {
    try {
      const url = `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${selectedCategory}&sort=${sortOrder}&page=${index}&size=50`;
      const response = await axios.get(url);
      // console.log(response.data);
      setPage(response.data.page);
      setArticles(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory, sortOrder, index]);

  const handleNextPage = () => {
    if (index < page) setIndex(index + 1);
  };

  const handlePrevPage = () => {
    if (index > 1) {
      setIndex(index - 1);
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

  const handlePageChange = (pageIndex) => {
    setIndex(pageIndex);
  };
  const renderPageButtons = () => {
    const totalPages = page;
    const startPage = Math.max(1, index - 2);
    const endPage = Math.min(startPage + 4, totalPages);

    const pageButtons = [];
    for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
      pageButtons.push(
        <Button
          key={pageNum}
          variant="outline"
          onClick={() => handlePageChange(pageNum)}
          isActive={index === pageNum}
          disabled={index === pageNum}
          color="yellow.600"
        >
          {pageNum}
        </Button>
      );
    }

    return pageButtons;
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

  function viewBlog(item) {
    // dispatch(viewArticle(item));
    navigate(`/viewarticle/${item.id}?${item.title}`);
  }
  const getLike = (item) => {
    const token = localStorage.getItem("token");
    console.log("id like: ", item);
    if (token) {
      return dispatch(likeBlog(item, toast));
    } else {
      toast({
        title: "Please Login First",
        status: "error",
        description: "You need to login first, to like the blog",
        duration: 3000,
        isClosable: true,
      });
    }
    // console.log("ini like", like.id);
  };
  return (
    <Box>
      <Box m={"24px 60px 40px"}>
        <Heading
          fontSize={"5xl"}
          fontWeight={"bold"}
          fontFamily={"mono"}
          mt={"50px"}
        >
          All Article and Blog
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
            .slice((activePage - 1) * 5, activePage * 5)
            .map((article) => (
              <SwiperSlide key={article.id}>
                <Box display={"flex"} justifyContent={"space-between"} p={4}>
                  <Card w={"full"} h={"430px"} shadow={"lg"}>
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
                          creator : {article.User.username}
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
                          icon={<BsFillBookmarkStarFill />}
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
                          icon={<BsFillBookmarkStarFill />}
                        />
                      )}
                      <Button
                        rightIcon={<AiOutlineArrowUp />}
                        onClick={() => viewBlog(article)}
                        colorScheme="yellow"
                        borderRadius={"20px"}
                      >
                        Read More
                      </Button>
                      <Button
                        variant={"ghost"}
                        rounded={"full"}
                        leftIcon={<GrLike />}
                        onClick={() => getLike(article.id)}
                      >
                        Like
                      </Button>
                    </CardFooter>
                  </Card>
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <Button
          size={"md"}
          colorScheme="yellow"
          onClick={handlePrevPage}
          disabled={activePage === 1}
        >
          Previous
        </Button>
        {renderPageButtons()}
        <Button
          size={"md"}
          colorScheme="yellow"
          onClick={handleNextPage}
          disabled={activePage === Math.ceil(articles.length / 5)}
          // disabled={activePage === 20}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
