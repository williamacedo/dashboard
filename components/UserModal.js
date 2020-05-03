import { Modal, Segment, Button, List, Header } from "semantic-ui-react";

import ListItem from "./ListItem";

const UserModal = ({ user, modalOpen, modalClose }) => {
  const { address, company } = user;

  return (
    <Modal open={modalOpen}>
      <Segment className="user-modal_container">
        <Button
          style={{ alignSelf: "flex-end" }}
          color="red"
          onClick={modalClose}
        >
          Fechar
        </Button>
        <Header
          as="h1"
          dividing
          className="text-center"
          style={{ width: "100%" }}
        >
          Mais Informações
        </Header>
        <List>
          <ListItem icon="user" content={<h3>{user.name}</h3>} />
          <ListItem
            icon="mail"
            content={
              <a href="mailto:jack@semantic-ui.com">{<h3>{user.email}</h3>}</a>
            }
          />
          <ListItem
            icon="marker"
            content={
              <h3>{`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}</h3>
            }
          />
          <ListItem icon="phone" content={<h3>{user.phone}</h3>} />
          <ListItem
            icon="building outline"
            content={
              <h3>{`${company.name}, ${company.catchPhrase}, ${company.bs}`}</h3>
            }
          />
        </List>
      </Segment>
    </Modal>
  );
};

export default UserModal;
