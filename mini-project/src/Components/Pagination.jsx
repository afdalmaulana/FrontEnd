import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        <UnorderedList>
          {pageNumbers.map((number) => (
            <ListItem key={number} className="page-item" textDecoration={'none'} as={Button}>
              <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </ListItem>
          ))}
        </UnorderedList>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
