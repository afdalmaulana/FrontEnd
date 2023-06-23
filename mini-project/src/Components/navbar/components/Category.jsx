import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  function toCategory() {
    navigate("/category");
  }

  const [category, setCategory] = useState([]);
  const blogCategory = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      console.log(res);
      setCategory(res.data);

    } catch (error) {
      console.log(error);
    }
  };
  blogCategory();
  return (
    <>
      <Box>
        {/* <Button onClick={toCategory} variant={""} mt={"10px"}>
          Category
        </Button> */}
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant={''} mt={'10px'}
              >
                {isOpen ? "Close" : "Category"}
              </MenuButton>
              <MenuList bgColor={'yellow.400'}>
                {category.map((item) => {
                    return(
                        <MenuItem bgColor={'yellow.400'}>{item.name}</MenuItem>
                    )
                })}
                </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </>
  );
}
