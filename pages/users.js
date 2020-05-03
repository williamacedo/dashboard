import { useState } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

import UserModal from "../components/UserModal";

const Users = ({ users }) => {
  const [userData, setUserData] = useState(null);
  const [modal, setModal] = useState(false);

  const handleModalClick = (user) => {
    setUserData(user);
    setModal(true);
  };

  return (
    <Segment>
      <Link href="/newUser">
        <Button icon color="green">
          <Icon name="plus" />
        </Button>
      </Link>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Mais Informações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users &&
            users.map((user) => (
              <Table.Row>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <Button
                    content="Visualizar"
                    primary
                    onClick={() => handleModalClick(user)}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      {userData && (
        <UserModal
          user={userData}
          modalOpen={modal}
          modalClose={() => setModal(false)}
        />
      )}
    </Segment>
  );
};

Users.getInitialProps = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    users: data,
  };
};

export default Users;
