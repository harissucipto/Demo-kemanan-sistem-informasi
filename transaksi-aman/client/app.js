new Vue({
    el: '#app',
    data: {
      kode: '',
      harga: '',
      boxPesan: [],
    },
    methods: {
        bayar() {
            let index = 'tak';
            let kode = this.kode;
            let harga = this.harga;
            this.boxPesan.forEach((element, i) => {
               if (element.kode === kode && element.harga === harga ) {
                   index = i;
               }
            });

            if (index !== 'tak') {
                this.boxPesan[index].pengirim = true;
                this.harga = '';
                this.kode = '';
                alert('pembayaran berhasil');
            } else {
                alert('pembayaran gagal silahkan cek harga atau kode nya tidak sesuai')
            }

        }


    },
    mounted() {
      console.log('App mounted!');
      if (localStorage.getItem('boxPesan'))
        this.boxPesan = JSON.parse(localStorage.getItem('boxPesan'));
    },

    computed: {
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
