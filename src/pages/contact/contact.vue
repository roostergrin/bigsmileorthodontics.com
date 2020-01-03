<template lang="pug" src="./contact.pug"></template>

<script>
export default {
  name: 'Contact Us',
  computed: {
    props () {
      return this.$store.state.pages['contact-us']
    }
  },
  components: {
  }
}
</script>
