import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  ButtonGroup,
  Spinner
} from 'reactstrap';

import EditBarang from './EditBarang';
import HapusBarang from './HapusBarang';
import DetailBarang from './DetailBarang';

class KelolaBarang extends Component {
  render() {
    const { state, editData, hapusData } = this.props;
    const { data, loading } = state;
    if (loading)
      return (
        <Spinner title="Loading... Mengambil Data Stok Barang" size="lg" />
      );

    return (
      <Card>
        <CardHeader>Kelola Stok Barang</CardHeader>
        <CardBody>
          {!data.length ? (
            <p>Belum Ada Data</p>
          ) : (
            <Table responsive bordered>
              <thead>
                <tr className="text-center">
                  <th>Nama Barang</th>
                  <th>Stok Barang</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>
                      <DetailBarang barang={item} />
                    </td>
                    <td>
                      {item.stok} {item.satuan}
                    </td>
                    <td className="text-center">
                      <ButtonGroup size="sm">
                        <EditBarang barang={item} aksi={editData} />
                        <HapusBarang barang={item} aksi={hapusData} />
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
