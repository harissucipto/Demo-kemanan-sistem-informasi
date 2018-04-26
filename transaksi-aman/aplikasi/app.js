new Vue({
    el: '#app',
    data: {
      kodeBaru: '',
      harga: '',
      boxPesan: [],
      telahDibuat: false
    },
    methods: {
        buatBaru() {

            const newTransaksi = {
                kode: this.kodeBaru,
                harga: this.harga,
                penjual: false,
                pengirim: false,
            }
            console.log(newTransaksi);
            this.boxPesan.push(newTransaksi);

            this.kodeBaru = '';
            this.harga = '';
            this.telahDibuat = true;
        },

        konfirmasi() {
            this.telahDibuat = false;
        }

    },
    mounted() {
      console.log('App mounted!');
      if (localStorage.getItem('boxPesan'))
        this.boxPesan = JSON.parse(localStorage.getItem('boxPesan'));
    },
    watch: {
      boxPesan: {
        handler() {
          console.log('boxPesan changed!');
          localStorage.setItem('boxPesan', JSON.stringify(this.boxPesan));
        },
        deep: true
      }
    }
  });
