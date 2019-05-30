import { Container } from 'unstated';

const resetPengguna = {
  uid: '',
  nama: '',
  email: '',
  nomorTelepon: '',
  alamat: '',
  password: '',
  erorText: '',
  loading: false
};

class OlahAkun extends Container {
  state = {
    // ...resetPengguna
    uid: '3232',
    nama: 'harissucipto',
    email: 'haris@gmail.com',
    nomorTelepon: '08932034',
    alamat: 'JL SEI',
    password: '123',
    textEror: '',
    loading: false
  };

  login = (email, password) => {
    const correctEmail = email === 'haris@gmail.com';
    this.setState({ erorText: '' });
    const correctPassword = password === '123';
    if (correctEmail && correctPassword) {
      this.setState({
        uid: '3232',
        nama: 'harissucipto',
        email: 'haris@gmail.com',
        nomorTelepon: '08932034',
        alamat: 'JL SEI',
        password: '123',
        textEror: ''
      });
    } else {
      this.setState({
        erorText: 'Error Password atau Email Salah!'
      });
    }
  };

  updateAkun = data => {
    this.setState({ loading: true });
    this.setState({ ...data, loading: false });
  };

  updatePassword = password => {
    this.setState({ password });
  };

  logout = () => {
    this.setState({
      ...resetPengguna
    });
  };
}

export default OlahAkun;
