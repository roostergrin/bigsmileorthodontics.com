<template lang="pug" src="./form-contact.pug"></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      firstName: '',
      lastName: '',
      clientEmail: '',
      clientPhone: '',
      clientPromo: '',
      isFirstTime: false,
      firstTimeMessage: 'No, I am not a first time patient',
      bestWayContact: '',
      bestTimeContact: '',
      treatments: '',
      clientMessage: '',
      postUrl: api + '/rg-mail/v1/contact',
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
      if (this.isFirstTime) {
        this.firstTimeMessage = 'Yes, I am a first time patient'
      }
      // Ways to contact
      if (this.cellContact && this.emailContact) {
        this.bestWayContact = 'Cellphone and e-mail'
      }
      if (this.cellContact) {
        this.bestWayContact = 'Cellphone'
      }
      if (this.emailContact) {
        this.bestWayContact = 'E-mail'
      }

      // Types of treatment
      var treatmentsArr = []
      if (this.braces) {
        // this.treatments = 'Braces';
        treatmentsArr.push('Braces')
      }
      if (this.invisalign) {
        // this.treatments = 'Invisalign';
        treatmentsArr.push('Invisalign')
      }
      if (this.retainer) {
        // this.treatments = 'Retainer';
        treatmentsArr.push('Retainer')
      }
      if (this.expander) {
        // this.treatments = 'Expander';
        treatmentsArr.push('Expander')
      }
      if (this.sleepApnea) {
        // this.treatments = 'Sleep Apnea Device';
        treatmentsArr.push('Sleep Apnea Device')
      }
      if (this.otherTreatment) {
        // this.treatments = this.otherTreatment;
        treatmentsArr.push(this.otherTreatment)
      }

      // console.log(this.otherTreatment);
      // console.log(document.getElementsByName('cellContact')[0].value)

      axios.post(this.postUrl, {
        firstName: this.firstName,
        lastName: this.lastName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        clientPromo: this.clientPromo,
        firstTime: this.firstTimeMessage,
        bestWayContact: this.bestWayContact,
        bestTimeContact: this.bestTimeContact,
        treatments: treatmentsArr.join(', '),
        clientMessage: this.clientMessage
      })
        .then(res => {
          this.formSuccess = true
          // setTimeout(() => {
          //   window.location.href = 'https://bigsmileorthodontics.com/thank-you'
          // }, 500)
          setTimeout(() => {
            this.firstName = ''
            this.lastName = ''
            this.clientEmail = ''
            this.clientPhone = ''
            this.clientPromo = ''
            this.isFirstTime = false
            this.bestWayContact = ''
            this.bestTimeContact = ''
            this.clientMessage = ''
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
