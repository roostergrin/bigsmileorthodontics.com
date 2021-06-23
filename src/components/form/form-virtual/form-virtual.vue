<template lang="pug" src="./form-virtual.pug"></template>

<script>
import api from 'api'
import axios from 'axios'
import { Storage, Auth } from 'aws-amplify'
import config from '@/config'
export default {
  data: () => {
    return {
      eighteenOlder: '',
      firstName: '',
      lastName: '',
      clientEmail: '',
      clientPhone: '',
      patientBirthday: '',
      clientInsure: '',
      treatments: '',
      mainConcern: '',
      images: 0,
      attachment: [],
      postUrl: api + '/rg-mail/v1/virtualform',
      imageUrl: 'https://s3-us-west-2.amazonaws.com/uploader-images/private/us-west-2%3A022601fa-f8f4-4950-bfcf-d43e0fe5dcd7/',
      formSubmitted: false,
      formSuccess: false,
      modalShowing: false
    }
  },
  async created () {
    Auth.signIn(config.website.EMAIL, config.website.SECRET)
  },
  methods: {
    upload () {
      const files = this.$refs.uploads.files
      this.images = files.length
      for (let file = 0; file <= files.length - 1; file++) {
        var filename = `${Date.now()}-${files[file].name}`
        this.attachment.push(this.imageUrl + filename)
        Storage.vault.put(filename, files[file], { contentType: files[file].type })
      }
    },
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

      axios.post(this.postUrl, {
        eighteenOlder: this.eighteenOlder,
        firstName: this.firstName,
        lastName: this.lastName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        patientBirthday: this.patientBirthday,
        clientInsure: this.clientInsure,
        treatments: treatmentsArr.join(', '),
        mainConcern: this.mainConcern,
        attachment: this.attachment
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            window.location.href = 'https://bigsmileorthodontics.com/thank-you'
          }, 500)
          setTimeout(() => {
            this.eighteenOlder = ''
            this.firstName = ''
            this.lastName = ''
            this.clientEmail = ''
            this.clientPhone = ''
            this.patientBirthday = ''
            this.clientInsure = ''
            this.mainConcern = ''
            this.attachment = []
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
