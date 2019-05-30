import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Subscribe } from 'unstated';

import KelolaBarang from './components/KelolaBarang';
import OlahBarang from './components/OlahBarang';
import OlahAkun from './components/OlahAkun';
import InformasiAkun from './components/InformasiAkun';

class ProsesData extends Component {
  componentDidMount() {
    this.props.stokBarang.fetch();
  }

  render() {
    const { stokBarang, olahAkun } = this.props;

    return (
      <div>
        <Row>
          <Col md={4}>
            <InformasiAkun {...olahAkun} />
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
    <Subscribe to={[OlahBarang, OlahAkun]}>
      {(stokBarang, olahAkun) => (
        <ProsesData stokBarang={stokBarang} olahAkun={olahAkun} />
      )}
    </Subscribe>
  );
};

export default Aplikasi;
