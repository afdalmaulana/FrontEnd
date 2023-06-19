import { Box, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";

export default function MembershipLogin() {
  const navigate = useNavigate();
  function memberShip() {
    navigate("/membership");
  }
  return (
    <>
      <Box mt={"10px"}>
        <Link to={"/membership"}>Membership</Link>
      </Box>
    </>
  );
}
