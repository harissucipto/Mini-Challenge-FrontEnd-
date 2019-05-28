import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { stokBarang } from './data';
import KelolaBarang from './components/KelolaBarang';

const Aplikasi = () => {
  return (
    <div>
      <Row>
        <Col md={4}>
          <Card>
            <CardHeader>Informasi User</CardHeader>
            <CardBody>Profil User</CardBody>
          </Card>
        </Col>
        <Col md={8}>
          <KelolaBarang data={stokBarang} />
        </Col>
      </Row>
    </div>
  );
};

export default Aplikasi;
