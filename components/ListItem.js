import { List } from "semantic-ui-react";

const ListItem = ({ icon, content }) => (
  <List.Item className="user-modal-list_item">
    <List.Icon className="user-modal-icon_middle" name={icon}></List.Icon>
    <List.Content>{content}</List.Content>
  </List.Item>
);

export default ListItem;
