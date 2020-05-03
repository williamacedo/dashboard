import { Menu } from "semantic-ui-react";

const Header = ({ activeItem, handleItemClick }) => (
  <Menu>
    <Menu.Item
      name="index"
      active={activeItem === "index"}
      onClick={handleItemClick}
    >
      Home
    </Menu.Item>
    <Menu.Item
      name="users"
      active={activeItem === "users"}
      onClick={handleItemClick}
    >
      Users
    </Menu.Item>
  </Menu>
);

export default Header;
