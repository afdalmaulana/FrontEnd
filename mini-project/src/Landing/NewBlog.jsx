import {
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  InputGroup,
  Stack,
  Textarea,
  useEditableControls,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

export default function NewBlog() {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          ml={"20px"}
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <ButtonGroup>
        <Button
          justifyContent={"center"}
          w={"100px"}
          ml={"10px"}
          leftIcon={<EditIcon />}
          {...getEditButtonProps()}
        >
          {" "}
          Write
        </Button>
      </ButtonGroup>
    );
  }
  return (
    <>
      <Navbar />
      <Stack>
        <InputGroup mt={"80px"}>
          <Stack>
            <Editable
              defaultValue="Title"
              fontSize={"50px"}
              color={"blackAlpha.200"}
            >
              <EditablePreview
                placeholder="Title"
                ml={"450px"}
                border={"1px"}
                borderColor={"blackAlpha.300"}
                w={"600px"}
              />
              <Input
                placeholder="Title"
                border={"1px"}
                w={"600px"}
                h={"100px"}
                marginLeft={"450px"}
                fontSize={"50px"}
                as={EditableInput}
              ></Input>
              <EditableControls />
            </Editable>
            <Flex>
              <Textarea
                placeholder="Input your imagination"
                w={"600px"}
                h={"200px"}
                marginLeft={"450px"}
              ></Textarea>
              <Button w={"100px"} ml={"10px"} colorScheme={"whatsapp"}>
                Publish
              </Button>
            </Flex>
          </Stack>
        </InputGroup>
      </Stack>
    </>
  );
}
