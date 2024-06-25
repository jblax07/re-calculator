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
        <MenuGroup title="Pages">
          <MenuItem onClick={() => setCurrentComponent("Calculator")}>
            Estimator
          </MenuItem>
          <MenuItem onClick={() => setCurrentComponent("Admin")}>
            Admin
          </MenuItem>
        </MenuGroup>
        <MenuDivider />

        <MenuItem>
          <ColorModeSwitch />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuSelector;
