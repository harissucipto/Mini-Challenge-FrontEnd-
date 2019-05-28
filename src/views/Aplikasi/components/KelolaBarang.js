import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Table, ButtonGroup } from 'reactstrap';

import EditBarang from './EditBarang';

class KelolaBarang extends Component {
  render() {
    const { data } = this.props;
    return (
      <Card>
        <CardHeader>Kelola Stok Barang</CardHeader>
        <CardBody>
          {!data.length ? (
            <p>Belum Ada Data</p>
          ) : (
            <Table responsive bordered>
              <thead>
                <tr>
                  <th>Nama Barang</th>
                  <th>Stok Barang</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.nama}</td>
                    <td>
                      {item.stok} {item.satuan}
                    </td>
                    <td>
                      <ButtonGroup size="sm">
                        <EditBarang barang={item} />
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </CardBody>
      </Card>
    );
  }
}

export default KelolaBarang;
