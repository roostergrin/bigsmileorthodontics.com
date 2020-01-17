<template lang="pug" src="./form-dentist.pug"></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      dentistName: '',
      dentistEmail: '',
      dentistPhone: '',
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      postUrl: api + '/rg-mail/v1/dentist',
      formSubmitted: false,
      formSuccess: false,
      modalShowing: false
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.onSubmit()
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    closeModal () {
      this.formSuccess = false
      this.formSubmitted = false
      setTimeout(() => {
        this.modalShowing = false
      }, 150)
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        dentistName: this.dentistName,
        dentistEmail: this.dentistEmail,
        dentistPhone: this.dentistPhone,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            this.modalShowing = true
          }, 750)
          setTimeout(() => {
            this.dentistName = ''
            this.dentistEmail = ''
            this.dentistPhone = ''
            this.clientName = ''
            this.clientEmail = ''
            this.clientPhone = ''
          }, 1000)
          setTimeout(() => {
            this.errors.clear()
          }, 1100)
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
