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

const MenuSelector = () => {
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
          <MenuItem>Estimator</MenuItem>
          <MenuItem>Payout</MenuItem>
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
