var application_codigo_qr = new Vue({
  el: '#application_codigo_qr',
  data:{
      title_codigo_qr: 'Código QR',
      name_user: '',
      codigo_qr: new QRious({size:350})
  },
  computed:{
      newCodigoQR(){
          this.codigo_qr.value = this.name_user
          return this.codigo_qr.toDataURL()
      }
  },
  methods:{
      onData(event){
          this.name_user = event.target.value          
      },
  } 
})