import { HStack, Image, Heading, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import MenuSelector from "./MenuSelector";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <VStack justifyContent="center">
        <Image src={logo} boxSize="60px"></Image>
        <Heading size="sm">PIXEL DISPATCH</Heading>
      </VStack>
      <MenuSelector />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
