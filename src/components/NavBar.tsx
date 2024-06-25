import { HStack, Image, Heading, VStack } from "@chakra-ui/react";
import logo from "../assets/logo2.webp";
import MenuSelector from "./MenuSelector";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="50px"></Image>

      <Heading size="sm">PIXELDISPATCH</Heading>

      <MenuSelector />
    </HStack>
  );
};

export default NavBar;
