import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";

interface MenuSelectorProps {
  setCurrentComponent: (component: string) => void;
}

const MenuSelector: React.FC<MenuSelectorProps> = ({ setCurrentComponent }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuGroup>
          <MenuItem onClick={() => setCurrentComponent("Login")}>
            Login
          </MenuItem>
          <MenuItem onClick={() => setCurrentComponent("Admin")}>
            Admin
          </MenuItem>
          <MenuItem onClick={() => setCurrentComponent("Calculator")}>
            Estimator
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Theme Mode">
          <MenuItem>
            <ColorModeSwitch />
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default MenuSelector;
