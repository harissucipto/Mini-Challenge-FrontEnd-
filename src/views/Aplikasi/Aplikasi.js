import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom';

import KelolaBarang from './components/KelolaBarang';
import OlahBarang from './components/OlahBarang';
import OlahAkun from './components/OlahAkun';
import InformasiAkun from './components/InformasiAkun';

class ProsesData extends Component {
  componentDidMount() {
    const { _id, jwt } = this.props.olahAkun.state;
    this.props.stokBarang.fetch(_id, jwt);
  }

  render() {
    const { stokBarang, olahAkun } = this.props;

    const { _id } = olahAkun.state;

    if (!_id) return <Redirect to="/login" />;

    return (
      <div>
        <Row>
          <Col md={8}>
            <KelolaBarang {...stokBarang} akun={olahAkun} />
          </Col>
          <Col md={4}>
            <InformasiAkun {...olahAkun} />
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
