import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  InputGroup,
  Select,
  Stack,
  Text,
  Textarea,
  useEditableControls,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeArticle } from "../redux/reducer/BlogReducer";

export default function NewBlog() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const handleOption = (event) => {
    setSelected(event.target.value);
  };

  const [category, setCategory] = useState();
  const getCategory = async () => {
    try {
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      setCategory(respon.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: document.getElementById("title").value,
      country: document.getElementById("country").value,
      CategoryId: selected,
      url: "/",
      keywords: document.getElementById("keywords").value,
      content: document.getElementById("content").value,
    };
    const file = document.getElementById("file").files[0];
    dispatch(makeArticle(data, file));
  };

  return (
    <>
      <Navbar />
      <Stack>
        <InputGroup mt={"80px"}>
          <Stack>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Title"
                id="title"
                name="title"
                w={"600px"}
                h={"100px"}
                ml={"450px"}
                fontSize={"2xl"}
              ></Input>
              <Input
                placeholder="Country"
                id="country"
                name="country"
                w={"600px"}
                ml={"450px"}
              ></Input>
              <Select
                w={"600px"}
                ml={"450px"}
                value={selected}
                onChange={handleOption}
              >
                <option value={""}>Category</option>
                {category &&
                  category.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
              </Select>
              <Input
                placeholder="Keyword"
                w={"600px"}
                ml={"450px"}
                id="keywords"
                name="keywords"
              ></Input>
              <Textarea
                placeholder="Input your imagination"
                id="content"
                name="content"
                w={"600px"}
                h={"200px"}
                marginLeft={"450px"}
              ></Textarea>

              <Box ml={"450px"}>
                <Stack
                  border={"1px"}
                  w={"600px"}
                  borderRadius={"10px"}
                  borderColor={"blackAlpha.300"}
                >
                  <Text
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    fontFamily={"initial"}
                    ml={"15px"}
                    color={"blackAlpha.400"}
                  >
                    Image
                  </Text>
                  <Input
                    type="file"
                    id="file"
                    placeholder="image"
                    variant={""}
                  ></Input>
                </Stack>
              </Box>
              <Button
                w={"600px"}
                ml={"450px"}
                mt={"20px"}
                type="submit"
                colorScheme={"whatsapp"}
              >
                Publish
              </Button>
            </form>
          </Stack>
        </InputGroup>
      </Stack>
    </>
  );
}
