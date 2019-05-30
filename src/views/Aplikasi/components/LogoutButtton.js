import React from 'react';
import { Subscribe } from 'unstated';
import { Button } from 'reactstrap';

import OlahAkun from './OlahAkun';

const ProsesData = ({ logout }) => (
  <Button onClick={logout} color="danger" className="mr-4 btn-pill">
    logout
  </Button>
);

const LogoutButton = () => (
  <Subscribe to={[OlahAkun]}>{data => <ProsesData {...data} />}</Subscribe>
);

export default LogoutButton;
