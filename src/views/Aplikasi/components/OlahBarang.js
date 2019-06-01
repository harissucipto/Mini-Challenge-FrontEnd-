import { Container } from 'unstated';

const API = 'http://localhost:3000/';

class OlahBarang extends Container {
  state = {
    data: [],
    loading: false,
    erorText: ''
  };

  fetch = async (_id, jwt) => {
    if (!_id || !jwt) return;
    this.setState({ loading: true });

    const getBarang = await fetch(`${API}api/barangs/${_id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt
      },
      credentials: 'include'
    }).catch(err => {
      this.setState({ loading: false, erorText: 'Koneksi Gangguan!' });
    });

    if (getBarang) {
      const resp = await getBarang.json();

      if (getBarang.status === 200) {
        const { items } = resp;

        this.setState({ data: items, loading: false });
      }
    }
  };

  tambahData = async (baru, idUser, jwt) => {
    this.setState({ loading: true });

    const created = await fetch(`${API}api/barang/${idUser}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt
      },
      credentials: 'include',
      body: JSON.stringify(baru)
    }).catch(err => {
      this.setState({ loading: false, erorText: 'Koneksi Gangguan!' });
    });

    const resp = await created.json();

    if (created.status === 200) {
      this.setState({
        data: [...this.state.data, resp.barang]
      });
    }

    this.setState({ loading: false });
  };

  hapusData = async (_id, idUser, jwt) => {
    this.setState({ loading: true });

    const deleted = await fetch(`${API}api/barang/${idUser}&${_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt
      },
      credentials: 'include'
    }).catch(err => {
      this.setState({ loading: false, erorText: 'Koneksi Gangguan!' });
    });

    if (deleted.status === 200) {
      this.setState({
        data: this.state.data.filter(item => item._id !== _id)
      });
    }

    this.setState({ loading: false });
  };

  editData = async newData => {
    this.setState({ loading: true });
    const { _id, jwt, idUser, nama, stok, satuan, deskripsi } = newData;

    const dataRubah = { nama, stok, satuan, deskripsi };

    const edited = await fetch(`${API}api/barang/${idUser}&${_id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt
      },
      credentials: 'include',
      body: JSON.stringify(dataRubah)
    }).catch(err => {
      this.setState({ loading: false, erorText: 'Koneksi Gangguan!' });
    });

    if (edited.status === 200) {
      const data = this.state.data.filter(item => item._id !== newData._id);
      this.setState({
        data: [...data, newData]
      });
    }

    this.setState({ loading: false });
  };
}

export default OlahBarang;
