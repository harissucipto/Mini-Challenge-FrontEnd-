import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  CardBody
} from 'reactstrap';

import LogoutButtton from './LogoutButtton';

class InformasiAkun extends Component {
  render() {
    const { state } = this.props;
    const { name, email } = state;

    return (
      <Card>
        <CardHeader className="bg-success">
          <strong>Informasi Akun</strong>
        </CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>Nama Pengguna</ListGroupItemHeading>
              <ListGroupItemText>{name}</ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>Email</ListGroupItemHeading>
              <ListGroupItemText>{email}</ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem action>
              <LogoutButtton />
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default InformasiAkun;
