import { Container } from 'unstated';

const API = 'http://localhost:3000/';

class OlahBarang extends Container {
  state = {
    data: [],
    loading: false,
    erorText: ''
  };

  fetch = async (_id, jwt) => {
    console.log(_id, jwt, 'jwt');
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
        console.log(items);

        this.setState({ data: items, loading: false });
      }
    }
  };

  tambahData = async (baru, idUser, jwt) => {
    this.setState({ loading: true });
    console.log(idUser, jwt, 'jwt');
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
      console.log(resp, 'hasilnya');
      this.setState({
        data: [...this.state.data, resp.barang],
        loading: false
      });
    }

    this.setState({ loading: false });
  };

  hapusData = async (_id, idUser, jwt) => {
    this.setState({ loading: true });

    const test = await fetch(`${API}api/barang/${idUser}&${_id}`, {
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

    const test1 = await test.json();

    console.log(test1, 'ini');

    this.setState({
      data: this.state.data.filter(item => item._id !== _id),
      loading: false
    });
  };

  editData = async newData => {
    this.setState({ loading: true });
    const { _id, jwt, idUser, nama, stok, satuan, deskripsi } = newData;

    const dataRubah = { nama, stok, satuan, deskripsi };

    await fetch(`${API}api/barang/${idUser}&${_id}`, {
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

    const data = this.state.data.filter(item => item._id !== newData._id);
    this.setState({
      data: [...data, newData],
      loading: false
    });
  };
}

export default OlahBarang;
