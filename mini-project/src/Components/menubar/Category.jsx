import { ChevronDownIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MembershipLogin from "../MembershipLogin";

export default function Category(){
    return (
        <>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Menu>
                <MenuItem>Trending</MenuItem>
                <MenuItem>Fashion</MenuItem>
                <MenuItem>Travel</MenuItem>
                <MenuItem>Lifestyle</MenuItem>
                <MenuItem>Sport</MenuItem>
                <MenuItem>Technology</MenuItem>
                <MenuItem>Food</MenuItem>
                <MenuItem>Anime</MenuItem>
              </Menu>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Other
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <MembershipLogin />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Novel
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Menu>
                <MenuItem>Non fiksi</MenuItem>
                <MenuItem>Fantasy</MenuItem>
                <MenuItem>Romance</MenuItem>
              </Menu>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* <Box mt={'10px'}>
                <Menu>
        <MenuButton as={Button} variant={''} rightIcon={<ChevronDownIcon />}>
            Category
        </MenuButton>
            <Flex>
        <MenuList w={'200px'} display={'inline-block'} bgColor={'yellow.400'}>
            <MenuItem bgColor={'yellow.400'}>Technology</MenuItem>
            <MenuItem bgColor={'yellow.400'}>Lifestyle</MenuItem>
            <MenuItem bgColor={'yellow.400'}>Food</MenuItem>
            <MenuItem bgColor={'yellow.400'}>Sport</MenuItem>
            <MenuItem bgColor={'yellow.400'}>Travel</MenuItem>
            <MenuItem bgColor={'yellow.400'}>Fashion</MenuItem>
        </MenuList>
            </Flex>
        </Menu>            
        </Box> */}
        </>
    )
}