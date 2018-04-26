new Vue({
    el: '#app',
    data: {
      login: false,
      penjual: '',
      boxPesan: [],
    },
    methods: {
        konfirmasiPengiriman(index) {
            this.boxPesan[index].penjual = true;
        },
        onLogin() {
          this.login = true;
        },
        cekPembeli(status) {
          return status ? 'sudah Dibayar' : 'belum dibayar';
        },
        cekStatus(penjual, pembeli) {
          return !penjual && !pembeli ? 'transaksi belum selesai' : 'transaksi selesai, uang telah diteruskan ke rekening penjual'
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
