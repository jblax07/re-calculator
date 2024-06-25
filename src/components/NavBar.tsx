import { HStack, Image, Heading, VStack } from "@chakra-ui/react";
import logo from "../assets/logo2.webp";
import MenuSelector from "./MenuSelector";

interface NavBarProps {
  setCurrentComponent: (component: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setCurrentComponent }) => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="50px"></Image>

      <Heading size="sm">PIXELDISPATCH</Heading>

      <MenuSelector setCurrentComponent={setCurrentComponent} />
    </HStack>
  );
};

export default NavBar;
