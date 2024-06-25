import { HStack, Image, Heading, VStack } from "@chakra-ui/react";
import logo from "../assets/logo2.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import MenuSelector from "./MenuSelector";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <MenuSelector />

      <VStack justifyContent="center">
        <Image src={logo} boxSize="70px"></Image>
        <Heading size="sm">PIXELDISPATCH</Heading>
      </VStack>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
