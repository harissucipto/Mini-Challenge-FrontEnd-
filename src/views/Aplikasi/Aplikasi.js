import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Subscribe } from 'unstated';

import KelolaBarang from './components/KelolaBarang';
import OlahBarang from './components/OlahBarang';

class ProsesData extends Component {
  componentDidMount() {
    this.props.stokBarang.fetch();
  }

  render() {
    const { stokBarang } = this.props;

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
            <KelolaBarang {...stokBarang} />
          </Col>
        </Row>
      </div>
    );
  }
}

const Aplikasi = () => {
  return (
    <Subscribe to={[OlahBarang]}>
      {stokBarang => <ProsesData stokBarang={stokBarang} />}
    </Subscribe>
  );
};

export default Aplikasi;
