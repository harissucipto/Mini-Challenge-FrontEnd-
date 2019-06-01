import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  CardBody,
  ButtonGroup
} from 'reactstrap';

import UpdateInfromasiAkun from './UpdateInfromasiAkun';
import UpdatePassword from './UpdatePassword';

class InformasiAkun extends Component {
  render() {
    const { state, updateAkun } = this.props;
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
              <ListGroupItemHeading>Aksi</ListGroupItemHeading>
              <ButtonGroup>
                <UpdatePassword data={state} aksi={updateAkun} />
                <UpdateInfromasiAkun data={state} aksi={updateAkun} />
              </ButtonGroup>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default InformasiAkun;
