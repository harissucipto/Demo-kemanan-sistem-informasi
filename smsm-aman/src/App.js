import React, { Component } from 'react';
import { caiserChiperEnkrip, caiserChiperDekrip } from './caisar-chiper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pesan: '',
      enkripsi: '',
      nomor: '',
      terkirim: false,
      dekripsi: '',
      rute: '',
    }
  }

  onTextChange = (event) => {
    const pesan = event.target.value;
    const enkripsi = '';
    this.setState({pesan, enkripsi});
  }

  onEnkripsi = () => {
    const enkripsi = caiserChiperEnkrip(this.state.pesan);
    this.setState({enkripsi});
  }

  onNomorChange = (event) => {
    const nomor = event.target.value.trim();
    this.setState({nomor});
  }

  onKirim = () => {
    this.setState(
      {
        pesan: '',
        enkripsi: '',
        nomor: '',
        terkirim: true,
        rute: 'kirim',
      }
    )
  }

  onSelesai = () => {
    this.setState({terkirim: false})};

  arahMenu = (arah) => {

    this.setState( {
      pesan: '',
      enkripsi: '',
      nomor: '',
      terkirim: false,
      dekripsi: '',
      rute: arah,
    });
  }

  onDekripsi = () => {
    const dekripsi = caiserChiperDekrip(this.state.pesan);
    this.setState({dekripsi});
  }





  render() {

    const { enkripsi, terkirim, nomor, rute, dekripsi, pesan } =  this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kirim Pesan Aman</h1>
          <h3>Aplikasi Pengiriman Pesan Ke WA dengan melakukan
            Enkripsi Pesan Terlebih dahulu menggunakan metode Caisar Cipher
          </h3>
        </header>


        <div>
          <br />
          <button onClick={() => this.arahMenu('kirim')}>Kirim Pesan</button>
          <button onClick={() => this.arahMenu('terjemah')}>Dekrip Pesan</button>
        </div>

       {
         rute === 'kirim' ? (
          <div className="App-intro">
          {
            !terkirim ?
            (
              <div>
                <h2>Masukan Pesan yang akan diEnkripsi</h2>
                <input value={pesan} type="text" onChange={this.onTextChange} />
                <button onClick={this.onEnkripsi}>Enkripsi</button>
              </div>
            )  : ''
          }

            <div>
              {
                enkripsi.length?
                (
                  <div>
                    <br />
                    <i>Hasil enkripsi pesan: </i>
                    <b>{ this.state.enkripsi}</b>


                    <h2>Kirim hasilnya Ke WA</h2>
                    <input type="text" onChange={this.onNomorChange} />
                    <button onClick={() => {
                      this.onKirim();
                      window.open(`https://api.whatsapp.com/send?phone=62${nomor}&text=${enkripsi}`)
                    }}>Krim</button>

                    <br />

                  </div>

                ) : terkirim ?
                (
                  <div>
                    <p>Pesan berhasil Terkirim</p>
                    <button onClick={this.onSelesai}>OK</button>
                  </div>
                ) : ''
              }

            </div>
          </div>) :  rute === 'terjemah' ?
          (
            (
              <div className="App-intro">
                <div>
                  <h2>Masukan Pesan yang akan di Dekripsi </h2>
                  <input type="text" value={pesan} onChange={this.onTextChange} />
                  <button onClick={this.onDekripsi}>Dekrip</button>
                </div>

                <br />

                {
                  dekripsi.length ?
                  (
                    <div><i>hasilnya: </i><br />
                    <h3>{ dekripsi }</h3></div>
                  ) : ''
                }

              </div>

            )
          ) : ''


       }






      </div>
    );
  }
}

export default App;
