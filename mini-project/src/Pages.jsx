import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Components/Pagination.jsx";
import Posts from "./Components/Posts.jsx";
import { Box } from "@chakra-ui/react";

export default function Pages() {
  const [result, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=3&sort=ASC"
      );
      setPosts(res.data.result);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Box className="container mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={result.length}
          paginate={paginate}
        />
      </Box>
    </>
  );
}
