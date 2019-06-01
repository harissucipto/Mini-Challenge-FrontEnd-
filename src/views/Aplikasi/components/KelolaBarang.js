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
import TambahBarang from './TambahBarang';

class KelolaBarang extends Component {
  render() {
    const { state, editData, hapusData, tambahData, akun } = this.props;
    const { data, loading } = state;
    if (loading)
      return (
        <Spinner title="Loading... Mengambil Data Stok Barang" size="lg" />
      );

    return (
      <Card className="card-accent-primary">
        <CardHeader className="bg-primary">
          <strong>Kelola Stok Barang</strong>
        </CardHeader>
        <CardBody>
          <TambahBarang aksi={tambahData} />
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
                  <tr key={item._id}>
                    <td>
                      <DetailBarang barang={item} />
                    </td>
                    <td>
                      {item.stok || 0} {item.satuan}
                    </td>
                    <td className="text-center">
                      <ButtonGroup size="sm">
                        <EditBarang barang={item} aksi={editData} akun={akun} />
                        <HapusBarang
                          barang={item}
                          aksi={hapusData}
                          akun={akun}
                        />
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
