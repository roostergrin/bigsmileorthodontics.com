<template lang="pug" src="./patient.pug"></template>

<script>
export default {
  name: 'New Patient',
  computed: {
    props () {
      return this.$store.state.pages['new-patient']
    }
  },
  components: {
  }
}
</script>
