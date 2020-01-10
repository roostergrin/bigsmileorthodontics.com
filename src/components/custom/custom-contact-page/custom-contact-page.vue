<template lang="pug" src="./custom-contact-page.pug"></template>

<script>
import FormContact from 'components/form/form-contact/form-contact'

export default {
  props: {
    contact: {
      type: [Object, Array]
    },
    props: {
      type: [Object, Array]
    }
  },
  components: {
    FormContact
  }
}
</script>
