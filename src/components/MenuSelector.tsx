import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MenuSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Menu
      </MenuButton>
      <MenuList>
        <MenuItem>Estimator</MenuItem>
        <MenuItem>Payout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuSelector;
