import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

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
          <Card>
            <CardHeader>Stok Barang</CardHeader>
            <CardBody>Data Stok Barang</CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Aplikasi;
